import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('views/home/Home.vue')
const Cart = () =>
    import ('views/cart/Cart.vue')
const Category = () =>
    import ('views/category/Category.vue')
const Proflie = () =>
    import ('views/profile/Proflie.vue')
const Detail = () =>
    import ('views/detail/Detail.vue')



Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/category',
        component: Category
    },

    {
        path: '/proflie',
        component: Proflie
    },
    {
        path: '/detail/:iid',
        name: Detail,
        component: Detail
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router