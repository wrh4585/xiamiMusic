<template>
	
		<section class="contentDiv">
			<myMusicList v-if="mis && mis.myLists " :data="mis.myLists.ml01"></myMusicList>
			<myMusicList v-if="mis && mis.myLists " :data="mis.myLists.ml02"></myMusicList>
			<myMusicList v-if="mis && mis.myLists " :data="mis.myLists.ml03"></myMusicList>
			<myMusicList v-if="mis && mis.myLists " :data="mis.myLists.ml04"></myMusicList>
			<myMusicList v-if="mis && mis.myLists " :data="mis.myLists.ml05"></myMusicList>
			<myMusicList v-if="mis && mis.myLists " :data="mis.myLists.ml06"></myMusicList>
			<buildGe></buildGe>
			<maybeLike :data="mis.mayLike"></maybeLike>
		</section>

</template>

<script>
	import myMusicList from "./myMusicList"
	import buildGe from "./buildGe"
	import maybeLike from "./maybeLike"
	export default {
		name: "myContent",
		components:{
			myMusicList,
			buildGe,
			maybeLike
		},
		props:['mis']
	}
</script>

<style scoped>
	.contentDiv{
		width: 100%;
		-webkit-flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>