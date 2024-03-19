<script setup lang="ts">
defineProps<{ headers: any }>()

</script>

<template>
  <tr>
    <th
      v-for="(header, idx) of headers"
      :key="idx"
      class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
    >
      <div class="font-semibold text-left">
        {{ header }}
      </div>
    </th>
  </tr>
</template>
