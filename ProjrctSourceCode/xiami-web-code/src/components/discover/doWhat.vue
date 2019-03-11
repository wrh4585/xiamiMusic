<template>
	<div>
		<div id="content_box02" >
			<a href="#" v-for="dite in data" v-if="data">
				<img :src="dite.url" alt="">
				<span>{{dite.msg}}</span>
			</a>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: "doWhat",
		props:['data'],
		created() {
			console.log(this.$store.state.msg)
		}
	}
</script>

<style scoped>
	#content_box02{
		width: 100%;
		display: -webkit-flex;
		justify-content: space-around;
		align-items: center;
	}
	#content_box02 a{
		display: block;
		text-align: center;
	}
	#content_box02 a img{
		width: .54rem;
		height: .54rem;
		margin: 0 auto;
	}
	#content_box02 a span{
		font-size: .12rem;
		color: #bdbdbd;
		text-align: center;
	}
</style>