import React from 'react'
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
import loadingAnimationStore from './stores/loadingAnimationStore'
import commonStore from './stores/commonStore'
// Pages
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ElementsPage from './pages/ElementsPage'
import LodashPage from './pages/LodashPage'
import NotFoundPage from './pages/NotFoundPage'

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
              <Route exact path={'/'} component={HomePage} />
              <Route exact path={'/login'} component={LoginPage} />
              <Route exact path={'/elements'} component={ElementsPage} />
              <Route exact path={'/lodashs'} component={LodashPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </ConfigProvider>
        <LoadingSpinner />
      </ThemeProvider>
    </Provider>
  )
}

export default App
