<script setup>
import { ref } from 'vue'
const username = ref("")

</script>

<template>
	<div>
		<span>Please login</span>
	</div>
	<input type="text" class="textbox" v-model="username" />
</template>