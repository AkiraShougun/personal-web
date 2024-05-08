<template>
  <main class="mx-2 my-5 md:grid-cols-2 lg:mx-60 grid lg:grid-cols-2">
    <RouterLink
      :to="`/blog/` + blog.slug"
      v-for="(blog, index) in myJson"
      :key="index"
      class="border rounded-md border-gray-500 bg-slate-800 hover:bg-gray-700 p-5"
    >
      <h1>
        <strong>{{ blog.title }}</strong>
      </h1>
      <p>Date: {{ blog.date }}</p>
    </RouterLink>
  </main>
</template>

<script>
import json from '../meta.json'
export default {
  data() {
    return {
      myJson: json
    }
  }
}
</script>
