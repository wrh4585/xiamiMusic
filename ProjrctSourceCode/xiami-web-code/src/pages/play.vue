<template>
	<div>
		<playTop></playTop>
		<playBto></playBto>
	</div>
</template>

<script>
	import playTop from "../components/play/playTop"
	import playBto from "../components/play/playBto"
	export default {
		name: "play",
		components:{
			playTop,
			playBto
		}
	}
</script>

<style scoped>

</style>