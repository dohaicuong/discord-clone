import bcrypt from 'bcrypt'
import { promisify } from 'util'
const saltRounds = 10

const hashPromise = promisify(bcrypt.hash)
export const hashPassword = (password: string): Promise<string> => {
  return hashPromise(password, saltRounds)
}

const comparePromise = promisify(bcrypt.compare)
export const comparePassword = (password: string, hash: string): Promise<boolean> => {
  return comparePromise(password, hash).catch(_err => false)
}
