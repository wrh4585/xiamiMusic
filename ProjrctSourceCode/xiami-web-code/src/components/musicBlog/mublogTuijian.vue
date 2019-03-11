<template>
	<div>
		<div class="topics">
			<div class="topics_top">
				<h1>推荐好友</h1>
				<a href="javascript:;">更多 &nbsp;<img class="downArow" src="../../assets/img/dis-cont01.jpg" alt=""></a>
			</div>
			<div class="friendBox" v-if="data">
				<a href="javascript:;" v-for="frIdx in data">
					<img :src="frIdx.url" alt="">
					<h3>{{frIdx.msg01}}</h3>
					<p>{{frIdx.msg02}}</p>
					<span>{{frIdx.msg03}}</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "mublogTuijian",
		props:['data']
	}
</script>

<style scoped>
	.topics{
		width: 95%;
		margin: .25rem auto 0;
	}
	
	.topics_top{
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
	}
	.topics_top h1{
		font-size:.25rem ;
	}
	.topics_top a{
		display: -webkit-flex;
		align-items: center;
		font-size: .13rem;
		color: #545454;
		margin-right: .1rem;
	}
	.topics_top a img{
		width: .1rem;
		height: .15rem;
	}
	.friendBox{
		margin-top: .26rem;
		display: -webkit-flex;
		overflow-x: auto;
	}
	.friendBox a{
		flex: 1;
		flex-shrink: 0;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		margin-right: .1rem;
	}
	.friendBox a img{
		width: 1.01rem;
		height: 1.01rem;
		margin-bottom: .18rem;
	}
	.friendBox a h3{
		font-size: .1rem;
		margin-bottom: 5px;
	}
	.friendBox a p{
		font-size: .1rem;
		color: #ababab;
		margin-bottom: .28rem;
	}
	.friendBox a span{
		display: block;
		width: .54rem;
		height: .27rem;
		font-size:.11rem ;
		color: white;
		line-height: .27rem;
		background-color: #ff410f;
		text-align: center;
		border-radius: 5px;
	}

</style>