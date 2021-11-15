const store = require("@/store/index.js")

export default function AdminGuard(to, from, next) {
    if (to.matched.some(record => record.meta.adminOnly)) {
        if (store.store.getters["authentication/token"] && store.store.getters["authentication/isAdmin"]) {
            next()
        } else {
            next('/login');
        }
    } else {
        next('/login');
    }
}
