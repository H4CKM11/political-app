<template>
    <div class="p-6">
        <svg class="absolute bottom-0 left-10 w-24 h-24 opacity-60" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#FDE68A" />
        </svg>



        <svg class="absolute top-15 right-0 opacity-60" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="-400 -25 800 600">
            <path
                d="M141.25559997558594,134.52914428710938C160.53811391194662,138.5650202433268,221.0762456258138,163.8266118367513,256.95068359375,158.74440002441406C292.8251215616862,153.6621882120768,326.15843200683594,103.88639831542969,356.5022277832031,104.03587341308594C386.8460235595703,104.18534851074219,412.7055308024089,158.29595947265625,439.0134582519531,159.64125061035156C465.3213857014974,160.98654174804688,501.7937367757161,120.02989196777344,514.3497924804688,112.10762023925781"
                fill="none" stroke-width="25" stroke="#b689b5" stroke-linecap="round"
                transform="matrix(1.5435812706999734,0,0,1.5435812706999734,-178.18740200731236,-71.67368632432866)">
            </path>
            <defs>
                <linearGradient id="SvgjsLinearGradient1002">
                    <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                    <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                </linearGradient>
            </defs>
        </svg>

        <h1>Study</h1>

        <h3 class="mt-8">Categories</h3>
        <div class="flex flex-col gap-3">
            <a href="/national-goverment/">
                <div class="flex gap-3 flex-col">
                    <Image_card src="/images/legislative_building.webp" />
                    <h2>National Goverment</h2>
                    <p>Learn how the national government is set up and how it makes decisions that affect the whole
                        country.
                    </p>
                    <v-chip>
                        Beginner Friendly
                    </v-chip>
                </div>
            </a>
            <div class="flex gap-3 flex-col">
                <Image_card src="/images/state_picture.webp" />
                <h2>State Goverment</h2>
                <p>Discover how state governments are organized and how they make decisions that impact your community.
                </p>
                <v-chip>
                    Beginner Friendly
                </v-chip>
            </div>
        </div>
    </div>
    <Footer />
</template>


<script setup lang="ts">
import Image_card from '../components/image_cards.vue'
import Footer from '../components/footer.vue'

</script>
