<script setup lang="ts">
const emit = defineEmits(['upLoadFile', 'files-dropped'])

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
    class="select-none bg-gray-100 dark:bg-slate-700 border-2 border-dashed dark:border-slate-600 w-full h-72 rounded flex flex-col justify-center items-center"
  >
    <span class="rounded-full mb-4 h-12 w-12 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-file-up"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M12 12v6" />
        <path d="m15 15-3-3-3 3" />
      </svg>
    </span>
    <span class="font-semibold text-lg">Escolha um arquivo ou arraste aqui.</span>
    <span class="text-sm text-gray-500 font-normal">Formatos OFX, PDF ou XLS.</span>
    <span
      class="btn mt-6 px-8 border-indigo-500 rounded-lg border-2 filter hover:shadow-lg hover:dark:bg-slate-800 cursor-pointer"
    >
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
