<script setup>
const props = defineProps({
    type: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'link'].includes(value);
    },
  
  }
});
</script>
<template>
    <button v-if="type === 'button'" class="btn">        
        <slot></slot>
    </button>
    <a v-else class="btn">
        <slot></slot>
    </a>
</template>
<style  lang="scss">

.btn {
    
    background-image: linear-gradient(var(--btn-bg-1), var( --btn-bg-2) 50%, var( --btn-bg-1));
    background-size: 100% 200%;
    background-position: 0 0;
    color: white;
    font-size: 0.75rem;
    text-decoration: none;
    display: inline-block;
    padding: 0.8em 2.125em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
    transition: background-position 0.3s;
    @media (min-width: 640px) {
        font-size: 1.125rem;
    }
    &:hover {
        background-position: 0 100%;
    }
    &--large {
        font-size: clamp(1rem, 0.1rem + 4vw, 2.125rem);
        
        padding: 1em 3.5em;
        @media (orientation: landscape) {
            font-size: clamp(1.125rem, 0.1rem + 2.25svh, 2.125rem);
        }
        @media (min-width: 750px){
            font-size: clamp(1.125rem, 0.1rem + 2.25svh, 2.125rem);
        }
        
    }
}
</style>