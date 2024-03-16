<script setup lang="ts">
import { Cloud } from '../icons'

defineProps<{
  buttonTittle: string
  formats: Array<any>
}>()

const emit = defineEmits(['upLoadFile'])

function handleFiles (event: any) {
  if (!event.target.files.length) return
  emit('upLoadFile', event.target.files[0])
}

</script>

<template>
  <label tabindex="0">
    <span class="btn flex items-center text-xs md:text-sm bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
      <Cloud />
      <span class="ml-2">{{ buttonTittle }}</span>
    </span>
    <input
      name="inputfile"
      type="file"
      class="hidden"
      :accept="formats.toString()"
      @change="handleFiles"
    >
  </label>
</template>

<style scoped>

.animate {
  animation: animate 1s ease-in-out infinite
}

@keyframes animate {
  0% {
    transform: translateY(-5px)
  }

  50% {
    transform: translateY(10px)
  }

  100% {
    transform: translateY(-5px)
  }
}

</style>
