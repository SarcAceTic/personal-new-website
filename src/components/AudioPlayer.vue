<template>
  <div>
    <UContainer class="flex flex-col gap-y-4 bg-neutral-700/90 rounded-md p-4 max-w-lg z-40">
        <div class="flex flex-row gap-x-3">
            <img src="/SongCover.png" class="w-36 rounded-md border-2 border-primary-500 border-dashed">
            <div class="flex flex-col justify-between">
                <div>
                    <h3>Shinra-Bansho</h3>   
                    <p>Sayonara History</p>
                </div>
                <div>
                    <small>{{ formatTime(sliderSeconds) }} / {{ formatTime(duration) }}</small>
                </div>
            </div>
        </div>
        <div class="flex flex-row w-full gap-x-2">
            <UIcon @click="playback" :name="isPlaying ? 'mdi-light-pause' : 'mdi-light-play'" class="size-9 text-primary-400 hover:cursor-pointer" />
            <USlider class="flex-1" size="xs" :min="1" :max="duration" ref="songSlider" v-model="sliderSeconds" @change="changeTime"/>
        </div>
    </UContainer>
    <audio controls autoplay class="hidden" ref="song" loop @timeupdate="timeupdate" @loadedmetadata="loadedMetadata" @play="isPlaying = true" @pause="isPlaying = false">
      <source src="/SayonaraHistory.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import type { ShallowRef } from 'vue';

const duration: Ref = ref(0);
const sliderSeconds: Ref = ref(0)
const isPlaying: Ref = ref(false);
const songSlider: ShallowRef = useTemplateRef('songSlider');
const song = useTemplateRef('song')

onMounted(() => {
    if (song.value) {
        song.value.load()
    }
})

const loadedMetadata = function() {
    duration.value = song.value?.duration
}

const playback = function() {
    if (!isPlaying.value) {song.value?.play()}
    else {song.value?.pause()}
    
    isPlaying.value = !isPlaying.value 
}

const timeupdate = function() {
    sliderSeconds.value = song.value?.currentTime
}

const changeTime = function() {
    if (song.value) {song.value.currentTime = sliderSeconds.value}
}

const formatTime = function(seconds: number): string  {
    const mins = Math.floor(seconds/60)
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
}

// watch(sliderSeconds, () => {
//     sliderSeconds.value = song.value?.currentTime
// })
</script>

<style scoped></style>
