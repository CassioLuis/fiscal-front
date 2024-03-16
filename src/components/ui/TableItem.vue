<script setup lang="ts">
defineProps<{ transaction: any }>()

</script>

<template>
  <tr>
    <td
      v-for="(transact, idx) of transaction"
      :key="idx"
      class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2"
    >
      <div class="flex items-center">
        <div class="font-medium text-slate-800 dark:text-slate-100">
          {{ transact }}
        </div>
      </div>
    </td>
  </tr>
</template>
