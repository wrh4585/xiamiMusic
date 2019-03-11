<template>
	<div>
		<header class="pubHeader">
			<div class="header_top">
				<img id="headimg-1" src="../../assets/img/discover01.jpg" alt="">
				<span id="serach_span" >
					<img src="../../assets/img/discover03.jpg" alt="">
			    </span>
				<img id="headimg-3" src="../../assets/img/discover02.jpg" alt="">
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		name: "pubHeader"
	}
</script>

<style scoped>
	.pubHeader{
		/*width: 100%;*/
		margin-top: .27rem;
	}
	.header_top{
		height: .31rem;
		display: -webkit-flex;
		justify-content: center;
	}
	#headimg-1,#headimg-3{
		width:.31rem;
		height: .31rem;
	}
	#serach_span{
		width: 2.5rem;
		height: .31rem;
		font-size: .12rem;
		color: #8e8e93;
		border:1px solid #cccccc;
		border-radius: 6px;
		margin:0 .14rem 0 .14rem;
		display: -webkit-flex;
		align-items: center;
	}
	#serach_span img{
		width: .2rem;
		height: .2rem;
		margin-left: .08rem;
		padding-right: .12rem;
	}
	
</style>