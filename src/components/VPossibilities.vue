<script setup>

import Swiper from 'swiper';
import { onMounted } from 'vue';
import {Pagination} from "swiper/modules";

onMounted(() => {
    const swiper = new Swiper(".swiper",{
        modules:[Pagination],
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
    });
})

const possibilities = [
    {
        class : 'possibilities__card1',
        text : 'Общение с классом',
        description : 'Видеосвязь <br> Чат с классом',
        src : '/p1.svg'
    },
    {
        class : 'possibilities__card2',
        text : 'Проведение занятий',
        description : 'Презентация файлов <br> Демонстрация экрана',
        src : '/p2.svg'
    },
    {
        class : 'possibilities__card3',
        text : 'Посещаемость',
        description : 'Автоматическое <br> отслеживание <br> присутствующих',
        src : '/p3.svg',
    },
    {
        class : 'possibilities__card4',
        text : 'История занятий',
        description : 'Материалы урока',
        src : '/p4.svg',
    }
]

</script>

<template>
        <section class="possibilities">
            <div class="container">
                <div class="possibilities1">
                    <h2>
                        Возможности
                    </h2>
                    <div class="row">
                        <div class="col-3" 
                            v-for="(item,index) in possibilities"
                            :key="index"
                            >

                            <div :class="item.class">
                                <img :src="item.src" alt="">
                                <div class="possibilities__card-item">
                                    {{ item.text }}
                                </div>
                                <p v-html="item.description"> 
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="possibilitites2">
                    <h2>
                        Возможности
                    </h2>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" 
                            v-for="(i,key) in possibilities" 
                            :key="key">
                                <div :class="'image-slider__card' + key">
                                    <img :src="i.src" alt="">
                                    <div class="image-slider__card-text">
                                        {{ i.text }}
                                    </div>
                                    <p class="image-slider__card-p" v-html="i.description">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>

</style>