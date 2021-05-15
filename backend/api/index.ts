import { server } from './server'

server.listen(3000).then((url) => {
  console.log(`🚀 graphql is ready at ${url}`)
  console.log(`🚀 playground is ready at ${url}/playground`)
})

process.on('SIGTERM', () => process.exit())