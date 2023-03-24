import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'List',
            component: () => import('../components/List')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../components/Create')
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: () => import('../components/Edit')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../components/About')
        }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
