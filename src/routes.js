import { HomeOutline as HomeIcon, AppsOutline as AppsIcon, LinkOutline as LinkIcon } from '@vicons/ionicons5'

import Layout from './layout/index.vue'

const routes = [
  { path: '/404', component: () => import('./views/404.vue'), hidden: true },
  { path: '/login', component: () => import('./views/login.vue'), hidden: true },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('./views/home/home.vue'),
        name: 'home',
        label: '首页',
        icon: HomeIcon
      }
    ]
  },
  {
    path: '/examples',
    component: Layout,
    name: 'examples',
    label: '示例',
    icon: AppsIcon,
    children: [
      {
        path: 'form', component: () => import('./views/home/home.vue'),
        name: 'form',
        label: '表单'
      },
      {
        path: 'list', component: () => import('./views/home/home.vue'),
        name: 'list',
        label: '表单'
      },
      {
        path: 'other', component: () => import('./views/home/home.vue'),
        name: 'other',
        label: '其他'
      },
    ]
  }
]
export default routes