<script setup>
import { computed } from 'vue';
import { usePageStore } from '../stores/PageStore';
import AppImage from './AppImage.vue';
import AppButton from './AppButton.vue';

const pageStore = usePageStore();


pageStore.fetchPage();

const hero = computed(() => pageStore.page.hero);

</script>
<template>

    <div v-if="hero" class="hero" :style="`--row-ratio: ${hero.image.height / hero.image.width}; --column-ratio: ${hero.image.width / hero.image.height}`">
        <div class="hero__image">
            <AppImage class="image" :image="hero.image" />
        </div>
        
        <div class="hero__content">
            <h1 class="sr-only">{{ hero.title }}</h1>
            <p>
                <span>{{ hero.content.amount }}</span>
                {{ hero.content.label }}
                
            </p>
            <AppButton class="btn btn--large" v-if="hero.content.buttonText" :label="hero.content.buttonText" />
        </div>
    </div>
    

</template>
<style lang="scss">
.hero {
    position: relative;
    opacity: 0.5;
    display: grid;
    height: 100vh;
    grid-template-rows: minmax(0, 1fr)[hero-row-start] min(calc(var(--row-ratio) * 100vw), 100vh)[hero-row-end] minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr)[hero-col-start] min(calc(var(--column-ratio) * 100vh), 100vw)[hero-col-end] minmax(0, 1fr);
    place-items: center;
    &__content{
        position: absolute;
        inset: auto 0 0 0;
        
        color: red;
        text-align: center;
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
        padding-bottom: 1em;
        font-size: clamp(2.25rem, 0.1rem + 5.75vw, 4.75rem);
        grid-row-end: hero-row-end;
        p {
            font-weight: 700;
            font-size: inherit;
            line-height: 1.25;
            margin-bottom: 0.1em;
            span {
                display: block;
                line-height: 1;
                font-size: 1.85em;
            }
        }
        @media (min-width: 750px) {
            font-size: clamp(2.25rem, 0.1rem + 5.75svh, 4.75rem);
        }
    }
    &__image{
        grid-row: hero-row;
        grid-column: hero-col;
        max-width: 100%;
        max-height: 100%;
        img {
            width: auto;
            max-height: 100svh;
        }
    }
}

</style>