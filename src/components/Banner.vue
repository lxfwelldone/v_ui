<template>
	<div class="banner">
		<img alt="图片" v-for="(v, i) in imgArr" :key="i" :src="v" v-show="n==i" />
		<div class="banner-cicle">
			<ul>
				<li v-for="(v, i) in imgArr" :key="i" :class="i==n?'selected':''"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Banner',
		data(){
			return {
				timer: null,
				n:0,
				// imgArr: [
				// 	require('../assets/banner_1.png'),
				// 	require('../assets/banner_2.png'),
				// 	require('../assets/banner_3.png'),	
				// ]
			}
		},
		props:['imgArr'],
		methods:{
			play() {
				this.timer = setInterval(this.autoPlay, 2.5*1000)
			},
			autoPlay() {
				this.n++;
				if(this.n == this.imgArr.length) {
					this.n = 0
				}
			}
		},
		mounted:function(){
			this.play()
		},
		destroyed() {
			clearInterval(this.timer)
		}
	}
</script>

<style>

.banner-cicle {
	text-align: center;
	position: relative;
	bottom: 3.125rem;
}

.banner-cicle ul {
	display: inline-block;
	list-style-type: none;
	padding: 0px;	    
}

.banner-cicle ul li {
    float: left;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.3125rem;
    background: wheat;
	margin-left: 0.3125rem;
	margin-right: 0.3125rem;
}

.banner-cicle ul li.selected {
    float: left;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.3125rem;
    background: #42B983;
	margin-left: 0.3125rem;
	margin-right: 0.3125rem;
}


.banner {
	width: 100%;
	height: auto;
}

.banner img {
	width: 100%;
	height: auto;
}
	
</style>
