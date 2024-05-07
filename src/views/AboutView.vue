<script setup>
import Stacker from '../components/TechStack.vue'
</script>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      repos: null,
      colors: null
    }
  },
  computed: {
    filteredRepos() {
      if (!this.repos) return []
      return this.repos.filter((repo) => repo.language)
    }
  },
  async created() {
    try {
      const response = await axios.get('https://api.github.com/users/AkiraShougun/repos')
      const color = await axios.get(
        'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      )
      this.repos = response.data
      this.colors = color.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<template>
  <main class="mx-2 lg:mx-52 lg:mt-10">
    <h1><strong>About me</strong></h1>
    <p>
      My passion for software engineering began when I discovered Lua in Roblox. Now I'm very
      passionate about fullstack development.
    </p>
    <h1 class="my-5"><strong>Tech Stack</strong></h1>
    <section class="mb-10">
      <Stacker title="Frontend">
        <a href="https://react.dev/">
          <img class="size-14" src="../assets/react.svg " alt="react"
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
    </section>
    <h1><strong>Projects</strong></h1>
    <section class="grid lg:grid-cols-2 gap-10 my-5">
      <a
        v-for="repo in filteredRepos"
        :key="repo.id"
        :href="repo.html_url"
        class="border rounded-md border-gray-500 bg-slate-800 hover:bg-gray-700"
      >
        <div class="m-5">
          <div class="flex pb-2">
            <img :src="repo.owner.avatar_url" alt="avatar" class="size-8 rounded-full" />
            <p class="ml-2">{{ repo.owner.login }}</p>
          </div>
          <div>
            <h3 class="my-1">
              <strong>{{ repo.name }}</strong>
            </h3>
            <p>{{ repo.description }}</p>
          </div>
          <div class="flex my-2">
            <span
              class="size-3 rounded-full mt-2 mr-2"
              :style="{ 'background-color': (colors[repo.language] || {}).color || 'null' }"
            ></span>
            <p>{{ repo.language }}</p>
          </div>
        </div>
      </a>
    </section>
  </main>
</template>
