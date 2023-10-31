<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from "./components/homepage.vue"
import Section from "./components/section.vue"
import Footer from "./components/footer.vue"
import Header from "./components/header.vue"
</script>

<template>
	<Header></Header>
	<HomePage></HomePage>
	<Section></Section>
	<Footer></Footer>
	
</template>
