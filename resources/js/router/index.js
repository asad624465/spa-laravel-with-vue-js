import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../components/frontend/Home.vue';
import CategoryList from '../components/frontend/category.vue';
import CreateCategory from '../components/frontend/category/create_category.vue';

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
		},
		{
			path:'/category/create',
			component: CreateCategory,
			name:'add-new-category',
		}
	]
});
export default routes;