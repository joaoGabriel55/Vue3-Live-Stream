<script setup lang="ts">
import useLiveStream from "@/hooks/useLiveStream";
import { onMounted, ref } from "vue";

const livePlayerRef = ref<HTMLMediaElement | any>();
const liveStreamSound = ref<boolean>(false);
const liveStreamError = ref<boolean>(false);

onMounted(() => {
  useLiveStream({
    livePlayer: livePlayerRef.value,
    onFulfilled: () => {},
    onError: () => {
      liveStreamError.value = true;
    },
  });
});

function toggleSound() {
  if (livePlayerRef.value.muted) {
    livePlayerRef.value.muted = false;
    liveStreamSound.value = true;
  } else {
    livePlayerRef.value.muted = true;
    liveStreamSound.value = false;
  }
}
</script>

<template>
  <div class="video-player" v-if="!liveStreamError">
    <video ref="livePlayerRef" :muted="true"></video>
    <div class="bottom-bar">
      <p class="water-mark">LIVE</p>
      <button class="sound-button" @click="toggleSound">
        <span class="material-symbols-outlined">
          {{ liveStreamSound ? "volume_up" : "volume_off" }}
        </span>
      </button>
    </div>
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

.bottom-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.water-mark {
  left: 0;
  border-radius: 8px;
  padding: 2px 8px;
  margin: 18px;
  background-color: rgba(255, 0, 0, 0.5);
  color: #fff;
}

.sound-button {
  margin: 18px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: var(--vt-c-white);
  border: 1px solid var(--vt-c-white);
  display: flex;
  align-items: center;
}
</style>
