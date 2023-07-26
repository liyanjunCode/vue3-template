const Home = () => import('@pages/home')
const About = () => import('@pages/about')

const routes = [
    {
        path: '/',
        meta: {

        },
        component: Home
    },
    { path: '/about', component: About }
]


export default routes
