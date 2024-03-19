<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownTransaction, DragAndDrop, InputFile, SearchForm, Table, PaginationClassic, Datepicker, DropdownClassic, CreditCard, DebitCard
} from '@/components/ui'
import {
  BancoDoBrasil, Sicredi, Bradesco, CaixaEconomica, Sicoob, Santander
} from '@/assets/images'
import { Cloud } from '@/components/icons'

const selectedFiles = ref<any>([])
const dragAndDropArea = ref<boolean>(false)
const convertedData = ref<Array<any>>([123])

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

const banks: Array<any> = [
  { name: 'B. do Brasil', logo: BancoDoBrasil},
  { name: 'Sicredi', logo: Sicredi },
  { name: 'B. Bradesco', logo: Bradesco},
  { name: 'Caixa Economica', logo: CaixaEconomica},
  { name: 'Sicoob', logo: Sicoob },
  { name: 'Santander', logo: Santander }
]

</script>

<template>
  <div class="grow flex flex-col">
    <!-- Page header -->
    <div class="sm:flex sm:justify-between sm:items-center mb-5">
      <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
          Extrato ✨
        </h1>
      </div>

      <div class="grid sm:auto-cols-max justify-start sm:justify-end gap-2">
        <InputFile
          :formats="['.pdf', '.ofx', '.xls']"
          button-tittle="Enviar Extrato"
          @upLoadFile="onUpLoad"
        />
      </div>
    </div>
    <div>
      <!-- Filters -->
      <div class="mb-5 grid grid-flow-col gap-2 sm:auto-cols-max justify-start sm:justify-end">
        <DropdownClassic :options="banks" />
        <Datepicker align="right" />
        <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search w-4 h-4"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
            />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
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
        v-if="convertedData.length && !dragAndDropArea"
        class="flex gap-4 justify-center w-full"
      >
        <div class="w-2/3 flex flex-col gap-8">
          <div class="grid grid-cols-12 items-start gap-3">
            <div class="col-span-6">
              <CreditCard
                tittle="Crédito"
                content="R$ 75.565,32"
              />
            </div>
            <div class="col-span-6">
              <DebitCard
                tittle="Débito"
                content="R$ 45.565,32"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 items-start gap-2">
            <div class="col-span-6">
              <SearchForm class="hidden sm:block w-full" />
            </div>
            <div class="col-span-6 flex justify-end">
              <button class="btn bg-emerald-500 hover:bg-emerald-600 text-white">
                Baixar Extrato
              </button>
            </div>
            <div class="col-span-12">
              <span class="text-sm">Transações do </span>
              <DropdownTransaction class="text-sm" />
            </div>
          </div>

          <Table />

          <div class="mt-8">
            <PaginationClassic />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
