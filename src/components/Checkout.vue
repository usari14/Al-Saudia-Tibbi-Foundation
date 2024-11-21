<template>
    <div class="container mx-auto py-0 md:py-24 px-4">
        <h1 class="text-6xl font-medium leading-[72px] text-[#000000] mb-5">Checkout</h1>
        <p class="flex bg-white py-4 px-8 border-t-2 border-red-600 text-lg mb-12"><img src="../assets/box.png"
                class="object-contain mr-3" alt="">Returning Customer?<a href=""> <span class="text-red-600 ml-1">click
                    here to
                    login.</span> </a></p>

        <div class="flex flex-wrap lg:flex-row flex-col">
            <div class="w-full lg:w-8/12 mb-4  md:text-left pr-0 lg:pr-10">
                <h2 class="text-[40px] leading-[48px] font-medium text-[#000000] border-b border-[#616161] py-5 mb-10">
                    Billing
                    Details</h2>
                <form action="" class="space-y-4">
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="firstName" class="block text-base font-semibold text-[#000000]">First Name <span
                                    class="text-red-600">*</span></label>
                            <input type="text" id="firstName" name="firstName"
                                class="mt-1 block bg-transparent w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="flex-1">
                            <label for="lastName" class="block text-base font-semibold text-[#000000]">Last Name <span
                                    class="text-red-600">*</span></label>
                            <input type="text" id="lastName" name="lastName"
                                class="mt-1 block bg-transparent w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                    </div>
                    <div>
                        <label for="" class="block text-base font-semibold text-[#000000]">Company
                            name (optional)</label>
                        <input type="text"
                            class="mt-1 block w-full bg-transparent h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Country / Region <span class="text-red-600">*</span></p>
                        <p class="text-lg font-semibold">Pakistan</p>
                    </div>
                    <div>
                        <label for="" class="block text-base font-semibold text-[#000000]">Street Address <span
                                class="text-red-600">*</span></label>
                        <input type="text" placeholder="House number and Street Name"
                            class="mt-1 mb-3 block w-full bg-transparent h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"
                            class="mt-1 block w-full bg-transparent h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div>
                        <label for="" class="block text-base font-semibold text-[#000000]">Town / City <span
                                class="text-red-600">*</span></label>
                        <input type="text" placeholder=""
                            class="mt-1 mb-3 block bg-transparent w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div>
                        <label for="country" class="block text-base font-semibold text-[#000000]">State / County <span
                                class="text-red-600">*</span></label>
                        <select id="country" name="country"
                            class="mt-1 block w-full bg-transparent h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="usa">Punjab</option>
                            <option value="canada">Canada</option>
                            <option value="uk">UK</option>
                            <option value="australia">Australia</option>
                        </select>
                    </div>
                    <div>
                        <label for="" class="block text-base font-semibold text-[#000000]">Postcode / ZIP <span
                                class="text-red-600">*</span></label>
                        <input type="text" placeholder=""
                            class="mt-1 mb-3 bg-transparent block w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div>
                        <label for="" class="block text-base font-semibold text-[#000000]">Phone <span
                                class="text-red-600">*</span></label>
                        <input type="text" placeholder=""
                            class="mt-1 mb-3 bg-transparent block w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div>
                        <label for="" class="block text-base font-semibold text-[#000000]">Email Address <span
                                class="text-red-600">*</span></label>
                        <input type="email" placeholder=""
                            class="mt-1 mb-3 bg-transparent block w-full h-[50px] px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div>
                        <label for="subscribe" class="inline-flex items-center space-x-2 mb-3">
                            <input type="checkbox" id="subscribe" name="subscribe"
                                class="h-[14px] w-[14px] text-red-600 outline-none  border-gray-600 rounded bg-transparent">
                            <span class="text-lg text-[#000000] font-semibold">Create an account?</span>
                        </label>
                    </div>
                    <div>
                        <label for="subscribe" class="inline-flex items-center space-x-2">
                            <input type="checkbox" id="subscribe" name="subscribe"
                                class="h-[14px] w-[14px] text-red-600 border-gray-600 rounded bg-transparent">
                            <span class="text-[24px] text-[#000000] font-semibold">Ship to a different address?</span>
                        </label>
                    </div>
                    <hr class="border- border-[#616161] mb-4">
                    <p class="block text-base font-semibold text-[#000000]">Order notes (optional)</p>
                    <textarea name="" rows="4" placeholder="Notes about your order, e.g, special otes for delivery."
                        class="mt-1 mb-3 bg-transparent block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id=""></textarea>
                </form>
            </div>
            <div class="w-full lg:w-4/12 mb-4 text-center md:text-left px-4 lg:px-5 mt-10 lg:mt-0">
                <div class="w-full lg:max-w-[428px] h-auto bg-white border border-[#A7AAAB]">
                    <p
                        class="bg-[#F5F5F5] w-full text-left py-6 pl-7 leading-10 text-[40px] font-medium border-b border-[#A7AAAB]">
                        Cart Total</p>
                    <div class="px-8 py-10">
                        <div class="flex justify-between mb-4">
                            <p class="text-lg">Products</p>
                            <span class="text-lg">Subtotal</span>
                        </div>
                        <hr class="border- border-[#616161] mb-4">
                        <div class="flex justify-between mb-4">
                            <div class="inline-flex items-center space-x-2">
                                <p class="text-lg m-0">Majoon Shahi <br> مجون شاہی</p>
                                <span class="mb-7 ml-4">X 1</span>
                            </div>


                            <span class="text-lg">Rs 3000</span>
                        </div>
                        <hr class="border- border-[#616161] mb-4">
                        <div class="flex justify-between mb-4">
                            <p class="text-lg">Subtotal</p>
                            <span class="text-lg">Rs 3000</span>
                        </div>
                        <hr class="border- border-[#616161] mb-4">
                        <div class="flex justify-between mb-4">
                            <p class="text-lg">Shipping</p>
                            <span class="text-lg text-left">Flat rate: <br>
                                <strong>Rs 300</strong></span>
                        </div>
                        <hr class="border- border-[#616161] mb-4">
                        <div class="flex items-center mb-5">
                            <input id="country-option-1" type="radio" name="countries" value="USA"
                                class="w-4 h-4 border-2 border-gray-300 rounded-full appearance-none checked:border-blue-500 checked:bg-blue-500 transition">
                            <label for="country-option-1" class="block ms-2 text-sm font-medium">
                                Cash on Delivery
                            </label>
                        </div>
                        <p class="relative bg-[#EFEFEF] py-2 px-4 inline-block mb-5 
                                    before:content-[''] before:absolute before:top-[-25px] before:left-[40px] 
                                    before:-translate-x-1/2 before:border-[12px] before:border-transparent 
                                    before:border-b-[#EFEFEF]">
                            Pay with cash upon delivery.
                        </p>
                        <div class="flex items-center mb-5">
                            <input id="country-option-1" type="radio" name="countries" value="USA"
                                class="w-4 h-4 border-2 border-gray-300 rounded-full appearance-none checked:border-blue-500 checked:bg-blue-500 transition">
                            <label for="country-option-1" class="block ms-2 text-sm font-medium">
                                Direct Bank Transfer
                            </label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="country-option-1" type="radio" name="countries" value="USA"
                                class="w-4 h-4 border-2 border-gray-300 rounded-full appearance-none checked:border-blue-500 checked:bg-blue-500 transition">
                            <label for="country-option-1" class="block ms-2 text-sm font-medium">
                                JazzCash
                            </label>
                        </div>
                        <img src="../assets/jazzcash.png" class="mb-6" alt="">
                        <p class="text-lg mb-5">Your personal data will be used to process
                            your order, support your experience
                            throughout this website, and for other
                            purposes described in our <span class="text-red-600">privacy policy.</span></p>
                        <router-link to="/checkout"
                            class="bg-red-600 text-white px-10 py-3 w-full text-center block rounded-[4px]">Proceed to
                            Checkout</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Checkout',
}
</script>

<style scoped></style>