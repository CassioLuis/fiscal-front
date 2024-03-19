<script setup lang="ts">
import { TableItem, TableHeader } from '@/components/ui'


defineProps<{
  tableData: Array<any>
  headers: Array<any>
}>()

</script>

<template>
  <div class="bg-white dark:bg-slate-900">
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full dark:text-slate-300">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700">
            <TableHeader :headers="headers" />
          </thead>
          <!-- Table body -->
          <tbody
            class="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700"
          >
            <TableItem
              v-for="(tableLine, idx) in tableData"
              :key="idx"
              :table-line="tableLine"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
