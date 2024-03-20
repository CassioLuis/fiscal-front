<script setup lang="ts">
import { ref } from 'vue'
import {
  FloatingMenu, DropdownTransaction, DragAndDrop, InputFile, SearchForm, Table, PaginationClassic, Datepicker, DropdownClassic, CreditCard, DebitCard
} from '@/components/ui'
import {
  BancoDoBrasil, Sicredi, Bradesco, CaixaEconomica, Sicoob, Santander
} from '@/assets/images'
import { Cloud } from '@/components/icons'
import { dataStatement } from '@/infra/mock'

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

const banks: Array<any> = [
  { name: 'B. do Brasil', logo: BancoDoBrasil},
  { name: 'Sicredi', logo: Sicredi },
  { name: 'B. Bradesco', logo: Bradesco},
  { name: 'Caixa Economica', logo: CaixaEconomica},
  { name: 'Sicoob', logo: Sicoob },
  { name: 'Santander', logo: Santander }
]

const headers = ['Data', 'Descrição', 'Documento', 'Valor', 'Saldo']


</script>

<template>
  <div class="grow grid grid-cols-12 content-start">
    <!-- Page header -->
    <div class="col-span-12 grid grid-cols-12 mb-5">
      <div class="col-span-6 mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
          Extrato ✨
        </h1>
      </div>

      <div class="col-span-6 justify-self-end">
        <InputFile
          :formats="['.pdf', '.ofx', '.xls']"
          button-tittle="Enviar Extrato"
          @upLoadFile="onUpLoad"
        />
      </div>
    </div>

    <!-- Filters -->
    <div class="col-span-12 flex justify-end flex-col sm:flex-row gap-2 mb-5">
      <DropdownClassic :options="banks" />
      <Datepicker align="left" />
      <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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

    <!-- Content -->
    <div
      @dragenter.prevent="onEnter"
      class="min-h-[74dvh] col-span-12 relative flex justify-start py-4 border-t border-slate-200 dark:border-slate-700"
    >
      <!-- Drag Drop -->
      <DragAndDrop
        v-if="dragAndDropArea"
        class="absolute top-4 right-0 bottom-0 left-0 rounded-lg"
        @upLoadFile="onUpLoad"
        @dragleave.prevent="onLeave"
        title="Solte o extrato aqui para converte-lo."
        :formats="['.pdf', '.ofx', '.xls']"
      />

      <!-- Drop Area -->
      <div
        v-if="!dragAndDropArea && !convertedData.length"
        class="w-full flex items-center justify-center"
      >
        <div>
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

      <!-- Table -->
      <div
        v-if="convertedData.length && !dragAndDropArea"
        class="w-full flex gap-4 justify-center"
      >
        <div class="w-full flex flex-col gap-8">
          <div class="grid grid-cols-12 items-start gap-y-2 gap-x-3">
            <h1 class="col-span-12 font-semibold">
              Resumo
              <DropdownTransaction
                align="left"
              />
            </h1>
            <div class="col-span-12 md:col-span-6">
              <CreditCard
                tittle="Crédito"
                content="R$ 75.565,32"
              />
            </div>
            <div class="col-span-12 md:col-span-6">
              <DebitCard
                tittle="Débito"
                content="R$ 45.565,32"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12 md:col-span-6">
              <h1 class="font-semibold mb-2">
                Pesquisa
              </h1>
              <SearchForm
                :placeholder="'descrição, data, documento ou valor'"
                class="w-full"
              />
            </div>
          </div>

          <Table
            :headers="headers"
            :table-data="dataStatement"
          />

          <PaginationClassic />

          <FloatingMenu />
        </div>
      </div>
    </div>
  </div>
</template>
