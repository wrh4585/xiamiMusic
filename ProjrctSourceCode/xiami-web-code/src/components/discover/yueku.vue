<template>
	
		<section id="contentBox" >
			<choCollect></choCollect>
			
			<doWhat v-if="rv&&rv.doWhat" :data="rv.doWhat.dwt02"></doWhat>
			<hotNow v-if="rv && rv.contHot" :ch="rv.contHot.cHot02"></hotNow>
			<toDoLis v-if="rv && rv.mustListen" :data="rv.mustListen.mListens02"></toDoLis>
			<guessYou v-if="rv && rv.gussY" :data="rv.gussY.gussY01"></guessYou>
		</section>
	
</template>

<script>
	
	import dSwiper from "./dSwiper"
	import doWhat from "./doWhat"
	import toDoLis from "./toDoLIs"
	import guessYou from "./guessYou"
	import hotNow from "./hotNow"
	import choCollect from "./choCollect"
	export default {
		name: "yueku",
		components:{
			dSwiper,
			doWhat,
			toDoLis,
			guessYou,
			hotNow,
			choCollect
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