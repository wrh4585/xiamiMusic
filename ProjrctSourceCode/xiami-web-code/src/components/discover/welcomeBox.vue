
<template>
<div class="welFather">
	<div id="welcomeBox">
		<div id="wel_box01">
			<img id="wimg01" src="../../assets/img/xiamilogo.jpg" alt="">
			<img id="wimg02" src="../../assets/img/xiamilogo2.jpg" alt="">
		</div>
		<div id="wel_box02">
			<img id="wimg03" src="../../assets/img/xiamilogo3.jpg" alt="">
			<img id="wimg04" src="../../assets/img/xiamilogo4.jpg" alt="">
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name: "welcomeBox",
		methods:{
			mytimer(){
				setTimeout(function(){
					document.querySelector(".welFather").style.display="none"
				},3000)
			}
		},
		mounted() {
			this.mytimer()
		},
		beforeUpdate() {
			document.querySelector("#wimg01").style.opacity = 0
			document.querySelector("#wimg02").style.opacity = 0
			document.querySelector("#wimg03").style.opacity = 0
			document.querySelector("#wimg04").style.opacity = 0
		}
	}
</script>

<style scoped>
	.welFather{
		width: 100%;
		height: 100%;
		background-color: #fffcf7;
		z-index: 999;
	}
	#welcomeBox{
		background-color: #fffcf7;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		height: 0;
		z-index: 999;
	}
	#wel_box01{
		width: 100%;
		height: 4.8rem;
		/*display: -webkit-flex;*/
		/*flex-direction: column;*/
		/*justify-content: center;*/
		/*align-items: center;*/
		background-color: #fffcf7;
		z-index: 999;
		padding-top: 1.2rem;
	}
	#wel_box01 img:first-child{
		width: .74rem;
		height: .65rem;
		margin:0 auto .15rem;
	}
	#wel_box01 img:last-child{
		width: 1.76rem;
		height: .38rem;
		margin: 0 auto;
	}
	#wel_box02{
		width: 100%;
		z-index: 999;
		/*background-color: #fffcf7;*/
	}
	#wel_box02 img{
		margin: 0 auto;
	}
	#wel_box02 img:first-child{
		width: .85rem;
		height: .2rem;
	}
	#wel_box02 img:last-child{
		width: 1.66rem;
		height: .12rem;
	}
</style>