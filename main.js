import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store=store
Vue.config.productionTip = false

import {Base} from './api/base.js';
Vue.prototype.$base =  new Base();

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
