import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import toast from 'components/common/toast'
Vue.config.productionTip = false
Vue.use(toast)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')