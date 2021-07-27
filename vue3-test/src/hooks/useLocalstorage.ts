
import { useStore } from '@/store'
export function useStorage(prefix = '') {
    const store = useStore()
    const setItem = (key: string, value: any) => {
        const rkey = prefix + '_' + key
        localStorage.setItem(rkey, JSON.stringify(value))
        store.commit('SET_ITEM', { key, value })
    }
    const getItem = (key: string) => {
        const rkey = prefix + '_' + key
        const value = localStorage.getItem(rkey)
        if (!value) return value
        return JSON.parse(value)
    }
    return {
        setItem,
        getItem
    }
}