<template>
	<div class="logreg">
		<logBackground></logBackground>
		<logBehind></logBehind>
	</div>
</template>

<script>
	import logBackground from "../components/loginAndReg/logBackground"
	import logBehind from "../components/loginAndReg/logBehind"
	export default {
		name: "loginAndReg",
		components:{
			logBackground,
			logBehind
		}
	}
</script>

<style scoped>
.logreg{
	width: 100%;
	height: 100%;
	position: relative;
}
</style>