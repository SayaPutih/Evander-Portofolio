<template>
  <div class="bg-bgcolor min-h-screen">
    <NavBar />
    <HeroSection />
    <ServiceSection />
    <AboutSection />
    <ExperienceSkills />
    <Project />
    <Contacts />
    <Footer />
    <!-- <text /> -->
  </div>
</template>

<script setup>
// import NavBar from '@/components/NavBar.vue';
// import HeroSection from '@/components/HeroSection.vue';
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(()=>import('@/components/HeroSection.vue'));
const ServiceSection = defineAsyncComponent(()=>import('@/components/ServiceSection.vue'));
const AboutSection = defineAsyncComponent(()=>import('@/components/AboutSection.vue'));
const ExperienceSkills = defineAsyncComponent(()=>import('@/components/ExperienceSkills.vue'));
const Project = defineAsyncComponent(()=>import('@/components/Project.vue'));
const Contacts = defineAsyncComponent(()=>import('@/components/Contacts.vue'));
const Footer = defineAsyncComponent(()=>import('@/components/Footer.vue'));
//const text = defineAsyncComponent(()=>import('@/components/text.vue'));
</script>
