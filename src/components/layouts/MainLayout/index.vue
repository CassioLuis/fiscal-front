<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" /> -->
    <Sidebar />

    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <!-- <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" /> -->
      <Header />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full">

          <!-- Page content -->
          <div class="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
            <router-view />
          </div>

        </div>
      </main>

    </div>

  </div>
</template>