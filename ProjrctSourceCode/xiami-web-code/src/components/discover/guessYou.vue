<template>
	<div>
		<div class="content_box05">
			<!--<contentTop></contentTop>-->
			<div class="cBox03_top">
				<h3>猜你喜欢</h3>
				<a href="#">更多 <img src="../../assets/img/dis-cont01.jpg" alt=""></a>
			</div>
			<div class="cBox05_bto" v-for="gyi in data">
				<img :src="gyi.url01" alt="" class="cb05_btoImg">
				<a href="#" class="cb05_btoA">
					<img :src="gyi.url02" alt="">
					<img :src="gyi.url03" alt="">
					<img :src="gyi.url04" alt="">
				</a>
				<p class="cb05_btoSpan"><span class="cb05_span">{{gyi.msg05}}</span><span>{{gyi.msg06}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	import contentTop from "./contentTop"
	export default {
		name: "guessYou",
		components:{
			contentTop
		},
		props:['data']
		
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
	.content_box05{
		margin-top: .5rem;
	}
	.cBox05_bto{
		margin-top: .2rem;
		display: -webkit-flex;
		align-items: center;
		flex-direction: column;
	}
	.cb05_btoImg{
		width: 3.35rem;
		height:1.08rem ;
	}
	.cb05_btoImg_v{
		width: 3.35rem;
		height:1.86rem ;
	}
	.cb05_btoA{
		width: 3.35rem;
		display: -webkit-flex;
		margin-top: .13rem;
	}
	.cb05_btoA img:nth-child(1){
		width: 1.25rem;
		height: .27rem;
	}
	.cb05_btoA img:nth-child(2){
		width: .3rem;
		height: .27rem;
		margin-left: 1.3rem;
	}
	.cb05_btoA img:nth-child(3){
		width: .33rem;
		height: .27rem;
		margin-left: .15rem;
	}
	.cb05_btoH{
		width: 3.35rem;
		font-size: .14rem;
		margin-top: .18rem;
	}
	.cb05_btoSpan{
		width: 3.35rem;
		display: -webkit-flex;
		margin-top: .1rem;
	}
	.cb05_btoSpan span{
		font-size: .12rem;
		color: #999999;
	}
	.cb05_btoSpan .cb05_span{
		display: block;
		width: 1.8rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.cBox05_bto02{
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		width: 3.35rem;
		margin: .15rem 0;
	}
	.cBox05_bto02 img{
		width: 1.07rem;
		height: .6rem;
	}
	.cBox05_bto03{
		width: 2.12rem;
	}
	.cBox05_bto03 p{
		font-size: .12rem;
		color: #4a4a4a;
	}
	.cBox05_bto03Span{
		display: -webkit-flex;
		height: .2rem;
		margin-top: .05rem;
	}
	.cBox05_bto03Span img{
		width: .2rem;
		height: .2rem;
	}
	.cBox05_bto03Span span{
		display: block;
		height: .2rem;
		line-height: .2rem;
		font-size: .1rem;
		color: #999999;
		margin-left: .05rem;
	}
</style>