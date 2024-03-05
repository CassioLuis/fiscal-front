<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  activeCondition: Boolean
})

const expanded = ref(props.activeCondition)

function handleClick () {
  expanded.value = !expanded.value
}

</script>

<template>
  <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="{ 'bg-slate-900': activeCondition }">
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>
