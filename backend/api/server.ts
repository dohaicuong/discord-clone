import Fastify from 'fastify'
export const server = Fastify()

import mercurius from 'mercurius'
import { schema } from './schema'
import { context } from './context'
server.register(mercurius, {
  schema,
  context,
  graphiql: 'playground',
  allowBatchedQueries: true,
})
