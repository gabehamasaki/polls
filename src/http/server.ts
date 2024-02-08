import fastify from 'fastify';
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';

const app = fastify()

// Polls Routes
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({
  port: 3333,
}).then(() => console.log('🚀 HTTP Server is running'))