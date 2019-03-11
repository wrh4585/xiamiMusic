<template>
	<div>
		<section id="sect01">
			<div class="sect01_big">
				<div class="sect01_btop">
					<router-link to="/">
						<a href="discovers.html">
							<img id="quitImg" src="../../assets/img/play-03.jpg" alt="">
						</a>
					</router-link>
					<ul id="qieUl">
						<li class="qieUl_lis"></li>
						<li class="qieUl_lis"></li>
						<li class="qieUl_lis"></li>
					</ul>
					<img id="looklikeImg" src="../../assets/img/play-02.jpg" alt="">
				</div>
				<div class="sect01_bmsg">
					<div class="coverImgBox">
						<img class="coverImg" src="../../assets/img/play-01.jpg" alt="">
					
					</div>
					<div class="sect01_songmsg">
						<h3>Tell Me It`s Over</h3>
						<h4><img src="../../assets/img/play-04.jpg" alt=""> Avril Lavigne</h4>
						<p>
							<span>标准 <img src="../../assets/img/play-14.jpg" alt=""></span>
							<span>音效 off</span>
							<span>AI 模式 on</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "playTop"
	}
</script>

<style scoped>
	#sect01{
		height: 5.06rem;
		width: 100%;
		background: -webkit-linear-gradient(#dddddc 0%,#dbdbda 40%,#ffffff 90%);
	}
	.sect01_big{
		width: 3.25rem;
		margin: 0 auto;
	}
	.sect01_btop{
		height: .25rem;
		display: -webkit-flex;
		justify-content: space-between;
		/*margin-top: .1rem;*/
	}
	.sect01_btop #quitImg,#looklikeImg{
		height: .21rem;
		width: .3rem;
	}
	#qieUl{
		display: -webkit-flex;
		align-items: center;
	}
	.qieUl_lis{
		display: block;
		width: .07rem;
		height: .07rem;
		border-radius: 50%;
		background-color: #a3a3a3;
		margin: 0 .04rem;
	}
	
	.qieUl_lis:hover{
		width: .09rem;
		height: .09rem;
		background-color: #4a4a4a;
	}
	.sect01_bmsg{
		margin-top: .13rem;
	}
	.coverImg{
		width: 3.25rem;
		height: 3.24rem;
	}
	.sect01_songmsg{
		margin-top: .46rem;
		text-align: center;
	}
	.sect01_songmsg h3{
		font-size: .12rem;
		margin-bottom: .09rem;
	}
	.sect01_songmsg h4{
		font-size: .1rem;
		font-weight: 100;
		display: -webkit-flex;
		justify-content: center;
		align-items: center;
	}
	.sect01_songmsg h4 img{
		width: .22rem;
		height: .22rem;
		border-radius: 50%;
		margin-right: .08rem;
	}
	.sect01_songmsg p{
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
		margin-top: .08rem;
	}
	.sect01_songmsg p span{
		display: -webkit-flex;
		align-items: center;
		height: .14rem;
		font-size: .08rem;
		color: #9b9b9b;
		border: 1px solid #9b9b9b;
		border-radius: 5px;
		margin: 0 .08rem;
		padding: 5px .05rem;
	}
	.sect01_songmsg p span:nth-child(1) img{
		width: .08rem;
		height: .06rem;
		float: right;
		margin-left: 5px;
	}
</style>