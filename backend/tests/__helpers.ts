import { join } from 'path'

import { createMercuriusTestClient } from 'mercurius-integration-testing'
import { server } from '../api/server'

import { PrismaClient } from '.prisma/client'
import { execSync } from 'child_process'

type TestContext = {
  client: ReturnType<typeof createMercuriusTestClient>
  prisma: PrismaClient
}

export function createTestContext(): TestContext {
  let ctx = {} as TestContext
  const prismaCtx = prismaTestContext()

  beforeAll(async () => {
    const client = createMercuriusTestClient(server)
    const prisma = await prismaCtx.before()

    Object.assign(ctx, {
      client,
      prisma,
    })
  })

  afterAll(async () => {
    await prismaCtx.after()
  })

  return ctx
}

const prismaTestContext = () => {
  const prismaBinary = join(__dirname, '..', 'node_modules', '.bin', 'prisma')
  let prismaClient: null | PrismaClient = null
  const env = `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/testdb"`

  return {
    async before() {
      // Run the migrations to ensure our schema has the required structure
      execSync(`${env} && ${prismaBinary} db push`)
      // Construct a new Prisma Client connected to the generated schema
      prismaClient = new PrismaClient()
      return prismaClient
    },
    async after() {
      execSync(`${env} && ${prismaBinary} migrate reset --force`)
      // Release the Prisma Client connection
      await prismaClient?.$disconnect()
    },
  }
}
