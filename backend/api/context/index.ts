import { FastifyRequest, FastifyReply } from 'fastify'
import { SocketStream } from 'fastify-websocket'
import { PrismaClient } from '@prisma/client'
import { PubSub } from 'mercurius'
import kurento from 'kurento-client'
import * as cryptoService from './cryptoService'
import * as jwtService from './jwtService'
import * as fileService from './fileService'
import { pipeline } from 'stream'

const prisma = new PrismaClient()
const promiseKurentoClient = kurento('ws://localhost:8888/kurento')

export type Context = {
  prisma: PrismaClient
  kurentoClient: kurento.ClientInstance
  cryptoService: typeof cryptoService
  jwtService: typeof jwtService
  userId: string | null
  pubsub: PubSub
  fileService: typeof fileService
}

// promiseKurentoClient.then(async kurento => {
//   const manager = await kurento.getServerManager()
//   const pipelines = await manager.getPipelines()
//   pipelines.forEach(async pipeline => {
//     const mediaObjects = (await pipeline.getChildren()).map(object => object.id)
//     console.log(mediaObjects)
//   })
// })

export const context = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization?.replace('Bearer ', '')
  const tokenPayload = !token
    ? null
    : await jwtService.verifyToken(token).catch(() => reply.status(401))
  
  return {
    prisma,
    kurentoClient: await promiseKurentoClient,
    userId: tokenPayload?.sub ?? null,
    cryptoService,
    jwtService,
    fileService,
  }
}

export const subContext = async (connection: SocketStream, request: FastifyRequest) => {
  return {
    prisma,
    cryptoService,
    jwtService,
    fileService
  }
}