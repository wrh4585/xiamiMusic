<template>
	<div>
		<footer class="pubFooter">
			<a href="#" @click="switchTo('/d')">
				<img :src="'/d' ===  $route.path?ff01.defaultUrl:ff01.jumpUrl" alt="发现">
			</a>
			<a href="#" @click="switchTo('/my')">
				<img :src="'/my' ===  $route.path?ff02.jumpUrl:ff02.defaultUrl" alt="我的音乐">
			</a>
			<a href="#" @click="switchTo('/play')">
				<img :src="'/play' === $route.path? ff03.jumpUrl:ff03.defaultUrl" alt="正在播放">
			</a>
			<a href="#" @click="switchTo('/blog')">
				<img :src="'/blog' ===  $route.path?ff04.jumpUrl:ff04.defaultUrl" alt="音乐圈">
			</a>
			<a href="#" @click="switchTo('/me')">
				<img :src="'/me' ===  $route.path?ff05.jumpUrl:ff05.defaultUrl" alt="个人中心">
			</a>
			<!--<a href="" v-for="ff in footers">-->
				<!--<router-link  :to="ff.tiaozhuan">-->
					<!--<img :src="ff.url" alt="">-->
				<!--</router-link>-->
			<!--</a>-->
			
		</footer>
	</div>
</template>

<script>
	export default {
		name: "pubFooter",
		data(){
			return{
				ff01:{
					"defaultUrl":"/static/img/foot02.jpg","jumpUrl":"/static/img/foot02_2.jpg"
				},
				ff02:{
					"defaultUrl":"/static/img/foot03.jpg","jumpUrl":"/static/img/foot03_2.jpg"
				},
				ff03:{
					"defaultUrl":"/static/img/foot01.jpg","jumpUrl":"/static/img/foot01.jpg"
				},
				ff04:{
					"defaultUrl":"/static/img/foot04.jpg","jumpUrl":"/static/img/foot04_2.jpg"
				},
				ff05:{
					"defaultUrl":"/static/img/foot05.jpg","jumpUrl":"/static/img/foot05_2.jpg"
				},
			}
		},
		// data(){
		// 	return{
		// 		footers:[
		// 			{"url":"/static/img/foot02_2.jpg","msg":"","tiaozhuan":"/"},
		// 			{"url":"/static/img/foot03.jpg","msg":"","tiaozhuan":"/my"},
		// 			{"url":"/static/img/foot01.jpg","msg":"","tiaozhuan":"/play"},
		// 			{"url":"/static/img/foot04.jpg","msg":"","tiaozhuan":"/blog"},
		// 			{"url":"/static/img/foot05.jpg","msg":"","tiaozhuan":"/me"},
		// 		]
		// 	}
		// },
		methods:{
			switchTo(path){
				// console.log(this.$router)
				this.$router.replace(path)
			}
		}


	}
</script>

<style scoped>
	
	.pubFooter{
		height: .5rem;
		/*width: 100%;*/
		background-color: #f8f8f9;
		border-top: 1px solid #b2b2b2;
		display: -webkit-flex;
		justify-content: space-around;
		align-items: center;
	}
	.pubFooter a{
		display: block;
	}
	.pubFooter a img {
		width: .41rem;
		height: .41rem;
	}
</style>