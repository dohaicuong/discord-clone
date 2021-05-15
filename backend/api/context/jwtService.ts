import jwt from 'jsonwebtoken'
const secret = 'mikumikumasumasukawaii'

export type TokenPayload = {
  sub: string
}

export const signToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, secret)
}

export const verifyToken = (token: string): Promise<TokenPayload> => {
  return new Promise((resolve, reject) => {
    try {
      const payload = jwt.verify(token, secret) as TokenPayload
      resolve(payload)
    }
    catch(err) {
      reject(err)
    }
  })
}
