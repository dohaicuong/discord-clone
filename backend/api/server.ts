import Fastify from 'fastify'
export const server = Fastify()

import MercuriusGQLUpload from 'mercurius-upload'
server.register(MercuriusGQLUpload, {})

import mercurius from 'mercurius'
import { schema } from './schema'
import { context, subContext } from './context'
server.register(mercurius, {
  schema,
  context,
  graphiql: 'playground',
  allowBatchedQueries: true,
  subscription: {
    context: subContext
  },
})

import altairFastify from 'altair-fastify-plugin'
server.register(altairFastify, {
  path: '/altair',
  baseURL: '/altair/',
  endpointURL: '/graphql'
})

import fastifyStatic from 'fastify-static'
import path from 'path'
server.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'media'),
  decorateReply: false,
  prefix: '/media',
  list: true,
})

import fastifyCors from 'fastify-cors'
server.register(fastifyCors)