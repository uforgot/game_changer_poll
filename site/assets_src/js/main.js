/**
 * Created by uforgot on 2017. 7. 11..
 */

import es6Promise from 'es6-promise';
es6Promise.polyfill();
require("babel-polyfill");


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './view/view-app.vue'

function init() {
  window.app = new Vue({
    render: h => h(App)
  }).$mount('#app');
}

window.onLoad = init();

