import { fromGlobalId } from 'graphql-relay'
import { scalarType } from 'nexus'

// Only use for input
export const RelayId = scalarType({
  name: 'RelayId',
  asNexusMethod: 'relayId',
  parseValue: value => fromGlobalId(value).id,
  parseLiteral: (v: any) => fromGlobalId(v.value).id,
})
