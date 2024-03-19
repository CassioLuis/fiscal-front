<script setup lang="ts">
defineProps<{ tableLine: any }>()

</script>

<template>
  <tr>
    <td
      v-for="(tableCell, idx) of tableLine"
      :key="idx"
      class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2"
    >
      <div class="flex items-center">
        <div class="font-medium text-xs text-slate-800 dark:text-slate-100">
          {{ tableCell }}
        </div>
      </div>
    </td>
  </tr>
</template>
