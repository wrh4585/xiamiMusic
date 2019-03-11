<template>
	<div id="loginBox_beh">
		<chooseWhat></chooseWhat>
		<div class="partner">
			<a href="#"><img src="../../assets/img/login_type_alipay.png" alt=""></a>
			<a href="#"><img src="../../assets/img/login_type_taobao.png" alt=""></a>
			<a href="#"><img src="../../assets/img/login_type_qq.png" alt=""></a>
			<a href="#"><img src="../../assets/img/login_type_weibo.png" alt=""></a>
			<a href="#"><img src="../../assets/img/login_type_wechat.png" alt=""></a>
		</div>
	</div>
</template>

<script>
	import chooseWhat from "./chooseWhat"
	export default {
		name: "logBehind",
		components:{
			chooseWhat
		}
	}
</script>

<style scoped>
	#loginBox_beh{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.4);
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.partner{
		display: -webkit-flex;
		align-items: center;
		margin-bottom: .5rem;
	}
	.partner img{
		width: .4rem;
		height: .4rem;
		margin-left: .2rem;
	}
</style>