<template>
	
		<section id="contentBox">
			<toDoLis v-if="rv && rv.mustListen" :data="rv.mustListen.mListens02"></toDoLis>
			<hotNow v-if="rv && rv.contHot" :ch="rv.contHot.cHot02"></hotNow>
			
			<guessYou v-if="rv && rv.gussY" :data="rv.gussY.gussY01"></guessYou>
			<toDoLis v-if="rv && rv.mustListen" :data="rv.mustListen.mListens03"></toDoLis>
			
		</section>
	
</template>

<script>
	
	import dSwiper from "./dSwiper"
	import doWhat from "./doWhat"
	import toDoLis from "./toDoLIs"
	import guessYou from "./guessYou"
	import hotNow from "./hotNow"
	export default {
		name: "focus",
		components:{
			dSwiper,
			doWhat,
			toDoLis,
			guessYou,
			hotNow
		},
		props:['rv']
	}
</script>

<style scoped>
	#contentBox {
		width: 100%;
		margin-top: .1rem;
		-webkit-flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>