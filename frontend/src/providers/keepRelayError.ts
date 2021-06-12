import { MiddlewareNextFn, RelayRequestAny } from 'react-relay-network-modern'

export const keepRelayErrorMiddleware = () => {
  return (next: MiddlewareNextFn) => async (req: RelayRequestAny) => {
    return next(req).catch(res => {
      const response = res?.res?.text ? JSON.parse(res?.res?.text) : {}
      return { ...response, data: {} }
    })
  }
}