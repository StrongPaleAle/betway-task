<script setup>
import { usePageStore } from '../stores/PageStore';

const pageStore = usePageStore();
pageStore.fetchPage();

</script>
<template>
    {{ pageStore.page }}
</template>