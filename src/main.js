import Vue from 'vue'
import 'jquery/src/jquery.js'
import BootstrapVue from 'bootstrap-vue'


//Importing necessary modules..
import 'bootstrap';
import 'bootstrap-vue';
import 'bootstrap-italia';

//using BootstrapVue
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
