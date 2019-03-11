<template>
	<div>
		<section id="sect02">
			<div class="playCtrl">
				<audio id="mp3Btn" controls>
					<source src="../../assets/music/AvrilLavigne-TellMeIt'sOver.mp3" type="audio/mp3">
					<!--<source src="../../../static/music/baoliu.mp3" type="audio/mp3">-->
				</audio>
			</div>
			<div class="interestView">
				<a href="#" class="down"><img src="../../assets/img/play-11.jpg" alt="下载"></a>
				<a href="#" class="pitalk"><img src="../../assets/img/play-10.jpg" alt="评论"></a>
				<a href="#" class="share"><img src="../../assets/img/play-12.jpg" alt="分享"></a>
				<a href="#" class="tomore"><img src="../../assets/img/play-13_1.jpg" alt="更多"></a>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "playBto"
	}
</script>

<style scoped>
	#sect02{
		width: 100%;
	}
	.playCtrl{
		height: .86rem;
		display: -webkit-flex;
		justify-content: center;
		align-items: center;
	}
	#mp3Btn{
		/*display: none;*/
	}
	.interestView{
		display: -webkit-flex;
		justify-content: space-around;
		align-items: center;
	}
	.interestView a{
		display: block;
	}
	.interestView a img{
		width: .4rem;
		height: .4rem;
	}
</style>