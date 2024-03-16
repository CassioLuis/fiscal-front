<script setup lang="ts">
import { Cloud } from '../icons'

const emit = defineEmits(['upLoadFile'])

defineProps<{
  formats: Array<string>,
  title: string,
  inputButton?: boolean
}>()

function handleFiles (event: any) {
  if (!event.target.files.length) return
  emit('upLoadFile', event.target.files[0])
}

function onDrop (event: any) {
  emit('upLoadFile', event.dataTransfer.files[0])
}

</script>

<template>
  <label
    @dragenter.prevent
    @dragover.prevent
    @dragleave.prevent
    @drop.prevent="onDrop"
    tabindex="0"
    class="border-2 border-dashed border-indigo-500 flex flex-col justify-center items-center select-none"
  >
    <div class="flex flex-col justify-center items-center -z-60">
      <Cloud
        width="50"
        height="50"
        :animate="true"
        class="mb-4 text-indigo-500"
      />
      <span class="mb-1 font-semibold lg:text-lg md:text-sm">{{ title }}</span>

      <span class="text-xs text-slate-500">Formatos aceitos
        <span
          class="font-semibold"
          v-for="(format, idx) of formats"
          :key="idx"
        >
          {{ format }},
        </span>
      </span>
      <span
        v-if="inputButton"
        class="btn mt-6 px-8 text-xs md:text-sm bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer"
      >
        Procurar Arquivo
      </span>
    </div>

    <input
      name="inputfile"
      type="file"
      class="hidden"
      :accept="formats.toString()"
      @change="handleFiles"
    >
  </label>
</template>
