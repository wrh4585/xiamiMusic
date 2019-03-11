<template>

		<section id="bigSection">
			<mublogTopics v-if="mb&&mb.blogTopics" :data="mb.blogTopics.bTopics01"></mublogTopics>
			<mublogTopics v-if="mb&&mb.blogTopics" :data="mb.blogTopics.bTopics03"></mublogTopics>
			<mublogTuijian v-if="mb&&mb.blogFriend" :data="mb.blogFriend.bFriends01"></mublogTuijian>
			<mublogTopics v-if="mb&&mb.blogTopics" :data="mb.blogTopics.bTopics02"></mublogTopics>
		</section>
	
</template>

<script>
	import mublogTopics from "./mublogTopics"
	import mublogTuijian from "./mublogTuijian"
	export default {
		name: "dongtai",
		components:{
			mublogTopics,
			mublogTuijian
		},
		props:['mb']
	}
</script>

<style scoped>
	#bigSection{
		margin-top: .35rem;
		-webkit-flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>