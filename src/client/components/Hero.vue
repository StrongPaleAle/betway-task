<script setup>
import { computed, ref } from 'vue';
import { usePageStore } from '../stores/PageStore';
import HeroContent from './HeroContent.vue';

const pageStore = usePageStore();


pageStore.fetchPage();

const hero = computed(() => pageStore.page.hero);
const heroImageBg = computed(() =>`url(${hero.value?.image?.src})`);
const heroImageWidth = computed(() => hero.value?.image?.width + 'px');
const heroImageHeight = computed(() => hero.value?.image?.height + 'px');
const rowRatio = computed(() => hero.value?.image?.height / hero.value?.image?.width);
const columnRatio = computed(() => hero.value?.image?.width / hero.value?.image?.height);

</script>
<template>
    <div v-if="hero" class="hero">
        <div class="hero__bg"></div>
        <div class="hero__image">
            <AppImage class="image" :image="hero.image" />
        </div>
        <HeroContent v-if="hero" :hero="hero" />
       
    </div>
    

</template>
<style lang="scss">
.hero {
    --row-template: minmax(0, 1fr) [hero-row-start] min(calc(v-bind(rowRatio) * 100vw), 100vh) [hero-row-end] minmax(0, 1fr);
    --column-template: minmax(0, 1fr) [hero-col-start] min(calc(v-bind(columnRatio) * 100vh), 100vw) [hero-col-end] minmax(0, 1fr);
    --image-column: hero-col;
    position: relative;
    
    display: grid;
    height: 100vh;
    grid-template-rows: var(--row-template);
    grid-template-columns: var(--column-template);
    place-items: center;
    &:after{
        content: '';
        position: absolute;
        inset: -2px 0 0;
        background: rgba(0,0,0,1);
        grid-row-start: hero-row-end;
    }
    &__bg {
        position: absolute;
        inset: 0;
        z-index: -1;
        background-image: v-bind(heroImageBg);
        background-size: cover;
        background-position: center;
        filter: blur(50px);
        opacity: 0.75;
    }

    &__image{
        grid-row: hero-row;
        grid-column: var(--image-column);
        max-width: 100%;
        max-height: 100%;
        img {
            //width: auto;
            max-height: 100svh;
            object-fit: cover;
            object-position: top;
        }
    }
    @media (orientation: landscape){
        --row-template: minmax(0, 1fr) [hero-row-start] min(calc(v-bind(rowRatio) * 50vw), 100vh) [hero-row-end] minmax(0, 1fr);
        --column-template: minmax(0, 1fr) [hero-image-start] min(v-bind(heroImageWidth), 50vw) [hero-image-end hero-content-start] min(v-bind(heroImageWidth), 50vw) [hero-content-end] minmax(0, 1fr);
        --image-column: hero-image;
        &:after{
            grid-column: hero-content;
        }
        
    }
}

</style>