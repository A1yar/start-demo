// Dome
const Dome = () => import(/* webpackChunkName: "Dome" */ '@/components/dome')

// DomePage
const DomePage = () => import(/* webpackChunkName: "Dome" */ '@/components/DomePage')

export default [
  // dome
  {
    path: '/dome',
    name: 'Dome',
    component: Dome
  },
  // DomePage
  {
    path: '/DomePage',
    name: 'DomePage',
    component: DomePage
  }
]
