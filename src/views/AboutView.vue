<script setup>
import Stacker from '../components/TechStack.vue'
</script>
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
    <h1 class="my-5"><strong>Tech Stack</strong></h1>
    <Stacker title="Frontend">
      <a href="https://react.dev/">
        <img class="size-14" src="../assets/react.svg" alt="react"
      /></a>
      <a href="https://vuejs.org/">
        <img class="size-14" src="../assets/vue.svg" alt="vue" />
      </a>
      <a href="https://tailwindcss.com/">
        <img class="size-14" src="../assets/tailwindcss.svg" alt="tailwind" />
      </a>
      <a href="https://nextjs.org/">
        <img class="size-14" src="../assets/nextjs.svg" alt="nextjs" />
      </a>
    </Stacker>
    <Stacker title="Backend">
      <a href="https://nodejs.org/en">
        <img class="size-14" src="../assets/node.svg" alt="node" />
      </a>
      <a href="https://www.postman.com/">
        <img class="size-14" src="../assets/postman.svg" alt="postman" />
      </a>
      <a href="https://expressjs.com/">
        <img class="size-14" src="../assets/express.svg" alt="express" />
      </a>
    </Stacker>
    <Stacker title="Languages">
      <a href="https://www.typescriptlang.org/">
        <img class="size-14" src="../assets/typescript.svg" alt="typescript" />
      </a>
      <a href="https://www.python.org/">
        <img class="size-14" src="../assets/python.svg" alt="python" />
      </a>
      <a href="https://julialang.org/">
        <img class="size-14" src="../assets/julia.svg" alt="julia" />
      </a>
      <a href="https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html">
        <img class="size-14" src="../assets/clang.svg" alt="clang" />
      </a>
    </Stacker>
    <Stacker title="Databases">
      <a href="https://www.mongodb.com/">
        <img class="size-14" src="../assets/mongodb.svg" alt="mongodb" />
      </a>
      <a href="https://www.mysql.com/">
        <img class="size-14" src="../assets/mysql.svg" alt="mysql" />
      </a>
      <a href="https://www.postgresql.org/">
        <img class="size-14" src="../assets/postgres.svg" alt="postgres" />
      </a>
    </Stacker>
    <section class="grid grid-cols-2 gap-10 my-5">
      <a
        v-for="repo in repos"
        :key="repo.id"
        :href="repo.html_url"
        class="border grid grid-cols-2 gap-2 bg-slate-800"
      >
        <img :src="repo.owner.avatar_url" alt="avatar" />
        {{ repo.owner.login }}
        {{ repo.name }}
      </a>
    </section>
  </main>
</template>
