module.exports = {
  src: './src',
  schema: '../backend/schema.graphql',
  exclude: ['**/node_modules/**', '**/mocks/**', '**/__generated__/**'],
  extensions: ['tsx', 'ts'],
  language: 'typescript',
  customScalars: {
    DateTime: 'String',
    Media: 'String'
  }
}