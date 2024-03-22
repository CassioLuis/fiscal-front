<script setup lang="ts">
defineProps<{ headers: any }>()

const emit = defineEmits(['sendKey'])

function sendKey (key: any) {
  emit('sendKey', key)
}

</script>

<template>
  <tr>
    <th
      v-for="({ name, key }, idx) of headers"
      :key="idx"
      class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer"
      @click.prevent="sendKey(key)"
    >
      <div class="font-semibold text-left">
        {{ name }}
      </div>
    </th>
  </tr>
</template>
