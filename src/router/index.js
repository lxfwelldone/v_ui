import Vue from 'vue'
import VueRouter from 'vue-router'
import testMenu from '../test/testMenu.vue'
import testLuckyDraw from '../test/testLuckyDraw.vue'
import testMarquee from '../test/testMarquee.vue'
import tr from '../test/testRoating.vue'
import testAlert  from "../test/testAlert.vue";
import testSheet  from "../test/testSheet.vue";



Vue.use(VueRouter)

const routes = [
	{
		path: '/testSheet',
		name: 'testSheet',
		component: testSheet,
		meta: {
			footShow: false,
		},
	},
	{
		path: '/testAlert',
		name: 'testAlert',
		component: testAlert,
		meta: {
			footShow: false,
		},
	},
  {
		path: '/tr',
		name: 'trttttt',
		component: tr,
		meta: {
			footShow: false,
		},
	},
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
