<script setup>
const props = defineProps({
  label: String,
});
</script>
<template>
    <button class="btn">
        {{ label }}
    </button>
</template>
<style  lang="scss">

.btn {
    --btn-bg-1: #ff8a00;
    --btn-bg-2: #e52e71;
    background-image: linear-gradient(var(--btn-bg-1), var( --btn-bg-2) 50%, var( --btn-bg-1));
    background-size: 100% 200%;
    background-position: 0 0;
    color: blue;
    font-size: 1.125rem;
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
    transition: background-position 0.3s;
    &:hover {
        background-position: 0 100%;
    }
    &--large {
        font-size: clamp(1.125rem, 0.1rem + 2.25vw, 2.125rem);
        padding: 1em 3.5em;
        @media (min-width: 750px){
            font-size: clamp(1.125rem, 0.1rem + 2.25svh, 2.125rem);
        }
        
    }
}
</style>