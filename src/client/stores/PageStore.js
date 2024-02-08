import { defineStore } from 'pinia'
import axios from 'axios'

export const usePageStore = defineStore('PageStore', {
    state: () => ({
        page: {}
    }),
    actions: {
        async fetchPage() {
            const response = await axios.get('/api/page');
            this.page = await response.data;
        }
    }
})