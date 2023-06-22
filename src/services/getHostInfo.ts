import axios from 'axios';

export const getHostInfo = async (ip: string) => {
    console.log('clicked');
    const { VITE_SODAN_URL, VITE_SODAN_API_KEY } = import.meta.env;
    console.log(VITE_SODAN_URL, VITE_SODAN_API_KEY);
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const url = `${VITE_SODAN_URL}${ip}?key=${VITE_SODAN_API_KEY}`;
        const { data, status } = await axios.get(url, { headers });
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.message;
        } else {
            throw error;
        }
    }
};
