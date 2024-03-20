<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="flex h-[100dvh] overflow-hidden">
    <Sidebar />
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header />
      <main class="grow">
        <div class="flex px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
