<script setup lang="ts">
import { getHostInfo } from '@/services/getHostInfo';
import { useLocationStore } from '@/stores/location';
const location = useLocationStore();

const searchHostInfo = async () => {
    try {
        const response = await getHostInfo('8.8.8.8');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <div class="form">
        <input
            v-model="location.ip"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
            @click="searchHostInfo"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            >Search</button
        >
    </div>
</template>

<style scoped></style>
