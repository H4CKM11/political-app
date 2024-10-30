<template>
    <div class="w-full h-[90px] mt-4 ">
        <v-img class="align-end rounded-lg" :src="src" cover>

    </v-img>
    </div>
  </template>
<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
    src: string;
}

const props = defineProps<Props>();

</script>
