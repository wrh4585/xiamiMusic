<template>
	<div>
		<div class="cBox03_top">
			<h3>为你定制</h3>
			<a href="#">更多 <img src="../../assets/img/dis-cont01.jpg" alt=""></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "contentTop"
	}
</script>

<style scoped>
	.cBox03_top{
		width: 3.3rem;
		height: .27rem;
		margin: 0 auto;
		display: -webkit-flex;
		justify-content: space-between;
	}
	.cBox03_top h3{
		font-size:.21rem ;
		color: #000;
		margin-left: 5px;
	}
	.cBox03_top h3 span{
		font-size:.11rem ;
		color: #4e4e4e;
		margin-left: 5px;
	}
	.cBox03_top a{
		display: -webkit-flex;
		font-size: .13rem;
		color: #4e4e4e;
		align-items: center;
	}
	.cBox03_top a img{
		width: .1rem;
		height: .15rem;
		margin-left: .08rem;
	}
</style>