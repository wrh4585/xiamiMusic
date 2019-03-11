<template>
	<div>
		<header class="myHead_top">
			<a href="#"><img src="../../assets/img/mymusic01.jpg" alt="消息通知"></a>
			<h1>我的音乐</h1>
		</header>
	</div>
</template>

<script>
	export default {
		name: "myHead"
	}
</script>

<style scoped>
	.myHead_top{
		width: 100%;
		padding-top: .3rem;
	}
	.myHead_top a{
		display: block;
		width: 100%;
		height: .23rem;
	}
	.myHead_top a img{
		width: .38rem;
		height: .23rem;
		float: right;
		margin-right: .2rem;
	}
	.myHead_top h1{
		font-size: .31rem;
		color: #4a4a4a;
		margin-left: .2rem;
	}
</style>