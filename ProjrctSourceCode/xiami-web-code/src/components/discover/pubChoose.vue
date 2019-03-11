<template>
	<div>
		<section id="chooseZone">
			<div id="choZone_a">
				<a href="#">乐库</a>
				<a href="#">推荐</a>
				<a href="#">视频</a>
				<a href="#">看点</a>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "pubChoose"
	}
</script>

<style scoped>
	#chooseZone{
		width: 100%;
		/*height: .8rem;*/
	}
	#choZone_a{
		/*width: 100%;*/
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
	
	#choZone_celect{
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		padding: .1rem 0;
	}
	.celectBtn{
		width: .8rem;
		height: .3rem;
		background-color: #f2f2f2;
		font-size: .12rem;
		color: #4a4a4a;
		text-align: center;
		line-height: .3rem;
		border-radius: .15rem;
		margin-left: .2rem;
	}
	.celectMore{
		display: -webkit-flex;
		margin-right: .2rem;
	}
	.celectMore span{
		display: block;
		width: .55rem;
		height: .3rem;
		background-color: #ff410f;
		font-size: .12rem;
		text-align: center;
		line-height: .3rem;
		color: #ffffff;
		border-radius: .15rem;
		margin-right: .1rem;
	}
	.celectMore a{
		display: -webkit-flex;
		align-items: center;
		color: #4a4a4a;
		font-size: .12rem;
	}
	.celectMore a img{
		width: .15rem;
		height: .1rem;
		margin-left: .15rem;
	}
</style>