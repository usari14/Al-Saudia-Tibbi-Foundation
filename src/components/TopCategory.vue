<template>
    <div class="container py-10 md:py-20">
        <h2 class="text-6xl font-medium text-center pb-10">Top Categories</h2>
        <div class="slider-container">
            <!-- Updated class name to 'category-slider' -->
            <div class="category-slider">
                <!-- Add images for each slide -->
                <div>
                    <img src="../assets/malecateg.png" alt="Image 1" class="w-full h-auto">
                    <h3 class="text-[26px] font-medium my-2 text-center">Male</h3>
                </div>
                <div><img src="../assets/femalecateg.png" alt="Image 2" class="w-full h-auto"><h3  class="text-[26px] font-medium my-2 text-center">Female</h3></div>
                <div><img src="../assets/kidcat.png" alt="Image 3" class="w-full h-auto"><h3  class="text-[26px] font-medium my-2 text-center">Kids Health</h3></div>
                <div><img src="../assets/skincateg.png" alt="Image 4" class="w-full h-auto"><h3  class="text-[26px] font-medium my-2 text-center">Skin Care</h3></div>
                <div><img src="../assets/skincateg.png" alt="Image 4" class="w-full h-auto"><h3  class="text-[26px] font-medium my-2 text-center">Male</h3></div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import 'slick-carousel';

export default {
    name: 'TopCategory',
    mounted() {
        this.$nextTick(() => {
            this.initSlick();
        });
    },
    methods: {
        initSlick() {
            $(this.$el).find('.category-slider').slick({
                infinite: false,           // Infinite loop
                slidesToShow: 4,           // Show four slides at a time
                slidesToScroll: 1,         // Scroll one slide at a time
                dots: true,                // Show navigation dots
                arrows: false,              // Enable arrows for navigation
                autoplay: false,           // Disable autoplay for better control
                speed: 500,                // Transition speed
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,  // 3 slides on tablets
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,  // 2 slides on mobile
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,  // 1 slide on very small screens
                        }
                    }
                ]
            });
        }

    }
};
</script>

<style>
/* Make sure the slider takes full width */
.category-slider {
    display: block;
    width: 100%;
    margin: 0 auto;
}

.category-slider div {
    flex: 1 0 25%; /* Forces each slide to be 25% of the container width */
    padding: 6px; /* Removes padding */
    box-sizing: border-box;
}

.category-slider img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
/* Remove default dot content and reset styles */
.category-slider .slick-dots li button::before {
    content: none !important;
    /* Remove the default dot content */
}

/* Style for the custom dots */
.category-slider .slick-dots li button {
    width: 20px;   
    position: absolute;
    bottom: -2px;               /* Dot size */
    height: 20px;                 /* Dot size */
    background-color: transparent; /* Hollow circle by default */
    border-radius: 50%;           /* Make it a circle */
    border: 1px solid #333;       /* Border to create the hollow effect */
    margin: 0 8px;                /* Space between dots */
    padding: 0;                   /* Remove padding to keep button size fixed */
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: background-color 0.3s, transform 0.3s;
    box-sizing: border-box;       /* Ensures the padding and border are included in the element's dimensions */
}

/* Active dot - filled circle with space from the border */
.category-slider .slick-dots li.slick-active button {
    background-color: #707979;       /* Fill the circle with color when active */
    border-color: #333;           /* Keep border color same to avoid mismatched thickness */
    box-shadow: inset 0 0 0 1px white; /* Creates a white gap inside the filled circle, making the border appear separate */
}

/* Hover effect for dots */
.category-slider .slick-dots li button:hover {
    background-color: rgba(51, 51, 51, 0.2); /* Light background on hover */
}


</style>
