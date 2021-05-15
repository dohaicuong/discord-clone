import { extendType } from 'nexus'

export const MeQuery = extendType({
  type: 'Query',
  definition: t => {
    t.field('me', {
      type: 'User',
      resolve: async (_, __, ctx) => {
        if (!ctx.userId) return null
        return ctx.prisma.user.findUnique({ where: { id: ctx.userId }})
      }
    })
  }
})