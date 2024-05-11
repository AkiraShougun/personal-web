<template>
  <main class="flex gap-2 flex-col items-center content-center font-mono m-10">
    <h1>Shuffle Product</h1>
    <p>Please use "a" or "b" for writing out the measures.</p>
    <p>Examples: aab ш ababab</p>
    <br />
    <input
      class="text-white bg-gray-700 rounded-md p-2 text-2xl"
      type="text"
      v-model="input1"
      placeholder="Enter first word"
    />
    <input
      class="text-white bg-gray-700 rounded-md p-2 text-2xl"
      type="text"
      v-model="input2"
      placeholder="Enter second word"
    />
    <button @click="calculate" class="text-white bg-gray-700 rounded-md p-2">Submit</button>
    <br />
    <h2>{{ output }}</h2>
  </main>
</template>
<script>
import { shuffleProduct, countAs } from '../miniscripts/shuffle'

export default {
  data() {
    return {
      input1: '',
      input2: '',
      output: ''
    }
  },
  methods: {
    calculate() {
      const freqMap = shuffleProduct(this.input1, this.input2)
      let result = ''
      for (let [key, value] of freqMap.entries()) {
        const counts = countAs(key).join(',')
        result += `${value} ζ(${counts}) + `
      }
      this.output = result.slice(0, -3) // remove the last " + "
    }
  }
}
</script>
