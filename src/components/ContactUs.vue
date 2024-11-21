<template>
    <div class="bg-[#515151] h-[300px]">
        <div class="container">
            <div class="bg-[#02101C1A] inline-block py-8 pl-5 pr-20 mt-24">
                <h1 class="text-[40px] font-bold leading-[48px] text-white">CONTACT US</h1>
                <sub class="text-[24px] leading-7 font-medium text-white">Available at phone call, whatsapp</sub>
            </div>
        </div>
    </div>
    <div class="container py-14">
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
                            Contact Us</span>
                    </div>
                </li>
            </ol>
        </nav>
        <hr class="h-[2px] bg-[#6B6B6B] w-full lg:mb-20 mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-20">
            <div class=" flex flex-col items-center gap-5 p-5 border-b-2 md:border-b-0 md:border-r border-gray-400">
                <img src="../assets/contact1.svg" class="w-[90px] h-[80px]" alt="">
                <h2 class="text-2xl font-medium leading-7">Corporate Office</h2>
                <p>Waris khan metro bus station, Muree road, Rawalpindi, Nazd Pindi house, Alsaudia Tibbi Foundation</p>
            </div>
            <div class="flex flex-col items-center gap-5 p-5 border-b-2 md:border-b-0 md:border-r border-gray-400">
                <img src="../assets/contact2.svg" class="w-[90px] h-[80px]" alt="">
                <h2 class="text-2xl font-medium leading-7">Working Hours</h2>
                <p>9:00 Am - 6:00 Pm (Monday to Friday)</p>
            </div>
            <div class="flex flex-col items-center gap-3 p-5">
                <img src="../assets/contact3.svg" class="w-[90px] h-[80px]" alt="">
                <h2 class="text-2xl font-medium leading-7">Contact Details</h2>
                <p>alsaudiatibbiwholesaler@gmail.com</p>
                <strong class="text-2xl font">0300-1001967</strong>
            </div>
        </div>
        <div>
            <h3 class="text-6xl font-medium leading-[72px] text-[#000000] text-center mb-16">For Business Queries</h3>
            <form action="">
                <div class="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-6">
                    <div class="flex-1">
                        <label for="firstName" class="block text-base font-semibold text-[#000000]">Name <span
                                class="text-red-600">*</span></label>
                        <input type="text"
                            class="mt-1 block bg-transparent w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div class="flex-1">
                        <label for="lastName" class="block text-base font-semibold text-[#000000]">Email <span
                                class="text-red-600">*</span></label>
                        <input type="text"
                            class="mt-1 block bg-transparent w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div class="flex-1">
                        <label for="lastName" class="block text-base font-semibold text-[#000000]">Phone <span
                                class="text-red-600">*</span></label>
                        <input type="text"
                            class="mt-1 block bg-transparent w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>
                <label for="lastName" class="block text-base font-semibold text-[#000000]">Comments <span
                        class="text-red-600">*</span></label>
                <textarea name="" rows="5" placeholder=""
                    class="mt-1 mb-7 bg-transparent block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id=""></textarea>
                <button class="bg-red-600 text-white px-10 py-3 w-full text-center block rounded-[4px]">Send Your
                    Message</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ContactUs',
}
</script>

<style></style>