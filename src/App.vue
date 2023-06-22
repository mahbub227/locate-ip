<script setup lang="ts">
import TitleSubtitle from './components/TitleSubtitle.vue';
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.png" width="150" height="150" />

        <div class="wrapper">
            <TitleSubtitle title="Locate IP!" subtitle="Get the location of any ip!" />
        </div>
    </header>

    <main> </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
