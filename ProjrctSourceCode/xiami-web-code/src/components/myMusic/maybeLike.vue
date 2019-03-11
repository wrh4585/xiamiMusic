<template>
	<div>
		<div class="maybeLike">
			<div class="mbLike_top">
				<h1>可能喜欢的音乐</h1>
				<a class="mbLike_tright">
					<img src="../../assets/img/mymusic12.jpg" alt="">
					<span>换一批</span>
				</a>
			</div>
			<div class="mbLike_bto">
				<a href="javascript:;" v-for="mIndex in data">
					<img :src="mIndex.url" alt="">
					<p>{{mIndex.msg}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "maybeLike",
		props:['data']
		
	}
</script>

<style scoped>
	.maybeLike{
		width: 100%;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.maybeLike .mbLike_top{
		width: 100%;
		margin-top: .4rem;
		display: -webkit-flex;
		justify-content: space-between;
	}
	.mbLike_top h1{
		font-size: .2rem;
		color: #4a4a4a;
		margin-left: .2rem;
	}
	.mbLike_tright{
		display: -webkit-flex;
		align-items: center;
		margin-right: .2rem;
	}
	.mbLike_tright img{
		width: .25rem;
		height: .25rem;
	}
	.mbLike_bto{
		width: 95%;
		margin-top: .2rem;
		display: -webkit-flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.mbLike_bto a{
		display: block;
		margin-bottom: .2rem;
	}
	.mbLike_bto a img{
		width: 1.05rem;
		height: .98rem;
	}
	.mbLike_bto a p{
		width: .98rem;
		font-size: .14rem;
		color: #4a4a4a;
		font-weight: 800;
		margin-top: .18rem;
	}
</style>