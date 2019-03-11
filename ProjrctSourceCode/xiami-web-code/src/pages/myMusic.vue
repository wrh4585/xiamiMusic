<template>
	<div class="ddddd">
		<myHead></myHead>
		<myContent :mis="myInfo"></myContent>
		<pubFooter></pubFooter>
	</div>
</template>

<script>
	import axios from "axios"
	import qingqiu from "../../../xiami-web-api/xiami-api-server/qingqiu"
	
	import pubFooter from "../components/discover/pubFooter"
	import myHead from "../components/myMusic/myHead"
	import myContent from "../components/myMusic/myContent"
	
	export default {
		name: "myMusic",
		components:{
			pubFooter,
			myHead,
			myContent,
		},
		data(){
			return{
				myInfo:{},
			
			}
		},
		methods:{
			init(){
				qingqiu.getTui('myInfo','my',this)
			}
		},
		created() {
			this.init()
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
</style>