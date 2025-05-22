<template>
  <div>
    <div class="relative -mx-4 -mt-5 mb-7 z-0 overflow-hidden h-screen">
      <img
        src="/Keine.gif"
        class="absolute object-cover block opacity-50 h-full w-full top-0"
      />
      <div class="relative z-10 p-4">
        <AudioPlayer class="mt-3 px-2 mx-auto"></AudioPlayer>
        <q class="block text-center mt-15 font-light italic text-3xl"
          >Crashing out right now...</q
        >
      </div>
    </div>
    <YappingSession class="mx-4 sm:mx-8 md:mx-20 lg:mx-60 xl:mx-[400px] mb-6" />
    <ProjectShowcase class="mx-4 sm:mx-8 md:mx-20 lg:mx-60 xl:mx-[400px]" />
  </div>
</template>

<script setup lang="ts">
import ProjectShowcase from '~/components/ProjectShowcase.vue';
import YappingSession from '~/components/YappingSession.vue';

</script>

<style lang="scss" scoped></style>
