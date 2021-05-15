import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const LoginMutationInput = inputObjectType({
  name: 'LoginMutationInput',
  definition: t => {
    t.nonNull.string('email')
    t.nonNull.string('password')
  }
})
export const LoginMutationPayload = objectType({
  name: 'LoginMutationPayload',
  definition: t => {
    t.nonNull.string('token')
    t.nonNull.field('user', { type: 'User' })
  }
})
export const LoginMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('login', {
      args: { input: nonNull(LoginMutationInput) },
      type: nonNull(LoginMutationPayload),
      resolve: async (_, { input: { email, password }}, ctx) => {
        const user = await ctx.prisma.user.findFirst({ where: { email }})
        if(!user) throw new Error('wrong credentials')

        const isMatchPassword = await ctx.cryptoService.comparePassword(password, user.password)
        if(!isMatchPassword) throw new Error('wrong credentials')

        const token = ctx.jwtService.signToken({ sub: user.id })        

        return {
          token,
          user,
        }
      }
    })
  }
})