import { ref } from "vue"
export default function useCount() {
    let count = ref(0);
    const add = () => {
        count.value++;
    }    
    return {
        count, add
    }
}