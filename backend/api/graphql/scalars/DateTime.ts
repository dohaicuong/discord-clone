import { scalarType } from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'

export const DateTime = scalarType({
  ...DateTimeResolver,
  asNexusMethod: 'datetime'
})