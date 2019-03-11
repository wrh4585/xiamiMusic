<template>
	
		<div class="exitBox">
			<h5>虾米音乐ID <span>520131421</span></h5>
			<router-link to="log">
				<a href="#">退出</a>
			</router-link>
			
		</div>
	
</template>

<script>
	export default {
		name: "pcontBexit"
	}
</script>

<style scoped>
	.exitBox{
		text-align: center;
	}
	.exitBox h5{
		font-size: .14rem;
		color: #939393;
		font-family: "黑体";
		font-weight: 100;
		margin: .32rem 0 .24rem 0;
	}
	
	.exitBox a{
		display: block;
		width: 3.35rem;
		height: .49rem;
		font-size: .18rem;
		color: #737373;
		line-height: .49rem;
		background-color: #f2f2f2;
		border-radius: 5px;
		margin: 0 auto .7rem;
	}
</style>