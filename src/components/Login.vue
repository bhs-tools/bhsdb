<script>
import { ref } from 'vue'

defineProps({
  username: String
})

</script>

<template>
	<p>Hello, {{ username }}</p>
	<input v-model="username">
	<button type="button">Login</button>
</template>