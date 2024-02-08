import { FastifyInstance } from "fastify";

export default function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', {  websocket: true }, async (connection, request) => {
    connection.socket.on('message', async (message: string) => {
      connection.socket.send('pong')
    })
  })
}