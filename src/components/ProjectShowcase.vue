<template>
  <div>
    <section>
      <h2 class="font-bold text-3xl text-center">Projects</h2>
      <USeparator color="primary" size="sm" class="my-5" />
      <UCarousel
        v-slot="{ item }"
        :items="myProjects"
        arrows
        dots
        auto-height
        class="w-full max-w-xs mx-auto mt-14"
      >
        <div
          class="bg-primary-500 rounded-xl p-1 h-[600px]"
          :class="{
            'bg-linear-100 from-green-600 to-primary-600':
              item.name == 'Ruukoto Bot',
          }"
        >
          <UCard class="bg-neutral-800 h-full" variant="soft">
            <template #header>
              <h3 class="text-center">{{ item.name }}</h3>
            </template>
            <img
              :src="item.image"
              class="w-2xs h-80 object-cover rounded-lg border-2 border-dashed border-primary"
            />
            <template #footer>
                <div class="flex flex-row justify-between gap-x-7">
                    <p class="">{{ item.description }}</p>
                    <ULink class="text-primary" :to="item.link" target="_blank">Check it out!</ULink>
                </div>
            </template>
          </UCard>
        </div>
      </UCarousel>
    </section>
  </div>
</template>

<script setup lang="ts">
const myProjects: { name: string; description: string; image: string, link: string }[] = [
  {
    name: "Ruukoto Bot",
    description:
      "My main & featured project! Please check it out, I've been working hard on this! I appreciate it!",
    image: "/Ruukoto.png",
    link: "https://discord.gg/KuJkVQzXTK"
  },
  {
    name: "Pricing Project",
    description:
      "One of my first actual finished project that I did from... a website that I forgot the name of. Um.. yes!",
    image: "/PricingProject.png",
    link: "https://sarcsprice.vercel.app/"
  },
  {
    name: "MAL Redesign",
    description: "Second project, if I remember correctly. A redesign off of the MyAnimeList.net website!",
    image: "/MyAnimeList.png",
    link: "https://mal-redesign.vercel.app",
  },
  {
    name: "StrawberryChae Web",
    description: "A website I made for my friend that... unfriended me for... no reason. Literally. I miss her. Bwaaaa!!",
    image: "/StrawberryChae.png",
    link: "https://strawberrychae.vercel.app/"
  },
  {
    name: "Old Website",
    description: "My old website!!! This was so unmaintained it's insane.. But I promise I'm not like this anymore!",
    image: "/OldWebsite.png",
    link : "https://sarcprototype.vercel.app/"
  }
];
</script>

<style scoped></style>
