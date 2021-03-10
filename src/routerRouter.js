import React from 'react'
import LoginPage from './pages/LoginPage'
import ElementsPage from './pages/ElementsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LodashPage from './pages/LodashPage'

const routeRouter = {
  login: {
    path: '/login',
    component: () => <LoginPage />,
  },
  home: {
    path: '/',
    component: () => <HomePage />,
  },
  elements: {
    path: '/elements',
    component: () => <ElementsPage />,
  },
  lodashPage: {
    path: '/lodashs',
    component: () => <LodashPage />,
  },

  notFound: {
    path: undefined,
    component: () => <NotFoundPage />,
  },
}
export default routeRouter