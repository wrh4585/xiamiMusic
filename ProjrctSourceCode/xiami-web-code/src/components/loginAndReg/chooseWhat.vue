<template>
<div>
	<div class="chooseWhat">
		<div id="choseDiv">
			<router-link to="me">
				<a href="#">
					<img id="closeBtn" src="../../assets/img/login_close.png" alt="">
				</a>
			</router-link>
			<a id="regBtn" href="#">注册</a>
		</div>
		<div id="toolsChoose">
			<chooseLogin></chooseLogin>
			<!--<chooseReg></chooseReg>-->
			<div class="helpDiv">
				<a href="#"></a>
				<a href="#">忘记密码？</a>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import chooseLogin from "./chooseLogin"
	import chooseReg from "./chooseReg"
	export default {
		name: "chooseWhat",
		components:{
			chooseLogin,
			chooseReg
		}
	}
</script>

<style scoped>
	#choseDiv{
		height: .6rem;
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
	}
	#choseDiv a{
		display: block;
		font-size: .15rem;
		color: #ffffff;
		margin: 0 .22rem;
	}
	#choseDiv #closeBtn{
		width: .18rem;
		height: .18rem;
	}
	#toolsChoose{
		width: 3.25rem;
		margin: 0 auto;
	}
	
	
	.helpDiv{
		height: .6rem;
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
	}
	.helpDiv a{
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		font-size: .12rem;
	}
	
	
</style>