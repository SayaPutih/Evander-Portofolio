<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
         <div class="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                </svg>        
        </div>

         <!--Toggle buat Hp-->
        <div class="md:hidden z-30">
            <button type="button" class="block text- focus:outline-none"
            @click="isMenuOpen = !isMenuOpen"
            >
                <span v-if="isMenuOpen" class="text-5xl">
                    <img class="w-6 h-6"
                    src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="">
                </span>
                <span v-else class="text-5xl">
                    <img class="w-6 h-6"
                    src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="">
                </span>
            </button>
        </div>

        <!--NavBar Link-->
        <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
            isMenuOpen ? 'block' : 'hidden'
        ]"
        >
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name"
                    class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg">
                    <a :href="item.href" 
                    @click ="scrollToSection(item.href)"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
                
        </nav>

    </header>
</template>
<script setup>
import { ref } from 'vue';
const Menu = ref(
    [
        {name:'Service',href:'#services'},
        {name:'About Me',href:'#About'},
        {name:'Skills',href:'#Skills'},
        {name:'Projects',href:'#Projects'},
        {name:'Contact',href:'#Contact'}
    ]
);

const isMenuOpen = ref(false)
const scrollToSection =(href)=>{
    isMenuOpen.value=false;
    const section = document.querySelector(href);
    if(section){
        section.scrollIntoview({behavior : 'smooth'});
    }
}
</script>