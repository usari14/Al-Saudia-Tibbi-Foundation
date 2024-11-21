<template>
    <div class="py-10">
        <div class="bg-[#515151] h-[300px]">
            <div class="container">
                <div class="bg-[#02101C1A] inline-block py-8 pl-5 pr-20 mt-24">
                    <h1 class="text-[40px] font-bold leading-[48px] text-white">Products</h1>
                    <sub class="text-[24px] leading-7 font-medium text-white">Who we are and what we do?</sub>
                </div>
            </div>
        </div>

        <!-- Breadcrumb Navigation -->
        <div class="container">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <router-link to="/"
                            class="inline-flex items-center text-lg font-medium text-red-600 underline hover:text-red-400">
                            Home
                        </router-link>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <span class="ms-1 text-lg font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                / Media
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <hr class="h-[2px] bg-[#6B6B6B] w-full mb-5">
        </div>
        <div class="container py-10">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:pr-16 pr-0 flex-col ">
                <div class="col-span-1">
                    <ul>
                        <strong
                            class="w-full block bg-white text-left px-3 py-2 border text-[30px] font-bold">Media</strong>
                        <li>
                            <button
                                class="dot w-full pl-10 text-[24px] bg-white h-[50px] text-left font-medium border hover:border-gray-300 hover:bg-gray-100 transition focus:outline-none active:bg-red-100 active:border-red-500"
                                @click="activateTab('profile')" :class="{ 'active-tab': activeTab === 'profile' }">
                                Gallery
                            </button>
                        </li>
                        <li>
                            <button
                                class="dot w-full pl-10 text-[24px] bg-white h-[50px] text-left font-medium border hover:border-gray-300 hover:bg-gray-100 transition focus:outline-none active:bg-red-100 active:border-red-500"
                                @click="activateTab('dashboard')" :class="{ 'active-tab': activeTab === 'dashboard' }">
                                Videos
                            </button>
                        </li>
                        <li>
                            <button
                                class="dot w-full pl-10 text-[24px] bg-white h-[50px] text-left font-medium border hover:border-gray-300 hover:bg-gray-100 transition focus:outline-none active:bg-red-100 active:border-red-500"
                                @click="activateTab('settings')" :class="{ 'active-tab': activeTab === 'settings' }">
                                Articles
                            </button>
                        </li>
                        <li>
                            <button
                                class=" w-full pl-10 text-[24px] bg-white h-[50px] text-left font-medium border hover:border-gray-300 hover:bg-gray-100 transition focus:outline-none active:bg-red-100 active:border-red-500"
                                @click="activateTab('contacts')" :class="{ 'active-tab': activeTab === 'contacts' }">

                            </button>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3">
                    <div v-show="activeTab === 'profile'">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
                            <div v-for="(image, index) in paginatedImages" :key="index">
                                <img :src="image" alt="Gallery Image" class="w-full h-auto">
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-8 gap-2 text-sm mt-10">
                                <li>
                                    <a href="#" @click="changePage(currentPage - 1)"
                                        :class="['flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight', currentPage === 0 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700']">
                                        <span class="sr-only">Previous</span>
                                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li v-for="n in totalPages" :key="n">
                                    <a href="#" @click="changePage(n - 1)"
                                        :class="['flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight', currentPage === n - 1 ? 'text-white bg-[#616161] border border-[#616161]' : 'text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700']">
                                        {{ n }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" @click="changePage(currentPage + 1)"
                                        :class="['flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight', currentPage === totalPages - 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700']">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="mt-4 ml-5">
                            <label for="pageSize" class="mr-2 text-sm">Items per page:</label>
                            <select id="pageSize" v-model="pageSize" class="border px-2 py-1 text-sm">
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                            </select>
                        </div>
                    </div>
                    <div v-show="activeTab === 'dashboard'">
                        <div class="grid grid-cols-1 lg:grid-cols-2 p-5 gap-5">
                            <div>
                                <img src="../assets/video11.png" alt="">
                                <p class="text-[30px] font-semibold text-center md:text-left lg:text-center">Muscular Strength</p>
                            </div>
                            <div>
                                <img src="../assets/video11.png" alt="">
                                <p class="text-[30px] font-semibold text-center md:text-left lg:text-center">Muscular Strength</p>
                            </div>
                            <div>
                                <img src="../assets/video11.png" alt="">
                                <p class="text-[30px] font-semibold text-center md:text-left lg:text-center">Muscular Strength</p>
                            </div>
                            <div>
                                <img src="../assets/video11.png" alt="">
                               <p class="text-[30px] font-semibold text-center md:text-left lg:text-center">Muscular Strength</p>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-8 gap-2 text-sm mt-10">
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700 cursor-not-allowed">
                                        <span class="sr-only">Previous</span>
                                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700">1</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700">2</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700">3</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700">4</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700">5</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700 cursor-not-allowed">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div v-show="activeTab === 'settings'" class="py-5 px-8">
                        <div class="flex flex-col lg:flex-row lg:justify-between mb-5">
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr class="h-[2px] bg-[#6B6B6B] w-full mb-5">
                        <div class="flex flex-col lg:flex-row lg:justify-between mb-5">
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr class="h-[2px] bg-[#6B6B6B] w-full mb-5">
                        <div class="flex flex-col lg:flex-row lg:justify-between mb-5">
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr class="h-[2px] bg-[#6B6B6B] w-full mb-5">
                        <div class="flex flex-col lg:flex-row lg:justify-between mb-5">
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr class="h-[2px] bg-[#6B6B6B] w-full mb-5">
                        <div class="flex flex-col lg:flex-row lg:justify-between mb-5">
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <p class="text-lg mb-3">Natural products manufacturers in Pakistan.</p>
                                <div class="inline-block">
                                    <span class="inline-flex items-center gap-2">
                                        <img src="../assets/adobe.png" alt="Adobe Logo" class="w-5 h-5">
                                        <a href="/" class="text-red-600 underline">View Article</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr class="h-[2px] bg-[#6B6B6B] w-full mb-5">
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import check from '../assets/check.jpg'
export default {
    name: "Media",
    data() {
        return {
            activeTab: "profile",  // Active tab
            currentPage: 0,        // Current page index
            totalPages: 5,         // Total number of pages
            pageSize: 12,           // Default page size (number of images per page)
            images: [              // List of all images
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
                check,
            ]
        };
    },
    computed: {
        // Calculate paginated images based on current page and page size
        paginatedImages() {
            const start = this.currentPage * this.pageSize;
            const end = start + this.pageSize;
            return this.images.slice(start, end);
        },
        // Calculate total number of pages based on total images and page size
        totalPages() {
            return Math.ceil(this.images.length / this.pageSize);
        }
    },
    methods: {
        // Change page and ensure it stays within the range
        changePage(newPage) {
            if (newPage >= 0 && newPage < this.totalPages) {
                this.currentPage = newPage;
            }
        },
        // Activate the clicked tab
        activateTab(tab) {
            this.activeTab = tab;
        }
    }
};
</script>



<style scoped>
.active-tab {
    background-color: #D5362B;
    color: white;
    position: relative;

}

.active-tab::before {
    content: "";
    border-left: 20px solid #D5362B;
    border-right: 10px solid transparent;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    position: absolute;
    width: 0;
    height: 0;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
}

.dot {
    position: relative;
}

.dot::after {
    content: "";
    background-color: black;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: 55%;
}

</style>