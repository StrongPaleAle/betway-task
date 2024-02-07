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

    <div v-if="hero" class="hero">
        <h1 class="sr-only">{{ hero.title }}</h1>
        <AppImage v-if="hero?.image" :image="hero.image" />
        <div class="hero__content">
            <p>
                <span>{{ hero.content.amount }}</span>
                {{ hero.content.label }}
                
            </p>
            <AppButton class="btn btn--large" v-if="hero.content.buttonText" :label="hero.content.buttonText" />
        </div>
    </div>
    

</template>
<style scoped lang="scss">
.hero {
    position: relative;
    &__content{
        position: absolute;
        inset: auto 0 0 0;
        color: white;
        text-align: center;
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
        padding-bottom: 78px;
        p {
            font-weight: 700;
            font-size: 4.5rem;
            margin-bottom: 0.4em;
            span {
                display: block;
                font-size: 8rem;
            }
        }
    }
}

</style>