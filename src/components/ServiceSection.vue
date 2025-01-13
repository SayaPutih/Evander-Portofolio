<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">Services include</h2>
        </div>

        <!-- Main container for the services -->
        <div class="xl:px-16 px-4 ">

            <!-- Desktop and Tablet View (Grid Layout) -->
            <div class="hidden sm:grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                <div
                    v-for="service in services"
                    :key="service.id"
                    data-aos="fade-up"
                    class="px-8 py-12 rounded-xl bg-boxColor shadow-lg border border-boxSeconColor max-w-xs w-full"
                >
                    <div class="mx-auto  h-24 w-24 text-center xl:h-28 xl:w-28">
                        <div v-if="service.iconType === 'image'">
                            <img :src="service.icon" alt="service icon" class="w-full h-full object-contain" />
                        </div>
                        <div v-else-if="service.iconType === 'image'" class="text-6xl text-primary">
                            <i :class="service.icon"></i>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-900 lg:text-xl">
                            {{ service.name }}
                        </h3>
                        <p class="text-grey pt-4 text-sm text-description md:text-base group-hover:text-white">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Mobile View (Horizontal Scroll) -->
            <div class="sm:hidden overflow-x-auto whitespace-nowrap">
                <div class="inline-block">
                    <div
                        v-for="service in services"
                        :key="service.id"
                        data-aos="fade-up"
                        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] inline-block mr-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg break-words"
                    >
                        <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div v-if="service.iconType === 'image'">
                                <img :src="service.icon" alt="service icon" class="w-full h-full object-contain" />
                            </div>
                            <div v-else-if="service.iconType === 'image'" class="text-6xl text-primary">
                                <i :class="service.icon"></i>
                            </div>
                        </div>
                        <div class="text-center">
                            <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-900 lg:text-xl">
                                {{ service.name }}
                            </h3>
                            <p class="text-grey pt-4 text-sm text-description md:text-base group-hover:text-white">
                                {{ service.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
// Importing necessary modules
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { ref } from 'vue';
import { images } from '@/constants';

const services = ref([
    {
        id: 1,
        icon: images.WebDev,
        iconType: 'image',
        name: 'Web Development',
        description:
            'I create interactive and responsive websites using the latest technologies, including HTML, CSS, JavaScript, and frameworks, ensuring both functionality and an appealing design.',
    },
    {
        id: 2,
        icon: images.WebDes,
        iconType: 'image',
        name: 'Web Design',
        description:
            'I specialize in crafting visually attractive and user-friendly web interfaces with a focus on layout, color schemes, and modern design trends to ensure a great user experience.',
    },
    {
        id: 3,
        icon: images.GameDev,
        iconType: 'image',
        name: 'Game Development',
        description:
            'I design and develop high-quality games using engines like Unity and Unreal Engine, focusing on immersive gameplay, optimized graphics, and smooth performance to engage players.',
    },
    {
        id: 4,
        icon: images.DataDev,
        iconType: 'image',
        name: 'Data Development',
        description:
            'I build and manage structured databases using SQL, focusing on optimizing queries, maintaining data integrity, and improving performance to ensure smooth data handling.',
    },
    {
        id: 5,
        icon: images.DataManage,
        iconType: 'image',
        name: 'Data Management',
        description:
            'I organize, manage, and analyze data efficiently with database systems like MySQL, PostgreSQL, and MongoDB, ensuring optimal performance and ease of use for large datasets.',
    },
    {
        id: 6,
        icon: images.UnityDev,
        iconType: 'image',
        name: 'Unity Development',
        description:
            'I specialize in Unity game development, creating immersive 3D experiences and optimizing performance, ensuring smooth integration of assets and cutting-edge graphics.',
    },
]);

</script>

<style scoped>
/* Remove the horizontal scrollbar for mobile screens */
@media (max-width: 640px) {
    .overflow-x-auto {
        -ms-overflow-style: none;  /* For IE and Edge */
        scrollbar-width: none;  /* For Firefox */
    }

    .overflow-x-auto::-webkit-scrollbar {
        display: none; /* For Chrome, Safari, and Opera */
    }
}

/* Description text adjustments for wrapping */
.text-description {
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word; /* Break long words if necessary */
    overflow: hidden; /* Prevent overflow */
}

/* Prevent text overflow and ensure content fits */
.break-words {
    word-break: break-word;
    white-space: normal;
}

.text-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
}

*, ::before, ::after {
    box-sizing: content-box;  /* Explicitly set it to content-box */
}

.object-contain {
    object-fit: contain; /* Ensure images fit within the container */
}
</style>
