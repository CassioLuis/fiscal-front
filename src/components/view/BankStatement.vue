<script setup lang="ts">
import { ref } from 'vue';
import { DragAndDrop, InputFile, SearchForm, Table, PaginationClassic } from '../ui'
import { Cloud } from '../icons'

const selectedFiles = ref<any>([])
const dragAndDropArea = ref<boolean>(false)
const convertedData = ref<Array<any>>([])

function onUpLoad (file: any): void {
  selectedFiles.value = file
  dragAndDropArea.value = false
  convertedData.value = [1,2,3]
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
          :formats="['.pdf', '.ofx', '.xls']"
          button-tittle="Enviar Extrato"
          @upLoadFile="onUpLoad"
        />
      </div>
    </div>

    <div
      @dragenter.prevent="onEnter"
      class="grow relative flex justify-start py-4 border-t border-slate-200 dark:border-slate-700"
    >
      <DragAndDrop
        v-if="dragAndDropArea"
        class="absolute top-4 right-0 bottom-0 left-0 rounded-lg"
        @upLoadFile="onUpLoad"
        @dragleave.prevent="onLeave"
        title="Solte o extrato aqui para converte-lo."
        :formats="['.pdf', '.ofx', '.xls']"
      />

      <div
        v-if="!dragAndDropArea && !convertedData.length"
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
                class="dark:text-slate-200 text-slate-700"
              />
            </div>
            <h2 class="text-xl md:text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">
              Solte seu extrato aqui
            </h2>
            <div class="mb-6 text-xs md:text-sm">
              ou use o botão "Enviar Extrato".
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="convertedData.length"
        class="w-1/2"
      >
        <div class="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2">
          <!-- Left: Title -->
          <!-- <div class="mb-4 sm:mb-0">
            <h1 class="mr-4 text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
              $47,347.09
            </h1>
          </div> -->

          <!-- Right: Actions  -->
          <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <!-- Search form -->
            <div class="hidden sm:block">
              <SearchForm class="hidden sm:block" />
            </div>

            <!-- Export button -->
            <button class="btn bg-emerald-500 hover:bg-emerald-600 text-white">
              Baixar Extrato
            </button>
          </div>
        </div>

        <div class="mb-5">
          <span>Transactions from </span>
        </div>

        <!-- Filters -->
        <!-- <div class="mb-5">
          <ul class="flex flex-wrap -m-1">
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out"
              >
                View
                All
              </button>
            </li>
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
              >
                Completed
              </button>
            </li>
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
              >
                Pending
              </button>
            </li>
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
              >
                Canceled
              </button>
            </li>
          </ul>
        </div> -->

        <!-- Table -->
        <Table />

        <!-- Pagination -->
        <div class="mt-8">
          <PaginationClassic />
        </div>
      </div>
    </div>
  </div>
</template>
