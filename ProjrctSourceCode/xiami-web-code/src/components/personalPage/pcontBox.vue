<template>
	<div>
		<div class="pcontentBox">
			<a class="cont_boxA" href="javascript:;" v-for="pIdx in data">
				<img class="contb_fImg" :src="pIdx.url01" alt="">
				<div class="contb_msg">
					<h2>{{pIdx.msg01}}</h2>
					<div class="contb_msg02">
						<span>{{pIdx.msg02}}</span>
						<div class="cont_imgBox">
							<img class="contb_lImgK" :src="pIdx.url02" alt="">
							<img class="contb_lImg01" :src="pIdx.url03" alt="">
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import pcontBson from "./pcontBson"
	export default {
		name: "pcontBox",
		components:{
			pcontBson
		},
		props:['data']
	}
</script>

<style scoped>
	.pcontentBox{
		border-bottom: 1px solid #ededed;
		margin-left: .2rem;
		padding-bottom: .35rem;
	}
	.cont_boxA {
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		margin-top: .25rem;
	}
	.contb_msg{
		-webkit-flex: 1;
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
	}
	.contb_msg  h2{
		font-size: .17rem;
		color: #4c4c4c;
		margin-left: .1rem;
		font-weight: 100;
	}
	.contb_msg02{
		-webkit-flex: 1;
		display: -webkit-flex;
		justify-content: flex-end;
		align-items: center;
	}
	.contb_msg02  span{
		text-align: right;
		font-size: .12rem;
		color: #9a9a9a;
		margin-right: .1rem;
	}
	.contb_fImg{
		width: .33rem;
		height: .33rem;
	}
	.cont_imgBox{
		display: -webkit-flex;
		justify-content:flex-end;
		margin-right: .2rem;
	}
	.contb_lImg01{
		width: .1rem;
		height: .15rem;
	}
	.contb_lImgK{
		width: .52rem;
		height: .32rem;
	}
</style>