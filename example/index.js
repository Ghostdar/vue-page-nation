import Vue from 'vue'
import pageNation from '../lib'


Vue.use(pageNation)

window.vueApp = new Vue({
    el: '#app',
    render: h => h(App),
})
