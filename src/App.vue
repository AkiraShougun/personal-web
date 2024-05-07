<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavigationView.vue'
import Footer from './components/FooterView.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
