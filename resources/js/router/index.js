import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../components/frontend/Home.vue';
import CategoryList from '../components/frontend/category.vue';

const routes = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component: Home,
			name:'Home',
		},
		{
			path:'/category',
			component: CategoryList,
			name:'category-list',
		}
	]
});
export default routes;