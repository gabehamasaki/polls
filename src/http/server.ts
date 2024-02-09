import fastify from 'fastify';
import cookie from '@fastify/cookie'
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';
import pollResults from './ws/poll-results';
import websocket from '@fastify/websocket';

const app = fastify()

app.register(cookie, {
  secret: '$bacaf5fc23a34f389e9d00c83a24bb5$',
  hook: 'onRequest',
})

app.register(websocket);

// Polls Routes
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

// Websocket Routes
app.register(pollResults)

app.listen({
  port: 3333,
}).then(() => console.log('🚀 HTTP Server is running'))