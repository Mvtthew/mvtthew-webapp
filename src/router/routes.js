export const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/Welcome'),
        meta: {
            title: 'Welcome'
        }
    },
    {
        path: '/experience/',
        name: 'Experience',
        component: () => import('../views/Experience'),
        meta: {
            title: 'Experience'
        }
    },
    {
        path: '/tech-stack/',
        name: 'TechStack',
        component: () => import('../views/TechStack'),
        meta: {
            title: 'Tech Stack'
        }
    },
    {
        path: '/contact/',
        name: 'Contact',
        component: () => import('../views/Contact'),
        meta: {
            title: 'Contact'
        }
    },
    {
        path: '/portfolio/',
        name: 'Portfolio',
        component: () => import('../views/Portfolio'),
        meta: {
            title: 'Portfolio'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]
