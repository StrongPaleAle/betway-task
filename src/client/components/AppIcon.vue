<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'link', 'icon'].includes(value);
    },
  
  },
  label: String,
});
</script>
<template>
    <button v-if="type === 'button'" class="icon">
        <span class="sr-only">{{ label }}</span>        
        <slot></slot>
    </button>
    <a v-else-if="type === 'link'" class="icon">
        <span class="sr-only">{{ label }}</span>  
        <slot></slot>
    </a>
    <span v-else class="icon">
        <span class="sr-only">{{ label }}</span>  
        <slot></slot>
    </span>
</template>
<style  lang="scss">
.icon{
    --size: 18px;
    width: var(--size);
    height: var(--size);
    line-height: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 640px) {
        --size: 24px;
    }
    @media (min-height: 1000px) {
        --size: 36px;
    }

}
</style>