<template>
	<p class="style1">view1内容</p>
    <button @click="inc">Clicked芜湖 {{ count.haha }} times.</button>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        let count = ref({
            haha:1
        });

        function inc() {
            count.value.haha++;
        }
        return {
            count,
            inc,
        };
    },
};
</script>

<style scoped>
.style1 {
	color: red;
}
</style>
