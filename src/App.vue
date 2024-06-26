<script setup>

import VHeader from '@/components/VHeader.vue';
import VFooter from '@/components/VFooter.vue';
import VPromo from '@/components/VPromo.vue';
import VClass from '@/components/VClass.vue';
import VHistory from '@/components/VHistory.vue';
import VPossibilities from '@/components/VPossibilities.vue';
import VIdea from '@/components/VIdea.vue';
import VReviews from '@/components/VReviews.vue';
</script>

<template>
    <v-header></v-header>
    <main>
        <v-promo></v-promo>
        <v-class></v-class>
        <v-history></v-history>
        <v-possibilities></v-possibilities>
        <v-idea></v-idea>
        <v-reviews></v-reviews>
    </main>
    <v-footer></v-footer>
</template>

<style scoped>

</style>
