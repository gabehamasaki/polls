import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function voteOnPoll(app: FastifyInstance) {
  app.post('/polls/:pollId/vote', async (request, reply) => {
    const voteOnPollBody = z.object({
      optionId: z.string().uuid(),
    })

    const voteOnPollParams = z.object({
      pollId: z.string().uuid(),
    })

    const { pollId } = voteOnPollParams.parse(request.params);
    const { optionId } = voteOnPollBody.parse(request.body);

    
    return reply.send({});
  })
} 