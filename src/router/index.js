import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import auth from './middleware/auth'


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//  登录鉴权
router.beforeEach(auth)
export default router
