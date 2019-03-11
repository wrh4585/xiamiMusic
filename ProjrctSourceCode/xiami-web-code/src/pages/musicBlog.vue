<template>
	<div class="ddddd">
		<mublogTop></mublogTop>
		<section class="header_mbchoose">
			<div class="header_mblogb">
				<router-link to="/blog/party">趴间</router-link>
				<router-link to="/blog/dt">动态</router-link>
			</div>
		</section>
		<router-view :mb="blogInfo"></router-view>
		<pubFooter></pubFooter>
	</div>
</template>

<script>
	import axios from "axios"

	import qingqiu from "../../../xiami-web-api/xiami-api-server/qingqiu"
	import pubFooter from "../components/discover/pubFooter"
	import mublogTop from "../components/musicBlog/mublogTop"
	export default {
		name: "musicBlog",
		components:{
			pubFooter,
			mublogTop
		},
		data(){
			return{
				blogInfo:{},
				luName:""
			}
		},
		created() {
			this.init()
		},
		methods:{
			init(){
				qingqiu.getTui('blogInfo','blog',this)
			}
			
		}
		
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
	
	.header_mbchoose{
		height: .49rem;
	}
	
	.header_mblogb{
		height: .49rem;
		border-bottom: 2px solid #ffa087;
		display: -webkit-flex;
		align-items: flex-end;
		padding-left: .2rem;
	}
	.header_mblogb a{
		display: block;
		font-size: .14rem;
		color: #4a4a4a;
		margin-left: .16rem;
	}
	.header_mblogb a:hover{
		font-size: .32rem;
		color: #4a4a4a;
		font-weight: 800;
	}
</style>