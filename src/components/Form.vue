<script setup lang="ts">
import { getHostInfo } from '@/services/getHostInfo';
import { useLocationStore } from '@/stores/location';
import { useIpStore } from '@/stores/ip';
import { toast } from 'vue3-toastify';
import { ref } from 'vue';
const location = useLocationStore();

const ip = useIpStore();
var isLoadingAPI = ref(false);

const getLonLatInfo = async () => {
    isLoadingAPI.value = true;
    try {
        const response = await toast.promise(getHostInfo(ip.address), {
            pending: 'Fetching data from Shodan',
            success: 'Successfully fetched data fron Shodan',
            error: 'Unable to fetch data from Shodan',
        });
        const { latitude, longitude, city, region_code, country_name, country_code } = response;
        location.setLocation({ latitude, longitude, city, region_code, country_name, country_code });
        isLoadingAPI.value = false;
    } catch (error) {
        toast.error(String(error));
        location.resetLocation();
        isLoadingAPI.value = false;
    }
};
</script>

<template>
    <div class="flex flex-col justify-center">
        <input
            v-model="ip.address"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-teal-400"
        />
        <button
            @click="getLonLatInfo"
            class="my-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-300 disabled:pointer-events-none"
            type="button"
            :disabled="isLoadingAPI || !ip.isValid"
            >Search</button
        >
    </div>
</template>

<style scoped></style>
