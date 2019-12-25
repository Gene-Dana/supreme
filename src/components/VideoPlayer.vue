<template lang="pug">
  div
    video-player
      source(src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4")
</template>
 
<script>
import videoPlayer from "vuetify-media-player/src/components/video-player.vue";
import "vuetify-media-player/src/style.styl";
export default {
	name: "VideoPlayer",
	components: {
		videoPlayer
	}
};
</script>