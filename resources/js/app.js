import Vue from 'vue';
import routes from './router/index';
/*This code using for form validation */
import {HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

require('./bootstrap');
Vue.component('app-header', require('./components/frontend/Header.vue').default);
const app = new Vue({
    el: '#app',
    router: routes,
});
