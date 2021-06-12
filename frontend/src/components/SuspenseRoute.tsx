import {
  Component,
  FunctionComponent,
  JSXElementConstructor,
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactPortal,
  Suspense
} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route } from 'react-router-dom'

type SuspenseRouteProps = {
  error?: ReactElement<unknown, string | typeof Component | FunctionComponent<{}>> | null
  suspense?: boolean | ReactChild | ReactFragment | ReactPortal | null
  path?: string | undefined
  element?: ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
}
const SuspenseRoute: React.FC<SuspenseRouteProps> = ({
  error = <>Routing error</>,
  suspense = 'Loading page...',
  path,
  element,
  children
}) => {
  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={suspense}>
        <Route path={path} element={element}>
          {children}
        </Route>
      </Suspense>
    </ErrorBoundary>
  )
}
export default SuspenseRoute
