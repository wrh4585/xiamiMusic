<template>
	<div class="ddddd">
		<perPageTop></perPageTop>
		<perPageCont :per="perInfo"></perPageCont>
		<pubFooter></pubFooter>
	</div>
</template>

<script>
	import axios from "axios"
	import qingqiu from "../../../xiami-web-api/xiami-api-server/qingqiu"
	
	import pubFooter from "../components/discover/pubFooter"
	import perPageTop from "../components/personalPage/perPageTop"
	import perPageCont from "../components/personalPage/perPageCont"
	export default {
		name: "personalPage",
		components:{
			pubFooter,
			perPageTop,
			perPageCont
		},
		data(){
			return{
				perInfo:{},
				// luName:""
			}
		},
		methods:{
			init(){
				qingqiu.getTui('perInfo','me',this)
			}
		},
		created() {
			this.init()
			// this.luName=this.$route.path
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