<template>
    <section class="text-white mt-18" id="Skills">

        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>

        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">

            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text- md:mt-0 mt-8">
                    My Experience
                </h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div class="flex items=center rounded-xl p-4 bg-boxColor shadow-lg border border=[#1f1641]"
                    v-for="selected in experience" :key="selected.id">
                        <div class="w-1/4">
                            <img :src="selected.img" alt="">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary">
                                {{ selected.name }}
                            </h3>
                            <h2 class="text-gray-400 py-2">
                                {{ selected.date }}
                            </h2>
                            <p classs="text-white">
                                {{ selected.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%] ">
                <h2 class="text-4xl font-bold text-white mb-4 text-left md:text-center sm:text-left" >My
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <div class="mt-8" v-for="selected in skills" :key="selected.id">
                    <div class="flex items-end justify-between" data-aos="flip-right">
                        <h4 class="font-semibold uppercase text-white">
                            {{ selected.name }}
                        </h4>
                        <h3 class="text-2xl font-bold text-white">
                            {{ selected.progress }}
                        </h3>
                    </div>
                    <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                        <div class="h-1 rounded-full bg-red-600" :style="`width : ${selected.progress}`"></div>
                    </div>
                </div>
            </div>
            
        </div>

    </section>
</template>
<script setup>
import { images } from '@/constants';
import {ref} from 'vue';
const skills = ref([
    {
        id:1,
        name:'ReactJs',
        progress:'86%'
    },
    {
        id:2,
        name:'Vue',
        progress:'87%'
    },
    {
        id:3,
        name:'Tailwind',
        progress:'85%'
    },
    {
        id:4,
        name:'SQL',
        progress:'95%'
    },
    {
        id:4,
        name:'Java',
        progress:'92%'
    },
    {
        id:5,
        name:'Unity',
        progress:'90%'
    },
]);

const experience = ref([
    {
        id:1,
        img:images.FTI,
        name:'Lab Assitant',
        date:'June 2024 - Dec 2024',
        desc:'Instructed the HO 159 Introduction to Internet Technology course',
    },
    
    
]);

</script>