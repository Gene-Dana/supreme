<template lang="pug">
  div
    video-player
      source(src="https://youtu.be/eqPj7Bq7M2U" type="video/mp4")
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