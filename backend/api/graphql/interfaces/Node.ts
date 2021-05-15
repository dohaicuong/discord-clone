import { fromGlobalId, toGlobalId } from 'graphql-relay'
import { extendType, interfaceType, list, nonNull } from 'nexus'

export const NodeInterface = interfaceType({
  name: 'Node',
  resolveType: (node: any) => node.type,
  definition: t => {
    t.nonNull.id('id', {
      description: 'Relay ID',
      resolve: (node: any, __, ___, { parentType }) => {
        return toGlobalId(parentType.name, node.id)
      }
    })
  },
})

export const NodeQuery = extendType({
  type: 'Query',
  definition: t => {
    t.field('node', {
      type: 'Node',
      args: { id: nonNull('ID') },
      resolve: async (_, args, ctx) => {
        const { id, type, prismaObject } = decodeGlobalId(args.id)
        const node = await (ctx.prisma as any)[prismaObject].findUnique({ where: { id } })
        return {
          ...node,
          type
        }
      }
    })
  }
})

export const NodesQuery = extendType({
  type: 'Query',
  definition: t => {
    t.list.field('nodes', {
      type: 'Node',
      args: { ids: nonNull(list(nonNull('ID'))) },
      // @ts-ignore
      resolve: (_, args, { prisma }) => {
        return args.ids.map(async globalId => {
          const { id, type, prismaObject } = decodeGlobalId(globalId)
          const node = await (prisma as any)[prismaObject].findUnique({ where: { id } })
          return {
            ...node,
            type
          }
        })
      }
    })
  }
})

/*
 * HELPERS
 */
const decodeGlobalId = (globalId: string): { id: string, type: string, prismaObject: string } => {
  const { type, id } = fromGlobalId(globalId)
  const prismaObject = type.charAt(0).toLowerCase() + type.slice(1)
  return { id, type, prismaObject }
}