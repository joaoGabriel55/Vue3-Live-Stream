<script setup lang="ts">
import useLiveStream from "@/hooks/useLiveStream";
import { onMounted, ref } from "vue";

const livePlayerRef = ref<HTMLMediaElement | any>();
const liveStreamError = ref<boolean>(false);

onMounted(() => {
  useLiveStream({
    livePlayer: livePlayerRef.value,
    onError: () => {
      liveStreamError.value = true;
    },
  });
});
</script>

<template>
  <div class="video-player" v-if="!liveStreamError">
    <video ref="livePlayerRef" :muted="true"></video>
    <p class="water-mark">LIVE</p>
  </div>
  <div class="video-player" v-else>
    <p>Error at stream loading. :-(</p>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  height: 100%;
  border-radius: 18px;
}

.video-player {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}

.water-mark {
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  padding: 2px 8px;
  margin: 8px;
  background-color: rgba(255, 0, 0, 0.5);
  color: #fff;
}
</style>
