import { scalarType } from 'nexus'
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { join } from 'path'

export type FileUploadPromise = Promise<FileUpload>
export type Media = string

export const Upload = scalarType({
  ...GraphQLUpload,
  sourceType: {
    module: join(__dirname, 'Upload.ts'),
    export: 'FileUploadPromise',
  },
  asNexusMethod: 'upload'
})

const {
  MEDIA_PATH = 'http://127.0.0.1:4000/media',
} = process.env
export const Media = scalarType({
  name: 'Media',
  asNexusMethod: 'media',
  sourceType: {
    module: join(__dirname, 'Upload.ts'),
    export: 'Media',
  },
  serialize: value => {
    return `${MEDIA_PATH}/${value}`
  }
})