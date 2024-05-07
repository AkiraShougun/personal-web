<script>
import axios from 'axios'

export default {
  data() {
    return {
      repos: null
    }
  },
  async created() {
    try {
      const response = await axios.get('https://api.github.com/users/AkiraShougun/repos')
      this.repos = response.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<template>
  <main class="mx-52 mt-10">
    <h1><strong>About me</strong></h1>
    <p>I love software engi</p>
    <h1><strong>Tech Stack</strong></h1>
    <div>
      <h2>Languages</h2>
      <div class="flex">
        <img src="../assets/react.svg" />
        <img src="../assets/vue.svg" />
        <img src="../assets/tailwindcss.svg" />
      </div>
    </div>
    <ul v-if="repos">
      <li v-for="repo in repos" :key="repo.id">
        {{ repo.name }}
      </li>
    </ul>
  </main>
</template>
