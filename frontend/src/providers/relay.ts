import { Environment, RecordSource, Store, Observable } from 'relay-runtime'
import { authMiddleware, RelayNetworkLayer, uploadMiddleware, urlMiddleware } from 'react-relay-network-modern'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import { kickUser401Middleware } from './kickUser401Middleware'
import { keepRelayErrorMiddleware } from './keepRelayError'

const {
  REACT_APP_API_ENDPOINT = '',
  REACT_APP_SUB_ENDPOINT = '',
} = process.env

const subscriptionClient = new SubscriptionClient(REACT_APP_SUB_ENDPOINT, { reconnect: true })

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => Promise.resolve(REACT_APP_API_ENDPOINT),
    }),
    authMiddleware({
      token: () => localStorage.getItem('jwt') || '',
    }),
    uploadMiddleware(),
    kickUser401Middleware(),
    keepRelayErrorMiddleware()
  ],
  {
    noThrow: true,
    // @ts-ignore
    subscribeFn: (request, variables, _cacheConfig) => {
      const subscribeObservable = subscriptionClient.request({
        query: request.text ?? undefined,
        operationName: request.name,
        variables,
      })
      // @ts-ignore
      return Observable.from(subscribeObservable)
    }
  }
)

export default new Environment({
  network,
  store: new Store(new RecordSource()),
})

