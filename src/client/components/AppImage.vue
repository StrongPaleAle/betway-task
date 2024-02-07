<script setup>
const props = defineProps({
  image: Object
});
</script>
<template>
    <picture>
        <source 
            v-if="image.sources"
            v-for="source in image.sources" 
            :srcset="source.srcSet" 
            :type="source.type" 
            :media="source.media || null"
            :width="source.width || image.width"
            :height="source.height || image.height"
            />
        <img 
            :src="image.src" 
            :alt="image.alt" 
            :width="image.width"
            :height="image.height"/>
    </picture>
</template>