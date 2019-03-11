<template>
	<div class="ddddd">
		<pubHeader></pubHeader>
		<section id="chooseZone">
			<div id="choZone_a">
				<router-link to="/yueku">乐库</router-link>
				<router-link to="/tuijian">推荐</router-link>
				<router-link to="/mv">视频</router-link>
				<router-link to="/focus">看点</router-link>
			</div>
		</section>
		<router-view :rv="DisInfo"></router-view>
		<pubFooter></pubFooter>
	</div>
	
</template>

<script>
	import axios from "axios"
	// import import vueAxios from 'vue-axios'
	
	import qingqiu from "../../../xiami-web-api/xiami-api-server/qingqiu"
	import pubHeader from "../components/discover/pubHeader"
	import pubFooter from "../components/discover/pubFooter"
	import welcomeBox from "../components/discover/welcomeBox"
	export default {
		name: "discover",
		components:{
			pubFooter,
			pubHeader,
			welcomeBox,
		},
		data(){
			return{
				DisInfo:{},
			}
		},
		methods:{
			init(){
				qingqiu.getTui('DisInfo','discover',this)
			},
			myTimer(){
				setTimeout(()=>{
					document.querySelector(".welFather").style.display="none"
				},3000)
			}
		},
		created() {
			this.init()
		},
		
		
	}
</script>

<style scoped>
	html,body{
		height: 100%;
		width:100%;
	}
	.ddddd{
		display: -webkit-flex;
		flex-direction: column;
		overflow-x: hidden;
		height: 100%;
	}
	#chooseZone{
		width: 100%;
		/*height: .8rem;*/
	}
	#choZone_a{
		height: .6rem;
		display: -webkit-flex;
		align-items: flex-end;
		border-bottom: 1px solid #ffa087;
		padding-left: .3rem;
	}
	#choZone_a a{
		width: .46rem;
		height: .25rem;
		font-size: .14rem;
		color: #4a4a4a;
		padding-bottom: 5px;
	}
	#choZone_a a:hover{
		width: .8rem;
		height: .45rem;
		font-weight: 800;
		font-size: .35rem;
	}
	.welFather{
		width: 100%;
		height: 100%;
		background-color: #fffcf7;
		/*z-index: 999;*/
	}
	#welcomeBox{
		background-color: #fffcf7;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		height: 0;
		/*z-index: 999;*/
	}
	#wel_box01{
		width: 100%;
		height: 4.8rem;
		/*display: -webkit-flex;*/
		/*flex-direction: column;*/
		/*justify-content: center;*/
		/*align-items: center;*/
		background-color: #fffcf7;
		z-index: 999;
		padding-top: 1.2rem;
	}
	#wel_box01 img:first-child{
		width: .74rem;
		height: .65rem;
		margin:0 auto .15rem;
	}
	#wel_box01 img:last-child{
		width: 1.76rem;
		height: .38rem;
		margin: 0 auto;
	}
	#wel_box02{
		width: 100%;
		/*z-index: 999;*/
	}
	#wel_box02 img{
		margin: 0 auto;
	}
	#wel_box02 img:first-child{
		width: .85rem;
		height: .2rem;
	}
	#wel_box02 img:last-child{
		width: 1.66rem;
		height: .12rem;
	}
	
</style>