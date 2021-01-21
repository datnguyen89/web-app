import React from 'react'
import LoginPage from './pages/LoginPage'
import ElementsPage from './pages/ElementsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const routeRouter = {
  login: {
    path: '/login',
    component: () => <LoginPage />,
  },
  elements: {
    path: '/elements',
    component: () => <ElementsPage />,
  },
  home: {
    path: '/',
    component: () => <HomePage />,
  },
  notFound: {
    path: undefined,
    component: () => <NotFoundPage />,
  },
}
export default routeRouter