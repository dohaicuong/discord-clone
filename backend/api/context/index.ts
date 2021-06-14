import { FastifyRequest, FastifyReply } from 'fastify'
import { SocketStream } from "fastify-websocket"
import { PrismaClient } from '@prisma/client'
import { PubSub } from 'mercurius'
import * as cryptoService from './cryptoService'
import * as jwtService from './jwtService'
import * as fileService from './fileService'

const prisma = new PrismaClient()

export type Context = {
  prisma: PrismaClient
  cryptoService: typeof cryptoService
  jwtService: typeof jwtService
  userId: string | null
  pubsub: PubSub
  fileService: typeof fileService
}

export const context = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization?.replace('Bearer ', '')
  const tokenPayload = !token
    ? null
    : await jwtService.verifyToken(token).catch(() => reply.status(401))
  
  return {
    prisma,
    userId: tokenPayload?.sub ?? null,
    cryptoService,
    jwtService,
    fileService
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