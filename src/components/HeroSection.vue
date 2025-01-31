<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] to-bgcolor blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from=[#670ccf] opacity-40 blur-2xl"></div>
        </div>

        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[50px] shadow-lg border border-primary">
                            <img src="@/assets/Evander.jpg" alt="Hero pic" width="500" height="auto" loading="lazy" class="w-full h-full rounded-[50px] object-cover">
                        </div>
                    </div>
                </div>

                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm 
                            <span class="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-900">
                                Evander Nikolai
                            </span>
                        </h1>
                        <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                            Hi I'm Evander Nikolai, a passionate Full-Stack Developer and SQL enthusiast dedicated to building innovative solutions. I thrive on crafting seamless applications, analyzing data, and shaping the future of technology. I also enjoy exploring Unity and creating impactful projects in data analysis and development.
                        </p>

                        <div class="flex flex-wrap justify-center lg:justify-start gap-3 pt-9">
                            <button class="border border-[#F59E0B] px-6 md:px-7 py-3 rounded-full relative group flex justify-center items-center">
                                <a :href="resume" download="evander_resume.pdf" class="pl-2 text-[#F59E0B]">Download Resume</a>
                            </button>
                            <button class="border border-[#F59E0B] px-6 md:px-7 py-3 rounded-full relative group flex justify-center items-center">
                                <a :href="nilai" download="transkrip_nilai.pdf" class="pl-2 text-[#F59E0B]">Download Transkrip Nilai</a>
                            </button>
                            <button class="border border-[#F59E0B] px-6 md:px-7 py-3 rounded-full relative group flex justify-center items-center">
                                <a :href="surat" download="surat_ijin_magang.pdf" class="pl-2 text-[#F59E0B]">Download Surat Ijin Magang</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import resume from '@/assets/doc/EvanderNikolaiCV.pdf';
import surat from '@/assets/doc/SuratMagang.pdf';
import nilai from '@/assets/doc/TranskripNilai.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>
