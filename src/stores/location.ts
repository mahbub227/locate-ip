import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', {
    state: () => ({
        ip: '',
        location: '',
    }),
    actions: {
        setIp(value: string) {
            this.ip = value;
        },
        setLocation(value: string) {
            this.location = value;
        },
    },
});
