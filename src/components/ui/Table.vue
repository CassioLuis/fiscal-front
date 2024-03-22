<script setup lang="ts">
import { TableItem, TableHeader, SearchForm, PaginationClassic } from '@/components/ui'
import { ref, reactive } from 'vue'


const { tableData } = defineProps<{
  tableData: Array<any>
  headers: Array<any>
}>()

const tableDataRef = reactive<{ tableData: Array<any> }>({ tableData })

function handleSort (key: string) {
  if (keyValue !== key) position = 0
  const direction = directions[position]
  const sortFunction = sortFunctions[direction]
  sortFunction(key)
  keyValue = key
}

const directions: Array<string> = ['asc', 'desc', 'default']

let position: number = 0
let keyValue: string = ''

const sortFunctions: any = {
  asc (key: string) {
    position++
    tableDataRef.tableData.sort((a: any, b: any) => asc(a[key], b[key]))
  },
  desc (key: string) {
    position++
    tableDataRef.tableData.sort((a: any, b: any) => desc(a[key], b[key]))
  },
  default () {
    position = 0
    tableDataRef.tableData.splice(0, tableDataRef.tableData.length, ...tableData)
    // tableDataRef.tableData = tableData
  }
}

function asc (a: string, b: string): number {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

function desc (a: string, b: string): number {
  if (a < b) return 1
  if (a > b) return -1
  return 0
}

function handleSearch (keyWord: any) {
  keyWordRef.value = keyWord
  tableDataRef.tableData = tableData.filter(objeto => {
    return Object.keys(objeto).some(key => {
      return String(objeto[key]).toLowerCase().includes(keyWord.toLowerCase())
    })
  })

  // tableDataRef.splice(0, tableDataRef.length, ...tableData.filter(objeto => {
  //   return Object.keys(objeto).some(key => {
  //     return String(objeto[key]).toLowerCase().includes(keyWord.toLowerCase())
  //   })
  // }))

  // Vue.set(tableDataRef, 'value', tableData.filter(objeto => {
  //   return Object.keys(objeto).some(key => {
  //     return String(objeto[key]).toLowerCase().includes(keyWord.toLowerCase())
  //   })
  // }))
}

const keyWordRef = ref<any>('')

const pageRef = ref<Array<any>>([])

function paginate (emit: any) {
  pageRef.value = emit
}

</script>

<template>
  <div class="bg-white dark:bg-slate-900">
    <div>
      <!-- Table -->
      <div class="overflow-x-auto p-4">
        <div class="mb-4 grid grid-cols-12 gap-2">
          <div class="col-span-12 md:col-span-6">
            <!-- <h1 class="font-semibold mb-2">
              Pesquisa
            </h1> -->
            <SearchForm
              @search-word="handleSearch"
              :placeholder="'Pesquise por descrição, data, documento ou valor'"
              class="w-full"
            />
          </div>
        </div>

        <table class="table-auto w-full dark:text-slate-300">
          <!-- Table header -->
          <thead
            class="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700"
          >
            <TableHeader
              :headers="headers"
              @send-key="handleSort"
            />
          </thead>
          <!-- Table body -->
          <tbody
            class="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700"
          >
            <tr v-if="!tableDataRef.tableData.length">
              <td
                colspan="99"
                class="px-2 first:pl-5 last:pr-5 py-8 whitespace-nowrap md:w-1/2"
              >
                <div class="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                      class="dark:text-slate-500 text-slate-300"
                    />
                    <path
                      d="M12 9v4"
                      class="dark:text-slate-500 text-slate-300"
                    />
                    <path
                      d="M12 17h.01"
                      class="dark:text-slate-500 text-slate-300"
                    />
                  </svg>
                  <div class="flex gap-1 font-medium text-sm dark:text-slate-500 text-slate-300">
                    <span>Nenhum dado encontrado para</span>
                    <div class="truncate max-w-52">
                      "{{ keyWordRef }}".
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <TableItem
              v-for="(tableLine, idx) in pageRef"
              :key="idx"
              :table-line="tableLine"
            />
          </tbody>
        </table>

        <div
          v-if="tableDataRef.tableData.length"
          class="mt-4"
        >
          <PaginationClassic
            :data="tableDataRef.tableData"
            :items-per-page="5"
            @pageData="paginate"
          />
        </div>
      </div>
    </div>
  </div>
</template>
