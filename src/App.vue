<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'


const { currentRoute } = useRouter()

const layout: any = computed(() => currentRoute.value.meta.layout ?? 'DefaultLayout')

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
