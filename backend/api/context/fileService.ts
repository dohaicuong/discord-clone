import { createWriteStream } from 'fs'
import { join } from 'path'
import util from 'util'
import stream from 'stream'
import cuid from 'cuid'
import { FileUploadPromise } from '../graphql/scalars/Upload'

const pipeline = util.promisify(stream.pipeline)

export const writeFile = async (input: FileUploadPromise) => {
  const file = await input
  const [, extension] = file.mimetype.split('/')
  const name = `${cuid()}.${extension}`

  await pipeline(
    file.createReadStream(),
    createWriteStream(join(__dirname, '..', '..', 'media', name))
  )

  return name
}
