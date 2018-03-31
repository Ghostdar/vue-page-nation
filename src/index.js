import Vue from 'vue'
import pageNation from '../lib'
import App from './app.vue'

Vue.use(pageNation)

window.vueApp = new Vue({
    el: '#app',
    render: h => h(App),
})
