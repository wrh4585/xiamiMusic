<template>
	
		<section id="contentBox" >
			<dSwiper :swiper="rv.dSwiper"></dSwiper>
			<doWhat v-if="rv && rv.doWhat" :data="rv.doWhat.dwt01"></doWhat>
			<toDoLis v-if="rv && rv.mustListen" :data="rv.mustListen.mListens01"></toDoLis>
			<hotNow v-if="rv && rv.contHot" :ch="rv.contHot.cHot01"></hotNow>
			<guessYou v-if="rv && rv.gussY" :data="rv.gussY.gussY01"></guessYou>
		</section>
</template>

<script>
	
	import dSwiper from "./dSwiper"
	import doWhat from "./doWhat"
	import toDoLis from "./toDoLIs"
	import guessYou from "./guessYou"
	import hotNow from "./hotNow"
	export default {
		name: "tuijian",
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