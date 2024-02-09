<script setup>
const props = defineProps({
    hero: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="hero__content">
        <div class="hero__content__inner">
           
            <h1 class="sr-only">{{ hero.title }}</h1>
            <p>
                <span>{{ hero.content.amount }}</span>
                {{ hero.content.label }}
                
            </p>
            <AppButton class="btn--large" v-if="hero.content.buttonText" type="button">
                {{ hero.content.buttonText }}
            </AppButton>
        </div>

    </div>
</template>
<style lang="scss">
    .hero__content{
        position: absolute;
        inset: auto 0 0 0;
        min-height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        text-align: center;
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 98%);
        padding-block: clamp(2rem, 1em, 5rem);

        font-size: clamp(2.25rem, 0.1rem + 5.75vw, 4.75rem);
        grid-row-end: hero-row-end;

        p {
            font-weight: 700;
            font-size: inherit;
            line-height: 1.25;
            margin-block: clamp(1rem, 0.1em, 4.75rem);

            span {
                display: block;
                line-height: 1;
                font-size: 1.85em;
            }
        }
        @media (orientation: landscape){
            position: relative;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,1);
            
            grid-column: hero-content;
            font-size: clamp(2.25rem, 0.1rem + 5.75svh, 4.75rem);
            &:before, &:after{
                content: '';
                position: absolute;
                width: 10%;
                grid-column: hero-content;
            }
            &:before{
                inset: 0 auto 0 -10%;
                background-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
            }
            &:after{
                inset: 0 -10% 0 auto;
                background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
            }
        }
        @media (min-width: 750px) {
            font-size: clamp(2.25rem, 0.1rem + 5.75svh, 4.75rem);
        }
    }
</style>