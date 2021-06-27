import { scalarType } from 'nexus'

export const IceCandidate = scalarType({
  name: 'IceCandidate',
  asNexusMethod: 'iceCandidate',
  // parseValue: value => fromGlobalId(value).id,
  // parseLiteral: (v: any) => fromGlobalId(v.value).id,
})
