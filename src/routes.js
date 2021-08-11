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
    name: 'examples',
    component: Layout,
    label: '示例',
    icon: AppsIcon,
    children: [
      {
        path: 'table', component: () => import('./views/table/table.vue'),
        name: 'table',
        label: '表格'
      },
      {
        path: 'form', component: () => import('./views/form/form.vue'),
        name: 'form',
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