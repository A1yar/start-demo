// Dome
const Dome = () => import(/* webpackChunkName: "Dome" */ '@/components/dome')

// DomePage
const DomePage = () => import(/* webpackChunkName: "Dome" */ '@/components/DomePage')

// swiperCell
const swiperCell = () => import(/* webpackChunkName: "Dome" */ '@/components/test/swiperCell')

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
  },
  // swiperCell
  {
    path: '/swiper-cell',
    name: 'swiper-cell',
    component: swiperCell
  }
]
