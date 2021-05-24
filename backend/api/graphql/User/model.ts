import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition: t => {
    t.implements('Node')
    // t.nonNull.id('id')
    t.nonNull.string('email')
    t.nonNull.string('username')
  }
})
