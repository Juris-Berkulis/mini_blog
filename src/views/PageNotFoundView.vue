<script setup lang="ts">
</script>

<template>
<div class="pageNotFound">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <RouterLink to="/">На главную страницу</RouterLink>
</div>
</template>

<style scoped lang="scss">
.pageNotFound {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        margin-bottom: 30px;
        font-size: 4em;
        font-weight: 700;
        line-height: 1;
        text-align: center;
    }

    & p {
        margin-bottom: 30px;
        font-size: 1em;
        font-weight: 700;
        line-height: 1.15;
        text-align: center;
    }

    & a {
        display: block;
        font-size: 1em;
        font-weight: 400;
        line-height: 1;
    }
}
</style>
