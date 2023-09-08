import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const DashBoard = lazy(() => import('../pages/DashBoard'))

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: DashBoard
  },
]

const routes = [...coreRoutes]

export default routes
