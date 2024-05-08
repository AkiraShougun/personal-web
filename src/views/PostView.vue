<template>
  <main class="mx-2 my-5 lg:mx-60 lg:my-5 font-serif">
    <div v-if="postComponent">
      <component :is="postComponent" />
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      postComponent: null
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const postComponent = await import(`../posts/${to.params.slug}.md`)
      next((vm) => (vm.postComponent = postComponent.default))
    } catch (error) {
      console.error(error)
      // handle error, e.g. redirect to 404 page
    }
  }
}
</script>
