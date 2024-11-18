<template>
    <div class="bg-white">
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10 px-10">
            <div class="flex items-start space-x-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-[#4FCC60] rounded-full">
                    <img src="../assets/ship.png" alt="">
                </div>
                <div>
                    <strong class="text-[24px] font-medium block">Fast Shipping</strong>
                    <p class="text-lg">At minimum cost</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-[#54D6CE] rounded-full">
                    <img src="../assets/flower.png" alt="">
                </div>
                <div>
                    <strong class="text-[24px] font-medium block">Certified Organic</strong>
                    <p class="text-lg">100% Guarantee</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-[#5468BF] rounded-full">
                    <img src="../assets/best.png" alt="">
                </div>
                <div>
                    <strong class="text-[24px] font-medium block">Best Quality</strong>
                    <p class="text-lg">At lowest price</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-[#E9910F] rounded-full">
                    <img src="../assets/1000+.png" alt="">
                </div>
                <div>
                    <strong class="text-[24px] font-medium block">1000+</strong>
                    <p class="text-lg">Happy customers</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features',
}
</script>

<style scoped>
/* No custom styles needed, as we're using Tailwind utilities */
</style>
