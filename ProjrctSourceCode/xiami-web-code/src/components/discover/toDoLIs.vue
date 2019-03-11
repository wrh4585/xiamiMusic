<template>
	<div>
		<div class="content_box03">
			<!--<contentTop></contentTop>-->
			<div class="cBox03_top">
				<h3>必听歌单</h3>
				<a href="#">更多 <img src="../../assets/img/dis-cont01.jpg" alt=""></a>
			</div>
			<div class="cBox03_bto">
				<a href="#" v-for="tdi in data">
					<img :src="tdi.url" alt="">
					<span>{{tdi.msg01}}</span>
					<span>{{tdi.msg02}}</span>
					<h4>{{tdi.msg03}}</h4>
					<p>{{tdi.msg04}}</p>
					<h5>{{tdi.msg05}}</h5>
					<h6>{{tdi.msg06}}</h6>
				</a>
				
			</div>
		</div>
	</div>
</template>

<script>
	import contentTop from "./contentTop"
	export default {
		name: "toDoLis",
		components:{
			contentTop
		},
		props:['data']
	}
</script>

<style scoped>
	
	.content_box03{
		width: 100%;
		margin-top: .32rem;
	}
	.cBox03_bto{
		width: 100%;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.cBox03_bto a{
		-webkit-flex: 1;
		margin-top: .2rem;
		margin-left: .11rem;
		position: relative;
	}
	.cBox03_bto a img{
		width: 1.06rem;
		height: .99rem;
		margin-bottom: .16rem;
	}
	.cBox03_bto a .v_img{
		width: 1.62rem;
		height: .9rem;
		margin-bottom: .16rem;
	}
	.cBox03_bto a span{
		display: block;
		font-size:.14rem;
		color: #525252;
		text-align: left;
	}
	.cBox03_bto a span:nth-of-type(2){
		width: .98rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: .15rem;
	}
	.cBox03_bto a h4{
		font-size:.13rem ;
		color: #4a4a4a;
	}
	.cBox03_bto a h5{
		font-size:.13rem ;
		color: #4a4a4a;
		text-align: center;
	}
	.cBox03_bto a h6{
		font-size:.1rem ;
		color: #ffa087;
		text-align: center;
		font-weight: 100;
		margin-top: 5px;
	}
	.cBox03_bto a p{
		font-size: .05rem;
		color: #999999;
	}
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