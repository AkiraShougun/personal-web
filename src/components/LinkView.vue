<template>
  <div class="p-4 flex gap-3">
    <slot></slot>
    <a class="text-gray-100" :href="link">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: 'YourComponentName',
  props: {
    link: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
