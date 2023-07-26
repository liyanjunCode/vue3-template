// const loginPath = '/login'

// const isLogin = false
// 登录态权限认证
export default function auth (to, from, next) {
    // if (isLogin || to.path === loginPath) {
    //     next()
    // } else {
    //     next({ path: loginPath })
    // }
    next()
}
