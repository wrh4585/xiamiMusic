<template>
	<div>
		<div id="swiper_div" >
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in swiper">
						<img :src="item.url" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	import "../../../node_modules/swiper/dist/css/swiper.css"
	export default {
		name: "dSwiper",
		mounted(){
			this.initswiper()
		},
		updated() {
			this.initswiper()
		},
		methods:{
			initswiper(){
				var mySwiper = new Swiper ('.swiper-container', {
					direction: 'horizontal', // 垂直切换选项
					loop: true, // 循环模式选项
					effect:"slide",
					autoplay:true,
					observer:true,
					effect:"coverflow",
					autoplay: {
						delay: 2000,
						stopOnLastSlide: false,
						disableOnInteraction: false,
					}
				})
			}
		},
		props:['swiper']
	}
</script>

<style scoped>
	#swiper_div{
		width: 100%;
		padding-bottom:.18rem;
	}
	.swiper-container{
		width: 3.35rem;
		height: 1.08rem;
		margin: 0 auto;
	}
	.swiper-slide img{
		width: 3.35rem;
		height: 1.08rem;
	}
</style>