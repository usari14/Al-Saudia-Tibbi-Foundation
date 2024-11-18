<template>
    <div class="md:py-20 py-10">
        <!-- Header Section -->
        <span class="text-black text-lg font-medium text-center block">
            Satisfied Customers
        </span>
        <h2 class="text-6xl font-medium leading-snug text-center my-4">
            Testimonials
        </h2>

        <!-- Carousel Section -->
        <div class="carousel-container center mx-auto">
            <div v-for="(product, index) in FeatureProducts" :key="index" class="carousel-item px-6 text-center pt-10">

                <div class="stars flex justify-center gap-1 mb-5">
                    <span v-for="n in 5" :key="n"
                        :class="{ 'text-yellow-400': n <= product.rating, 'text-gray-300': n > product.rating }"
                        class="text-xl">
                        &#9733;
                    </span>
                </div>
                <div class="relative">
                    <p class="text-[#000000] font-medium mb-5">{{ product.desc }}</p>
                    <img src="../assets//smallcomm.png" class="smcm absolute -top-4 -left-10 w-[58px] h-[45px] " alt="">
                </div>
                <h3 class="text-2xl font-medium text-[#000000] mb-2">
                    {{ product.name }}
                </h3>
                <p class="text-sm text-[#000000]">{{ product.sub }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

export default {
    name: 'Testimonials',
    data() {
        return {
            FeatureProducts: [
                {
                    rating: 5,
                    name: 'Shafeeq Ahmed',
                    desc: 'Al-saudia Tibbi Foundation, is one of the largest natural  products manufacturers in Pakistan. It is a modern and progressive  facility that manufactures and markets leading brands that have become  household names.',
                    sub: 'Happy customer',
                },
                {
                    rating: 2,
                    name: 'Ahmed Ali',
                    desc: 'Al-saudia Tibbi Foundation, is one of the largest natural  products manufacturers in Pakistan. It is a modern and progressive  facility that manufactures and markets leading brands that have become  household names.',
                    sub: 'Satisfied client',
                },
                {
                    rating: 4,
                    name: 'Zainab Khan',
                    desc: 'Al-saudia Tibbi Foundation, is one of the largest natural  products manufacturers in Pakistan. It is a modern and progressive  facility that manufactures and markets leading brands that have become  household names.',
                    sub: 'Delighted customer',
                },
                {
                    rating: 2,
                    name: 'Zainab Khan',
                    desc: 'Al-saudia Tibbi Foundation, is one of the largest natural  products manufacturers in Pakistan. It is a modern and progressive  facility that manufactures and markets leading brands that have become  household names.',
                    sub: 'Delighted customer',
                },
                {
                    rating: 3,
                    name: 'Zainab Khan',
                    desc: 'Al-saudia Tibbi Foundation, is one of the largest natural  products manufacturers in Pakistan. It is a modern and progressive  facility that manufactures and markets leading brands that have become  household names.',
                    sub: 'Delighted customer',
                },
            ],
        };
    },
    mounted() {
        // Initialize Slick Carousel
        $('.center').slick({
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1,
                    },
                },
            ],
        });
    },
};
</script>

<style>
.center .slick-slide.slick-current.slick-active.slick-center {
    opacity: 1;
    background-image: url('../assets/comms.png');
    background-size: cover;
    background-position: center;
}

.center .slick-slide.slick-active {
    opacity: 0.5;
    height: 370px;
}

.center .slick-dots li button::before {
    content: none !important;
}

.center .slick-dots {
    max-width: 700px;
    height: 2px;
    background-color: #F4E8C2;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 50px;
}

.center .slick-dots li {
    flex: 1;
    position: relative;
}

.center .slick-dots li button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
}

.center .slick-dots li.slick-active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #F7BE10;
}
@media (max-width: 1024px) {
    .center .carousel-item img  {
        display: none !important;
    }
}
</style>