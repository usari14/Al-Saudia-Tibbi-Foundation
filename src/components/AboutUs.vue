<template>
    <div class="bg-aboutusbg bg-center h-[300px]">
        <div class="container">
            <div class="bg-[#02101C1A] inline-block py-8 pl-5 pr-20 mt-24">
                <h1 class="text-[40px] font-bold leading-[48px] text-white">ABOUT US</h1>
                <sub class="text-[24px] leading-7 font-medium text-white">Who we are and what we do?</sub>
            </div>

        </div>
    </div>
    <div class="container py-10">
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
                        <span class="ms-1 text-lg font-medium text-gray-500 md:ms-2 dark:text-gray-400">/
                            About Us</span>
                    </div>
                </li>
            </ol>
        </nav>
        <hr class="h-[2px] bg-[#6B6B6B] w-full lg:mb-20  mb-10">
        <div class="flex flex-wrap lg:flex-nowrap justify-center">
            <div
                class="w-full lg:w-7/12 flex flex-col lg:items-start text-center lg:text-left pr-0 lg:pr-6 order-2  lg:order-1">
                <h1 class="text-3xl lg:text-6xl font-medium lg:leading-[72px] leading-10 lg:mb-10 mb-4">Al-Saudia Tibbi
                    Foundation Takes Pride
                    In Maintaining High Quality In Its Products.</h1>
                <p class="text-lg lg:text-xl text-[#000000] lg:mb-8 mb-4 lg:pr-10 pr-0">
                    Al-saudia Tibbi Foundation, is one of the largest natural products manufacturers in Pakistan. It is
                    a modern and progressive facility that manufactures and markets leading brands that have become
                    household names.
                </p>
                <p class="text-lg lg:text-xl text-[#000000] lg:mb-8 mb-4 lg:pr-10 pr-0">Different physicians and
                    intellectuals have tried
                    their best to carry out this task at different
                    times but the way in which the experts of AlSaudia Tibi Foundation succeeded in their endeavor is
                    their specialty and in the world of medicine Hakim Saifullah Seekho Sahib. The services are
                    unforgettable, thanks to which millions of people today are benefiting from Islamic medicine. You
                    too can live a healthy life by getting your free check-up from the experts of AlSaudia Tibi
                    Foundation for complete and successful treatment of any disease whether it is complex or hidden.</p>
            </div>
            <div
                class="w-full lg:w-5/12 flex flex-col justify-center items-center lg:justify-end relative lg:mb-36 mb-8  order-1 lg:order-2">
                <img src="../assets/aboutusimage.png" alt="Responsive Image" class="w-3/4 object-cover lg:w-[515px]">
                <img src="../assets/mainlogo.png" class="static lg:absolute lg:-bottom-10 lg:-left-5 w-48 mt-4 lg:mt-0"
                    alt="">
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'AboutUs',
}
</script>

<style></style>