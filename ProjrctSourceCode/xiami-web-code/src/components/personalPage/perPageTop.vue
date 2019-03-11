<template>
	<div>
		<header class="perpageTop">
			<div id="ppHeader_top">
				<h4>我就是小老板呀</h4>
				<span></span>
				<span></span>
			</div>
			<div id="ppHeader_bto">
				<div class="phb01">
					<div class="phb01_lfet">
						<h1 id="userNameDiy">我就是小老板呀</h1>
						<p>
							<img src="../../assets/img/ppage03.jpg" alt="">
							<img src="../../assets/img/ppage04.jpg" alt="">
						</p>
					</div>
					<img class="userPto" src="../../assets/img/userPhoto.png" alt="">
				</div>
				<div class="phb02">
					<a href="#">3 <span>累计播放</span></a>
					<a href="#">0 <span>关注</span></a>
					<a href="#">0 <span>粉丝</span></a>
					<a href="#">1 <span>连续签到</span></a>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		name: "perPageTop"
	}
</script>

<style scoped>
	.perpageTop{
		background-color: #2f2f2f;
	}
	#ppHeader_top{
		height: .27rem;
		display: -webkit-flex;
		justify-content: flex-end;
		padding-top: 5px;
	}
	#ppHeader_top h4{
		color: white;
		font-size: .14rem;
		line-height: .27rem;
		margin-right: .5rem;
		display: none;
	}
	#ppHeader_top span{
		display: block;
		width: .27rem;
		height: .27rem;
		background: url("../../assets/img/ppage01-1.jpg") 0 0 no-repeat;
		background-size: .27rem .27rem;
	}
	#ppHeader_top span:last-child{
		background: url("../../assets/img/ppage02-1.jpg") 0 0 no-repeat;
		background-size: .27rem .27rem;
		margin-right: .2rem;
		margin-left: .1rem;
	}
	#ppHeader_bto{
		width: 100%;
	}
	.phb01{
		height: .96rem;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
		padding-top: .15rem;
		padding-bottom: .1rem;
	}
	.phb01_lfet{
		width: 2.30rem;
	}
	.phb01_lfet h1{
		font-size: .28rem;
		color: #ffffff;
	}
	.phb01_lfet p{
		display: -webkit-flex;
		align-items: center;
		margin-top: .08rem;
	}
	.phb01_lfet p img{
		width: .27rem;
		height: .27rem;
	}
	.userPto{
		width: .9rem;
		height: .9rem;
	}
	.phb02{
		display: -webkit-flex;
		align-items: center;
	}
	.phb02 a{
		display:block;
		font-size: .15rem;
		color: #f6f6f6;
		margin-right: .31rem;
		padding: .1rem 0 .2rem .23rem;
	}
	.phb02 a span{
		display:block;
		font-size: .11rem;
		color: #8b8b8b;
		margin-top: 5px;
	}
</style>