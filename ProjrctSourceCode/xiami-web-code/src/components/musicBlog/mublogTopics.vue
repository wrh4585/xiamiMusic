<template>
	<div>
		<div class="topics" v-if="data">
			<div class="bb_box1">
				<img :src="data.url01" alt="">
				<div class="bbox1_top">
					<h1>{{data.msg02}}&nbsp;<img :src="data.url03" alt=""></h1>
					<p>{{data.msg03}}</p>
				</div>
				<a href="javascript:;" class="bb_doA">
					<img :src="data.url04" alt="">
					<img :src="data.url05" alt="">
				</a>
			</div>
			<p class="bb_msgP" v-if="data.msg06">{{data.msg06}}</p>
			<p class="bb_msgP" v-if="data.msg07">{{data.msg07}}</p>
			<p class="bb_msgP" v-if="data.msg08">{{data.msg08}}</p>
			<a href="javascript:;" class="bb_msgImg">
				<img :src="data.url07" alt="">
			</a>
			<a href="javascript:;" class="bb_zanA">
				<img :src="data.url08" alt="">
				<span class="bb_zanSpan">
                <img :src="data.url09" alt="">
                <img :src="data.url10" alt="">
                <img :src="data.url11" alt="">
            </span>
			</a>
			<div class="talk_msgA">
				<a href="javascript:;">{{data.msg12}}</a>
				<a href="javascript:;">{{data.msg13}}</a>
			</div>
			<a href="#" class="moreTalk">更多评论&nbsp;<img class="rightArow" :src="data.url14" alt=""></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "mublogTopics",
		props:['data'],
		mounted() {
			// console.log(this)
		}
	}
</script>

<style scoped>
	.bb_box1{
		display: -webkit-flex;
		justify-content: space-around;
		
	}
	.bb_box1 img{
		width: .48rem;
		height: .41rem;
	}
	.bbox1_top{
		width: 2.1rem;
	}
	.bbox1_top h1{
		font-size: .18rem;
		color: #4a4a4a;
		display: -webkit-flex;
		align-items: center;
	}
	.bbox1_top h1 img{
		width: .23rem;
		height: .17rem;
	}
	.bbox1_top p{
		font-size: .11rem;
		color: #999999;
	}
	.bb_doA{
		display: -webkit-flex;
		align-items: center;
	}
	.bb_doA img{
		width: .23rem;
		height: .23rem;
	}
	.bb_doA img:nth-child(2){
		width: .38rem;
		margin-left: .1rem;
	}
	.bb_msgP{
		font-size:.15rem ;
		color: #626262;
		line-height: .23rem;
		margin-top: .24rem;
		padding-left: 3px;
	}
	.bb_msgImg{
		display: block;
		margin-top: .18rem;
	}
	.bb_msgImg img{
		width: 3.35rem;
		height: .91rem;
	}
	.bb_zanA{
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		margin-top: .2rem;
		font-size: .11rem;
		color: #adadad;
	}
	.bb_zanA img{
		width: .72rem;
		height: .23rem;
	}
	.bb_zanSpan{
		display: -webkit-flex;
		margin-right: 5px;
	}
	.bb_zanSpan img{
		width: .23rem;
		height: .23rem;
		margin-left: .18rem;
	}
	.talk_msgA{
		display: -webkit-flex;
		align-items: center;
		justify-content: flex-start;
		margin-top: .1rem;
	}
	.talk_msgA a{
		display: block;
		font-size: .11rem;
		color: #adadad;
	}
	.talk_msgA a:last-child{
		margin-left: .3rem;
	}
	.moreTalk{
		font-size: .14rem;
		color: #ff410f;
		display: -webkit-flex;
		align-items: center;
		margin-top: .1rem;
	}
	.moreTalk .rightArow{
		width: .08rem;
		height: .13rem;
	}
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
	.hotTopic{
		display: -webkit-flex;
		overflow-x: auto;
		margin-top: .22rem;
		margin-bottom: .65rem;
	}
	.hotTopic a img{
		width: 2.19rem;
		height:1.25rem;
		margin-right: .1rem;
	}
	.topics .moreTalk .downArow{
		width: .14rem;
		height: .07rem;
	}
</style>