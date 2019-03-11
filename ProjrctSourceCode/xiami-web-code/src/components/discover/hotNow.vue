<template>
	<div>
		<div class="content_box04">
			<!--<contentTop></contentTop>-->
			<div class="cBox03_top" >
				<h3>为你定制</h3>
				<a href="#">更多 <img src="../../assets/img/dis-cont01.jpg" alt=""></a>
			</div>
			<div class="cBox04_bto" v-for="chi in ch">
				<a href="#" class="cb04_fA"><img class="cb04_fImg" :src="chi.url01" alt=""></a>
				<div class="cBo4_bto">
					<a href="#" class="cb04_b01A"><img :src="chi.url02" alt="">
						<span>{{chi.msg02}}</span>
					</a>
					<a href="#" class="cb04_b02A"><img :src="chi.url03" alt="">
						<span>{{chi.msg03}}</span>
						<h6>{{chi.msg04}}</h6>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import contentTop from "./contentTop"
	export default {
		name: "hotNow",
		components:{
			contentTop
		},
		props:['ch']
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
	
	.content_box04{
		width: 100%;
		margin-top: .5rem;
		display: -webkit-flex;
		align-items: center;
		flex-direction: column;
	}
	.cBox04_bto{
		margin-top: .3rem;
	}
	.cb04_fA{
		display: block;
	}
	.cb04_fImg{
		width: 3.35rem;
		height: 1.93rem;
	}
	.cBo4_bto{
		width: 3.35rem;
		margin-top: .2rem;
		display: -webkit-flex;
		justify-content: space-between;
		
	}
	.cBo4_bto a{
		display: block;
	}
	.cb04_b01A img{
		width: 2.2rem;
		height: 1.24rem;
	}
	.cb04_b01A span{
		font-size: .13rem;
		color: #4a4849;
		font-weight: 800;
	}
	.cb04_b02A img{
		width: 1.05rem;
		height: 1.05rem;
	}
	.cb04_b02A span{
		font-size: .11rem;
		color: #4b4b4b;
	}
	.cb04_b02A h6{
		font-size: .08rem;
		color: #bfbfbf;
	}
</style>