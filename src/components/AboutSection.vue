<template>
    <section class="text-white mt-18" id="About">

        <div class="absolute z-0 top-[93rem] flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl
            to-[#570cac] opacity-20
            "></div>
        </div>

        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">

                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>

                <div class="space-y-8 py-8 " >
                    <div v-for="selected in education" :key="selected.id"
                    class="flex items-center md:w-[80%] border-boxSeconColor bg-gradient-to-br 
                    from-boxColor to-[#111a3e] 
                    rounded-[1rem] p-7">
                        <div class="w-1/4">
                            <img :src="selected.image" alt="">
                        </div>
                        <div class="w-3/4 px-10">
                            <h3 class="text-2xl font-semibold uppercase text-transparent
                                bg-clip-text bg-gradient-to-r from-primary to-boxSeconColor lg:text-xl"
                            >{{ selected.title }}</h3>
                            <p class="text-white">{{ selected.major }}</p>
                            <p class="text-white">{{ selected.year }}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="mt-4 md:mt-0 text-justify flex flex-col items-center z-10 h-full" data-aos="flip-right">

                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">
                    More <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span> Me
                </h2>
                <p class="text-base text-center lg:text-lg mt-8 py-8 px-2">
                    {{ aboutMe }}
                </p>
                
                <div class="grid grid-cols-4 gap-2 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-boxColor shadow-lg border border-boxSeconColor p-3"
                    v-for="selected in data" :key="selected.id">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">{{ selected.number }}</h3>
                        <p class="text-sm text-center sm:text-base text-gray-300">{{selected.desc}}</p>
                    </div>
                </div>
                

            </div>

        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { ref } from 'vue';
import {images} from '@/constants';

const aboutMe = "I am a passionate full-stack developer specializing in full-stack development, quality assurance, Python-based machine learning, and MySQL database management. With a background in IT management, I have sharpened my skills in coding, algorithms, and problem-solving through diverse individual and collaborative projects. My primary goal is to design and develop innovative applications and websites, enhance operational efficiency, and contribute to high-impact projects that deliver exceptional results. Dedicated to continuous learning, I focus on improving service quality and creating user-centered, efficient solutions that showcase my expertise in full-stack development.";

const education = ref(
    [
        {
            id:1,
            image:images.UMN,
            title:'Multimedia Nusantara University',
            major:'Computer Science',
            year:2022
        },
        {
            id:2,
            image:images.Pahoa,
            title:'Pahoa Highschool',
            major:'Science',
            year:2019
        },
    ]
);

const data = ref(
    [
        {
            id:1,
            number:'+6',
            desc:'Projects',
        },
        {
            id:2,
            number:'3.54',
            desc:'G.P.A Score',
        },
        {
            id:3,
            number:'+16',
            desc:'Tech Stacks',
        },
        {
            id:4,
            number:'+6',
            desc:'Certificates',
        },
    ]
);

</script>