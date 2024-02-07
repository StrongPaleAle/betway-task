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
<style scoped lang="scss">
.btn {
    background-image: linear-gradient(var(--purple-light), var(--purple-dark) 50%, var(--purple-light));
    background-size: 100% 200%;
    background-position: 0 0;
    color: white;
    font-size: 1.125rem;
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    transition: background-position 0.3s;
    &:hover {
        background-position: 0 100%;
    }
    &--large {
        font-size: 2.125rem;
        padding: 1em 3em;
    }
}
</style>