<script setup lang="ts">
import { ref } from 'vue';
import { DragAndDrop, InputFile } from '../ui'
import { Cloud } from '../icons'

const selectedFiles = ref<any>([])
const dragAndDropArea = ref(false)

function onUpLoad (file: any): void {
  selectedFiles.value = file
  dragAndDropArea.value = false
  console.log(file)
}

function onEnter (): void {
  dragAndDropArea.value = true
}

function onLeave (): void {
  dragAndDropArea.value = false
}

</script>

<template>
  <div class="grow flex flex-col">
    <!-- Page header -->
    <div class="sm:flex sm:justify-between sm:items-center mb-8">
      <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
          Extrato ✨
        </h1>
      </div>

      <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        <InputFile
          formats=".pdf, .txt, .ofx"
          button-tittle="Enviar Extrato"
          @upLoadFile="onUpLoad"
        />
      </div>
    </div>

    <div
      @dragenter.prevent="onEnter"
      class="grow relative flex justify-center py-4 border-t border-slate-200 dark:border-slate-700"
    >
      <transition
        enter-active-class="transition ease-in-out duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <DragAndDrop
          v-if="dragAndDropArea"
          class="absolute top-4 right-0 bottom-0 left-0 rounded-lg"
          @upLoadFile="onUpLoad"
          @dragleave.prevent="onLeave"
          title="Solte o extrato aqui para converte-lo."
          :formats="['pdf', 'ofx', 'xls']"
          :input-button="false"
        />
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-700"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-50"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="!dragAndDropArea"
          class="w-full flex items-center justify-center"
        >
          <div class="max-w-2xl m-auto">
            <div class="text-center px-4">
              <div
                class="inline-flex items-center justify-center p-5 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 mb-4"
              >
                <Cloud
                  width="40"
                  height="40"
                  class="dark:text-slate-100 text-slate-700"
                />
              </div>
              <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">
                Solte seu extrato aqui
              </h2>
              <div class="mb-6">
                ou use o botão "Enviar Extrato".
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
