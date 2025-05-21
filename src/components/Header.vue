<template>
    <div>
        <header class="p-4 border-b border-primary z-40 bg-neutral-800 shadow-2xl fixed top-0 left-0 right-0 sm:px-8 md:px-20 lg:px-60">
            <nav class="flex flex-row justify-between">
                <ULink class="my-auto text-xl text-neutral" to="/">
                    <b class="text-primary">S</b>a<b class="text-primary">R</b>yn
                </ULink>
                <div class="hidden sm:flex flex-row">
                    <ULink v-for="link in slideoverLinks" :to="link.url" class="ml-10">
                        {{ link.name }}
                    </ULink>
                </div>

                <USlideover class="sm:hidden" title="Navigation" :close="{color: 'primary', variant: 'outline'}" :ui="{ content: 'max-w-[254px]' }" >
                    <UButton icon="mdi-light:menu" size="xl" class="hover:bg-zinc-800" variant="ghost" color="neutral"></UButton>
                    
                    <template #body>
                        <div class="flex flex-col">
                            <ULink v-for="link in slideoverLinks" :to="link.url" class="flex flex-row pb-6 text-xl gap-x-5">
                                <UIcon :name="link.icon" class="my-auto font-bold size-7" />
                                <h2>{{ link.name }}</h2>
                            </ULink>
                        </div>
                    </template>
                </USlideover>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
const slideoverLinks: { name: string, url: string, icon: string }[] = [
    { name: "Home", url: '/', icon: "mdi-light:home" },
    { name: "About", url: '/about', icon: "mdi-light:help" },
    { name: "Blog", url: '/blog', icon: "mdi-light:account" },
]
</script>

<style lang="scss" scoped>

</style>