import Vue from 'vue'
import VueRouter from 'vue-router'
import testMenu from '../test/testMenu.vue'
import testLuckyDraw from '../test/testLuckyDraw.vue'
import testMarquee from '../test/testMarquee.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/testLuckyDraw',
		name: 'testLuckyDraw',
		component: testLuckyDraw,
		meta: {
			footShow: false,
		},
	},
	{
		path: '/testMarquee',
		name: 'testMarquee',
		component: testMarquee,
		meta: {
			footShow: false,
		},
	},
	{
		path: '/testMenu',
		name: 'testMenu',
		component: testMenu,
		meta: {
			footShow: false,
		},
	},

]

const router = new VueRouter({
	routes,
	mode: 'history' //去除路径中的#
})

export default router
