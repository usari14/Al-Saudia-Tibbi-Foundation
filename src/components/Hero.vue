<template>
    <div class="slider-container">
        <!-- Slick Slider Container -->
        <div class="hero-slider">
            <div><img src="../assets//banner1.png" alt="Banner 1" class="w-full h-auto"></div>
            <div><img src="../assets//banner1.png" alt="Banner 2" class="w-full h-auto"></div>
            <div><img src="../assets//banner1.png" alt="Banner 2" class="w-full h-auto"></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'; // Import jQuery

export default {
    mounted() {
        // Initialize the Slick Slider when component is mounted
        this.$nextTick(() => {
            this.initSlick();
        });
    },
    methods: {
        initSlick() {
            $(this.$el).find('.hero-slider').slick({
                infinite: false,           // Infinite loop
                slidesToShow: 1,          // Show one slide at a time
                slidesToScroll: 1,        // Scroll one slide at a time
                dots: true,               // Show dots navigation
                arrows: false,            // Disable arrows navigation
                autoplay: true,           // Enable autoplay
                autoplaySpeed: 2000,      // Speed between slides (3 seconds)
                fade: false,               // Enable fade transition
                speed: 1000,              // Transition speed
            });
        }
    }
};
</script>

<style>
.hero-slider .slick-dots li button::before {
    content: none !important;
    /* Remove the default dot content */
}

/* Style for the custom dots */
.hero-slider .slick-dots li button {
    width: 20px;                  /* Dot size */
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
.hero-slider .slick-dots li.slick-active button {
    background-color: #707979;       /* Fill the circle with color when active */
    border-color: #333;           /* Keep border color same to avoid mismatched thickness */
    box-shadow: inset 0 0 0 1px white; /* Creates a white gap inside the filled circle, making the border appear separate */
}

/* Hover effect for dots */
.hero-slider .slick-dots li button:hover {
    background-color: rgba(51, 51, 51, 0.2); /* Light background on hover */
}

</style>
