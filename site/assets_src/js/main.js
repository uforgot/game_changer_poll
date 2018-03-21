/**
 * Created by uforgot on 2017. 7. 11..
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Buefy from 'buefy'
Vue.use(Buefy);

import App from './view/view-app.vue'

// const POINT_COLORS = ['#00d1b2', '#3272dc', '#1f9bee', '#22d15f', '#ff3860', '#ffdd56'];

function init() {
  console.log('test');
  window.app = new Vue({
    render: h => h(App)
  }).$mount('#app');
}



window.onLoad = init();
