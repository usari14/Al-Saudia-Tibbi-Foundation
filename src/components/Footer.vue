<template>
    <div class="bg-[#A52A2A] py-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            <!-- Column 1: Logo and Phone -->
            <div class="space-y-4 text-center lg:text-left">
                <img src="../assets/mainlogo.png" alt="Logo" class="w-60 mx-auto lg:mx-0 mb-7">
                <p class="text-[20px] font-medium">Call us if you need any help</p>
                <strong class="text-[36px] font-bold text-[#F7BE10]">0300-1001967</strong>
            </div>

            <!-- Column 2: About -->
            <div class="space-y-4 px-4 text-center lg:text-left">
                <h2 class="text-[34px] font-medium leading-7 mb-10 mt-6">About Company</h2>
                <p class="text-lg font-medium leading-[30px] text-[#FFFFFF]">
                    Al-saudia Tibbi Foundation, is one of the largest natural products manufacturers in Pakistan. It is
                    a modern and progressive facility that manufactures and markets leading brands that have become
                    household names.
                </p>
            </div>

            <!-- Column 3: Quick Links -->
            <div class="space-y-4 text-center lg:text-left md:pl-10 pl-0">
                <h2 class="text-[34px] font-medium leading-7 mb-10 mt-6">Quick Links</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:underline font-lg font-medium leading-10">Home</a></li>
                    <li><a href="#" class="hover:underline font-lg font-medium leading-10">About Us</a></li>
                    <li><a href="#" class="hover:underline font-lg font-medium leading-10">Products</a></li>
                    <li><a href="#" class="hover:underline font-lg font-medium leading-10">Media</a></li>
                    <li><a href="#" class="hover:underline font-lg font-medium leading-10">Contact</a></li>
                </ul>
            </div>

            <!-- Column 4: Contact Info -->
            <div class="space-y-4 text-center lg:text-left">
                <h2 class="text-[34px] font-medium leading-7 mb-10 mt-6">Contact Info</h2>
                <p class="text-lg font-medium leading-[26px] pb-3">
                    Jam-e-Shirin Boulevard 15-G, Gulberg-III, Lahore, Pakistan.
                </p>
                <p
                    class="text-lg font-medium leading-[26px] flex items-center justify-center lg:justify-start gap-5 pb-3">
                    <img src="../assets/footermail.png" class="object-contain" alt="">
                    onlinesales@qarshi.com
                </p>
                <div class="flex justify-center lg:justify-start gap-5">
                    <img src="../assets/footermail.png" alt="">
                    <img src="../assets/footermail.png" alt="">
                    <img src="../assets/footermail.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#D5362B]">
        <div class="container">
            <span class="text-center text-white block py-5 text-base font-medium leading-7">Copyright 2024. Qarshi Health Shop. All Rights
                Reserved.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
/* Add custom styles here if necessary */
</style>
