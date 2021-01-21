import React, { useEffect } from 'react'
import LoadingSpinner from './components/LoadingSpinner'
import { ConfigProvider } from 'antd'
import viVN from 'antd/es/locale/vi_VN'
import moment from 'moment'
import 'moment/locale/vi'
// Styling
import './App.less'
import ThemeProvider from './providers/ThemeProvider'
// React Router
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// MobX
import { Provider } from 'mobx-react'
import 'mobx-react-lite/batchingForReactDom'
import loadingAnimationStore from './stores/loadingAnimationStore'
import commonStore from './stores/commonStore'
// Pages
import NotFoundPage from './pages/NotFoundPage'
import routeRouter from './routerRouter'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('jwt') || sessionStorage.getItem('jwt')
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }} />
  )} />
)

const history = createBrowserHistory()

const rootStore = {
  loadingAnimationStore,
  commonStore,
}

moment.locale('vi', {
  week: {
    dow: 1,
  },
})

const App = () => {
  return (
    <Provider {...rootStore}>
      <ThemeProvider>
        <ConfigProvider locale={viVN}>
          <Router history={history}>
            <Switch>
              <Route exact path={routeRouter.login.path} component={routeRouter.login.component} />
              <Route exact path={routeRouter.elements.path} component={routeRouter.elements.component} />

              <Route exact path={routeRouter.home.path} component={routeRouter.home.component} />

              <Route component={routeRouter.notFound.component} />
            </Switch>
          </Router>
        </ConfigProvider>
        <LoadingSpinner />
      </ThemeProvider>
    </Provider>
  )
}

export default App
