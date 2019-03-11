<template>
	<div id="choZone_celect">
        <div class="celectBtn">
            <router-link to="/collects">我的收藏</router-link>
        </div>
        <div class="celectMore">
            <span>推荐</span>
            <a href="#">更多分类 <img src="../../assets/img/v_img05.jpg" alt=""></a>
        </div>
    </div>
</template>

<script>
	export default {
		name: "choCollect"
	}
</script>

<style scoped>
	#choZone_celect{
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		padding: .1rem 0;
	}
	.celectBtn a{
		display: block;
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