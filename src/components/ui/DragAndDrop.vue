<script setup lang="ts">
const emit = defineEmits(['upLoadFile'])

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
    id="drag-and-drop"
    class="px-5 select-none bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-indigo-500 dark:border-indigo-500 w-full h-72 rounded-md flex flex-col justify-center items-center"
  >
    <span class="rounded-full mb-4 h-12 w-12 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 640 512"
        class="fill-current"
      >
        <path
          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
          class="text-indigo-500"
        />
      </svg>
    </span>
    <span class="font-semibold text-sm lg:text-lg md:text-sm">Escolha um arquivo ou arraste aqui.</span>
    <slot name="formats" />
    <span class="btn mt-6 px-8 text-xs md:text-sm bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
      Procurar Arquivo
    </span>
    <input
      name="inputfile"
      type="file"
      class="hidden"
      accept=".pdf, .ofx, .xls"
      @change="handleFiles"
    >
  </label>
</template>
