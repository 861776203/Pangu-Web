import EmptyLayout from '@/layout/empty'
export default [
    {
        path: '/',
        component: EmptyLayout,
        redirect: '/index',
        name: 'index',
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import(/* webpackChunkName: 'about' */ '@/views/index.vue'),
                meta: {
                    title: '首页'
                }
            }
        ]
    }
]