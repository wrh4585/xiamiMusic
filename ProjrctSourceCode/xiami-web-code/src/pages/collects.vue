<template>
	<div class="ddddd">
		<header>
			<h1 class="header_h1">
				<router-link to="/"><img id="headimg-back" src="../assets/img/collect01.jpg" alt="">发现</router-link>
				<span class="header_h1Span">我的收藏</span>
			</h1>
		
		</header>
		<!--功能选区-->
		<section id="chooseZone">
			<div id="choZone_a">
				<a href="#">歌曲</a>
				<a href="#">专辑</a>
				<a href="#">艺人</a>
				<a href="#">MV</a>
				<a href="#">文章</a>
			</div>
		</section>
		<section id="contentBox">
			<div class="contentBox_collect">
				<img src="../assets/img/collect02.jpg" alt="">
			</div>
			<div class="content_box05">
				<contentTop></contentTop>
				
				<div class="cBox05_bto">
					<div class="cBox05_bto02">
						<img src="../assets/img/v_img07.jpg" alt="">
						<div class="cBox05_bto03">
							<p class="cBox05_bto03p">最近偶像组合的人越来越多了，也不知道这么多人是要去打架么！</p>
							<span class="cBox05_bto03Span">
                    <img src="../assets/img/v_img08.jpg" alt="">
                    <span>爱豆app</span>
                    <span>，5866阅读</span>
                </span>
						</div>
					</div>
					<div class="cBox05_bto02">
						<img src="../assets/img/v_img07.jpg" alt="">
						<div class="cBox05_bto03">
							<p class="cBox05_bto03p">最近偶像组合的人越来越多了，也不知道这么多人是要去打架么！</p>
							<span class="cBox05_bto03Span">
                    <img src="../assets/img/v_img08.jpg" alt="">
                    <span>爱豆app</span>
                    <span>，5866阅读</span>
                </span>
						</div>
					</div>
					<div class="cBox05_bto02">
						<img src="../assets/img/v_img07.jpg" alt="">
						<div class="cBox05_bto03">
							<p class="cBox05_bto03p">最近偶像组合的人越来越多了，也不知道这么多人是要去打架么！</p>
							<span class="cBox05_bto03Span">
                    <img src="../assets/img/v_img08.jpg" alt="">
                    <span>爱豆app</span>
                    <span>，5866阅读</span>
                </span>
						</div>
					</div>
					<div class="cBox05_bto02">
						<img src="../assets/img/v_img07.jpg" alt="">
						<div class="cBox05_bto03">
							<p class="cBox05_bto03p">最近偶像组合的人越来越多了，也不知道这么多人是要去打架么！</p>
							<span class="cBox05_bto03Span">
                    <img src="../assets/img/v_img08.jpg" alt="">
                    <span>爱豆app</span>
                    <span>，5866阅读</span>
                </span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<pubFooter></pubFooter>
	</div>
</template>

<script>
	import pubFooter from "../components/discover/pubFooter"
	import contentTop from "../components/discover/contentTop"
	export default {
		name: "collects",
		components:{
			pubFooter,
			contentTop
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
	
	header{
		width: 100%;
		margin-top: .27rem;
	}
	
	.header_h1{
		width: 100%;
		display: -webkit-flex;
		align-items: center;
		justify-content: flex-start;
		
	}
	.header_h1 a{
		width: 1.25rem;
		text-align: left;
		font-size: .16rem;
		font-weight: 100;
		color: #999999;
		display: -webkit-flex;
		align-items: center;
		margin-left: .15rem;
	}
	#headimg-back{
		width: .19rem;
		height: .26rem;
	}
	.header_h1 .header_h1Span{
		font-size: .18rem;
		font-weight: 800;
		color: #4a4a4a;
	}
	#chooseZone{
		width: 100%;
	}
	#choZone_a{
		width: 100%;
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
	#contentBox {
		width: 100%;
		margin-top: .1rem;
		-webkit-flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.contentBox_collect{
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
	}
	.contentBox_collect img{
		width: 1.9rem;
		height: 1.9rem;
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