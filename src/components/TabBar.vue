<template>
	<div class="tabbar">
<!-- 		<router-link to="home">
			<div :class="item">首页</div>
		</router-link>
		<router-link to="find">
			<div :class="item">发现</div>
		</router-link>
		<router-link to="order">
			<div :class="item">订单</div>
		</router-link>
		<router-link to="mine">
			<div :class="item">我的</div>
		</router-link> -->
		
		
		<router-link v-for="(tab, i) in tabs" :key='i' :to="tab.path" >
					<div class="tab-item " :class="selectedIndex==i?'selectedtab':'normaltab'" @click="clickTab(i)">{{tab.name}}</div>
		</router-link>
	</div>
</template>

<script>

	export default {
		name: 'TabBar',
		data() {
			return {
				selectedIndex: -1,
				tabs: [
					{
						name: window.text_tab1,
						path:'home',
					},
					{
						name:window.text_tab2,
						path:'find',
					},
					{
						name:window.text_tab3,
						path:'order',
					},
					{
						name:window.text_tab4,
						path:'mine',
					},
				]
			}

		},
		methods:{
			clickTab:function(i) {
				this.selectedIndex = i
			}
		},
		
		mounted() {
			var p = this.$route.name
			if (p === 'Mine') {
				this.selectedIndex = 3;
			} else if (p === 'Order'){
				this.selectedIndex = 2;
			} else if (p === 'Find') {
				this.selectedIndex = 1;
			} else {
				this.selectedIndex = 0;
			}
		},
	}
	
</script>

<style>
.tabbar {
	background-color: #42B983;
	height: 3.125rem;
	line-height: 3.125rem;
	position: fixed;
	bottom: 0rem;
	width: 100%;
}
.tabbar  .selectedtab {
	color: red;
}

.tabbar .normaltab {
	color: #FFFFFF;
}

.tabbar .tab-item {
	display: inline-table;
	text-align: center;
	width: 25%;
	
}


</style>
