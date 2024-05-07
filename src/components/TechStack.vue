<template>
  <div>
    <h2>{{ title }}</h2>
    <div
      class="bg-slate-800 flex flex-row gap-3 border border-gray-700 overflow-x-auto rounded-lg my-2 items-center bg-opacity-65 p-3 max-w-[40rem]"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
