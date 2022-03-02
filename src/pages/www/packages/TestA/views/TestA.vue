<template>
	<p class="style1"><span class="style2">view</span>内容</p>
    <button @click="add">Clicked芜湖 {{ count }} times.</button>
</template>

<script setup>
import { ref } from "vue"
import useCount from "../hooks/useCount"
let {count, add} = useCount();

</script>

<style scoped>
.style1 {
	color: red;
}
</style>
