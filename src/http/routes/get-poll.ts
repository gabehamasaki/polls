import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";
import { redis } from "../../lib/redis";

export async function getPoll(app: FastifyInstance) {
  app.get('/polls/:pollId', async (request, reply) => {
    const getPollParams = z.object({
      pollId: z.string().uuid(),
    })
  
    const { pollId } = getPollParams.parse(request.params);
  
    const poll = await prisma.poll.findFirst({
      where: {
        id: pollId,
      },
      include: {
        options: {
          select: {
            id: true,
            title: true,
          }
        },
      },
    })

    if (!poll) {
      return reply.status(404).send({
        message: 'Poll not found.',
      });
    }

    const result = await redis.zrange(pollId, 0, -1, 'WITHSCORES');

    const votes = result.reduce((obj, line, index) => {
      if (index % 2 === 0) {
        const score = Number(result[index + 1]);

        Object.assign(obj, {
          [line]: score
        })
      }

      return obj;
    }, {} as Record<string, number>);

    return reply.send({ 
      poll: {
        ...poll,
        options: poll.options.map(option => ({
          id: option.id,
          title: option.title,
          votes: votes[option.id] || 0,
        })),
      } 
    });
  })
} 