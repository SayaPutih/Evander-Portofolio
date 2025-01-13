<template>
    <section class="text-primary mt-20" id="Contact">
        
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div class="lg:col-span-1 md:col-span-2">
                <h1 class="text-4xl font-bold text-secondary mb-4 px-4 xl:pl-16">Let's Connect</h1>
                <p class="text-gray-600 mb-6">
                    Feel free to connect with me through any of the platforms below! I’m always open to discussing new opportunities, 
                    collaborations, or just having a friendly chat about tech and development. Let’s grow together!
                </p>
            </div>
            <div class="lg:col-span-2 md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                    class="flex items-center space-x-4 p-4 rounded-lg bg-[#121010] shadow-md"
                    v-for="selected in socialMedia"
                    :key="selected.id"
                >
                    <a
                        :href="selected.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-shrink-0"
                    >
                        <img
                            :src="selected.img || 'https://via.placeholder.com/40'"
                            :alt="selected.name + ' icon'"
                            class="w-10 h-10 rounded-[0.25rem]"
                        />
                    </a>
                    <div>
                        <h3 class="text-lg font-semibold text-primary">{{ selected.name }}</h3>
                        <p class="text-gray-600">{{ selected.account }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const socialMedia = ref([
    {
        id: 1,
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
        name: 'Instagram',
        account: 'evandernikolai',
        link: 'https://www.instagram.com/evandernikolai/',
    },
    {
        id: 2,
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        name: 'Github',
        account: 'SayaPutih',
        link: 'https://github.com/SayaPutih',
    },
    {
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg',
        name: 'LinkedIn',
        account: 'Evander Nikolai',
        link: 'https://www.linkedin.com/in/evander-nikolai-369ab62b7/',
    },
    {
        id: 4,
        img: 'https://www.svgrepo.com/show/452188/discord.svg',
        name: 'Discord',
        account: 'darth7200',
        link: 'https://discordapp.com/users/633332176926015500',
    },
    {
        id: 5,
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
        name: 'WhatsApp',
        account: '+62 812 1312 8976',
        link: 'http://Wa.me/+6282213128976',
    },
]);
</script>