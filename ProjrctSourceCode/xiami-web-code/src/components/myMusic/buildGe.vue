<template>
	<div>
		<div class="bulidGeList">
			<h1>{{msg}} <span>{{msgMont}}</span></h1>
			<a href="javascript:;"><img src="../../assets/img/mymusic01_1.jpg" alt=""></a>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: "buildGe",
		data(){
			return{
				msg:"创建的歌单",
				msgMont:0
			}
		}
	}
</script>

<style scoped>
	.bulidGeList{
		height: .81rem;
		width: 100%;
		margin-left: .2rem;
		border-top: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
		display: -webkit-flex;
		align-items: center;
		justify-content: space-between;
	}
	.bulidGeList h1{
		font-size: .21rem;
		color: #4a4a4a;
	}
	.bulidGeList h1 span{
		font-size: .18rem;
		color: #999999;
	}
	.bulidGeList a img{
		width: .36rem;
		height: .23rem;
		margin-right: .3rem;
	}
</style>