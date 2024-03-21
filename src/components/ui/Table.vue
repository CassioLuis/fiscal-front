<script setup lang="ts">
import { TableItem, TableHeader } from '@/components/ui'
import { ref } from 'vue'


const props = defineProps<{
  tableData: Array<any>
  headers: Array<any>
}>()

const sorted = ref<Array<any>>(props.tableData)

const directions: Array<string> = ['asc', 'desc', 'default']

let position: number = 0
let keyValue: string = ''

const sortFunctions: any = {
  asc (key: string) {
    position++
    sorted.value = sorted.value.sort((a: any, b: any) => asc(a[key], b[key]))
  },
  desc (key: string) {
    position++
    sorted.value = sorted.value.sort((a: any, b: any) => desc(a[key], b[key]))
  },
  default () {
    position = 0
    sorted.value = props.tableData
  }
}

function handleSort (key: string) {
  if (keyValue !== key) position = 0
  const direction = directions[position]
  const sortFunction = sortFunctions[direction]
  sortFunction(key)
  keyValue = key
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

</script>

<template>
  <div class="bg-white dark:bg-slate-900">
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full dark:text-slate-300">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700">
            <TableHeader
              :headers="headers"
              @send-key="handleSort"
            />
          </thead>
          <!-- Table body -->
          <tbody
            class="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700"
          >
            <TableItem
              v-for="(tableLine, idx) in sorted"
              :key="idx"
              :table-line="tableLine"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
