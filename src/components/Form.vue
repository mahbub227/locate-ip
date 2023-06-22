<script setup lang="ts">
import { useLocationStore } from '@/stores/location';
const location = useLocationStore();
</script>

<template>
    <div class="form">
        <input v-model="location.ip" />
        <button @click="console.log('clicked me!')">Search</button>
    </div>
</template>

<style scoped></style>
