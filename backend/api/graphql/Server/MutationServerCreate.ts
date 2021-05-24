import { extendType, inputObjectType, nonNull, objectType } from "nexus"
import { UserRole } from '@prisma/client'

export const ServerCreateInput = inputObjectType({
  name: 'ServerCreateInput',
  definition: t => {
    t.nonNull.string('title')
    t.string('nickname')
    t.upload('logo')
  }
})
export const ServerCreatePayload = objectType({
  name: 'ServerCreatePayload',
  definition: t => {
    t.field('server', { type: 'Server' })
    t.field('userServer', { type: 'UsersOnServers' })
  }
})
export const ServerCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('serverCreate', {
      type: nonNull('ServerCreatePayload'),
      args: {
        input: nonNull('ServerCreateInput')
      },
      resolve: async (_, { input }, ctx) => {
        if(!ctx.userId) throw new Error('Please login')
      
        const [logoPath, userNickname] = await Promise.all([
          input.logo
            ? ctx.fileService.writeFile(input.logo)
            : null,
          input.nickname
            ? input.nickname
            : ctx.prisma.user.findUnique({ where: { id: ctx.userId }}).then(res => res?.username)
        ])
          
        const server = await ctx.prisma.server.create({
          data: {
            title: input.title,
            logo: logoPath,
            serverUsers: {
              create: {
                userId: ctx.userId,
                role: UserRole.SERVER_OWNER,
                nickname: userNickname as any,
              }
            }
          },
          include: {
            serverUsers: true,
          }
        })
        const userServer = server.serverUsers[0]

        return {
          server,
          userServer,
        }
      }
    })
  }
})