import { connectionPlugin, makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  plugins: [
    connectionPlugin({
      disableBackwardPagination: true,
      nonNullDefaults: {
        output: true,
      }
    }),
  ],
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'schema.graphql'),
  },
  contextType: {
    module: join(__dirname, 'context', 'index.ts'),
    export: 'Context',
  },
})
