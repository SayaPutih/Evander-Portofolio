<template>
    <section class="text-white mt-20" id="Projects">

        <div class="px-4 xl:pl-16">

            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['All' , 'Web Development' , 'Others']"
                        :key="category" @click="selectedCategory = category"
                    >
                    {{ category }}
                    </button>
                </div>
            </div>

            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right"
            >
                <div v-for="selected in filteredProjects" :key="selected.id">

                    <div  
                        class="h-52 md:h-[24rem] rounded-t-xl relative group"
                        :style="{ 
                            backgroundImage: 'url(' + selected.image + ')', 
                            backgroundSize: '100% 100%', 
                            backgroundRepeat: 'no-repeat', 
                            backgroundPosition: 'center' 
                        }"
                    >

                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                                hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">

                            <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="selected.github" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                </path>
                            </svg>
                            </a>

                            <a class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="selected.link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                    data-slot="icon"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                </svg>
                            </a>

                        </div>

                        

                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-boxColor shadow-lg border border-boxSeconColor py-6 px-4">
                            <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ selected.title }}</h3>
                            <p class="text-[#ADB7BE]">{{ selected.desc }}</p>
                            <div class="flex flex-wrap p-2.5">
                                <div v-for="selected_stack in selected.stack" :key="selected_stack" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                                >
                                    <p class="px-1 py-2">{{ selected_stack }}</p>
                                </div>
                            </div>
                        </div>

                </div>

            </ul>

        </div>

    </section>
</template>
<script setup>
import {ref,computed} from 'vue';
import {images} from '@/constants';
const projects = ref([
    {
        id:1,
        category:'Web Development',
        title:'RKB Restaurant Website',
        desc:'Made a Cafe Restaurant Website using React Js and a CSS naming method called BEM.',
        link:'https://seven-code-website-01-learning.vercel.app/',
        image:images.ContohWebRKB,
        github:'https://github.com/SayaPutih/ReactJs-SevenCode',
        stack:['ReactJs','Css'],
    },
    {
        id:2,
        category:'Others',
        title:'Warkop Database Management',
        desc: 'Design and normalize a database for a mini cafe and generate placeholder data using python to simulate real-world scenarios.',
        link:'',
        image:images.ContohWarkopTeras,
        github:'https://github.com/SayaPutih/SQL-DatabaseWarungKopi',
        stack:['SQL','Jupyter'],
    },
    {
        id:3,
        category:'Others',
        title:'Unity Enless Runner',
        desc: 'Created an endless runner game using Unity and implemented the character and obstacle colliders.',
        link:'',
        image:images.ContohAmbarun,
        github:'https://github.com/SayaPutih/Unity-Ambaruni',
        stack:['Unity','C#'],
    },
]);

const selectedCategory = ref('All');

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') {
        return projects.value;
    }
    return projects.value.filter(
        project => project.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
});
</script>