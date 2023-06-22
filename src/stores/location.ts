import type { locationInterface } from '@/interface/common';
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', {
    state: () =>
        ({
            latitude: null,
            longitude: null,
            city: '',
            region_code: '',
            country_name: '',
        } as locationInterface),
    actions: {
        setLocation(data: locationInterface) {
            const { latitude, longitude, city, region_code, country_name } = data;
            this.latitude = latitude;
            this.longitude = longitude;
            this.city = city;
            this.region_code = region_code;
            this.country_name = country_name;
        },
        resetLocation() {
            this.latitude = null;
            this.longitude = null;
            this.city = '';
            this.region_code = '';
            this.country_name = '';
        },
    },
    getters: {
        isValid: state => {
            return !!(state.latitude && state.longitude);
        },
    },
});
