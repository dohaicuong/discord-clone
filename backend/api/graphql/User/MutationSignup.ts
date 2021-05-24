import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const SignupMutationInput = inputObjectType({
  name: 'SignupMutationInput',
  definition: t => {
    t.nonNull.string('email')
    t.nonNull.string('password')

    t.nonNull.string('username')
    t.upload('avatar')
  }
})
export const SignupMutationPayload = objectType({
  name: 'SignupMutationPayload',
  definition: t => {
    t.nonNull.string('token')
    t.nonNull.field('user', { type: 'User' })
  }
})
export const SignupMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('signup', {
      args: { input: nonNull(SignupMutationInput) },
      type: nonNull(SignupMutationPayload),
      resolve: async (_, { input: { email, password, avatar, ...input } }, ctx) => {
        const isExisted = Boolean(await ctx.prisma.user.findFirst({ where: { email }}))
        if(isExisted) throw new Error('email is existed')

        const [ hashedPassword, avatarName ] = await Promise.all([
          await ctx.cryptoService.hashPassword(password),
          avatar ? await ctx.fileService.writeFile(avatar) : null
        ])

        const user = await ctx.prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            avatar: avatarName,
            ...input
          }
        })
        const token = ctx.jwtService.signToken({ sub: user.id })

        return {
          token,
          user,
        }
      }
    })
  }
})