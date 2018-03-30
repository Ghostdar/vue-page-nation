/**
 * pageNation
 */
import pagenation from './pageNation.vue'
import Vue from 'vue'

let pageNation = {
    install : function (Vue){
        Vue.component('pageNation', pagenation)
    }
}

export default pageNation