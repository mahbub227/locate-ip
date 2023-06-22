<script setup lang="ts">
import TitleSubtitle from './components/TitleSubtitle.vue';
import Form from './components/Form.vue';
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo sm:h-36 sm:w-36" src="./assets/logo.png" width="75" height="75" />

        <div class="wrapper">
            <TitleSubtitle title="Locate IP!" subtitle="Get the location of any ip!" />
        </div>
    </header>

    <main>
        <Form />
    </main>
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
