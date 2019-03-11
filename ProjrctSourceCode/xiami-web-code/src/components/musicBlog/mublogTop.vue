<template>
	<div>
		<header class="mblogHeader">
			<div class="header_mblogt">
				<a href="javascript:;">
					<img :src="mbi.url" alt="" v-for="mbi in mblog">
				</a>
			</div>
		</header>
		
	</div>
</template>

<script>
	export default {
		name: "mublogTop",
		data(){
			return{
				mblog:[
					{"url":"/static/img/blog01.jpg"},
					{"url":"/static/img/blog02.jpg"}
				]
			}
		}
	}
</script>

<style scoped>
	.mblogHeader{
		height: .5rem;
	}
	.header_mblogt{
		height: .49rem;
		display: -webkit-flex;
		justify-content: flex-end;
	}
	.header_mblogt a{
		width: 25%;
		height: 100%;
		display: -webkit-flex;
		justify-content: space-around;
		align-items: center;
	}
	.header_mblogt img:nth-child(1){
		height: .23rem;
		width: .23rem;
	}
	.header_mblogt img:nth-child(2){
		height: .23rem;
		width: .23rem;
		margin-right: .1rem;
	}
	
</style>