import { regExForIp } from '@/config/constants';
import type { ipInterface } from '@/interface/common';
import { defineStore } from 'pinia';

export const useIpStore = defineStore('ip', {
    state: () =>
        ({
            address: '',
        } as ipInterface),
    actions: {
        setIp(value: string) {
            this.address = value;
        },
    },
    getters: {
        isValid: state => {
            return state.address.match(regExForIp);
        },
    },
});
