import React from 'react'
import LoginPage from './pages/LoginPage'
import ElementsPage from './pages/ElementsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const routeRouter = {
  login: {
    path: '/auth/login',
    component: () => <LoginPage />,
  },
  elements: {
    path: '/components/elements',
    subMenu: ['components'],
    component: () => <ElementsPage />,
  },
  dashboard: {
    path: '/',
    subMenu: ['dashboard'],
    component: () => <HomePage />,
  },
  notFound: {
    path: undefined,
    component: () => <NotFoundPage />,
  },
}
export default routeRouter