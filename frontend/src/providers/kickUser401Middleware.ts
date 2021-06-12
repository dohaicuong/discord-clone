import { MiddlewareNextFn, RelayRequestAny } from 'react-relay-network-modern'

export const kickUser401Middleware = (): any => {
  const rawMiddleware = (next: MiddlewareNextFn) => async (req: RelayRequestAny) => {
    const res: any = await next(req)
    if(res.status === 401) {
      localStorage.clear()
      window.location.reload()
    }

    return res
  }
  rawMiddleware.isRawMiddleware = true
  return rawMiddleware
}