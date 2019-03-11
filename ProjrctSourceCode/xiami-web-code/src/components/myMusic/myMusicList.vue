<template>
	<div>
		<a class="cont_boxA" href="javascript:;" v-for="dIndex in data">
			<img class="contb_fImg" :src="dIndex.url01" alt="">
			<div class="contb_msg">
				<h2>{{dIndex.msg01}}</h2>
				<div class="contb_msg02">
					<span>{{dIndex.msg02}}</span>
					<div class="cont_imgBox">
						<img class="contb_lImg02" v-if="dIndex.url03" :src="dIndex.url03" alt="">
						<img class="contb_lImg02" v-if="dIndex.url04" :src="dIndex.url04" alt="">
						<img class="contb_lImg02" v-if="dIndex.url05" :src="dIndex.url05" alt="">
						<img class="contb_lImg01" v-if="dIndex.url06" :src="dIndex.url06" alt="">
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: "myMusicList",
		props:['data']
	}
</script>

<style scoped>
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
	}
	.contb_msg02{
		-webkit-flex: 1;
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
	}
	.contb_msg02  span{
		text-align: left;
		font-size: .12rem;
		color: #9a9a9a;
		margin-left: .1rem;
	}
	.contb_fImg{
		width: .33rem;
		height: .33rem;
		margin-left: .2rem;
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
	.contb_lImg02{
		width: .3rem;
		height: .3rem;
		margin-left: 2px;
	}
</style>