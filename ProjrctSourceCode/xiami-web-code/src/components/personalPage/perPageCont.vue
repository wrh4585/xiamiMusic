<template>
	
		<section class="bigContent">
			<pcontBox v-if="per&&per.pcont" :data="per.pcont.pcont01"></pcontBox>
			<pcontBox v-if="per&&per.pcont" :data="per.pcont.pcont02"></pcontBox>
			<pcontBox v-if="per&&per.pcont" :data="per.pcont.pcont03"></pcontBox>
			<pcontBox v-if="per&&per.pcont" :data="per.pcont.pcont04"></pcontBox>
			<pcontBox v-if="per&&per.pcont" :data="per.pcont.pcont05"></pcontBox>
			<pcontBexit></pcontBexit>
		</section>
	
</template>

<script>
	import pcontBox from "./pcontBox"
	import pcontBexit from "./pcontBexit"
	export default {
		name: "perPageCont",
		components:{
			pcontBox,
			pcontBexit
		},
		props:['per']
	}
</script>

<style scoped>
	.bigContent{
		width: 100%;
		-webkit-flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>