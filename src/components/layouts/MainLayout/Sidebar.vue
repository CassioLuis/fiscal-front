<script setup>
import { inject, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

import SidebarLinkGroup from './SidebarLinkGroup.vue'

const { isOpen } = inject('useSidebar')

// const props = defineProps({
//   sidebarOpen: Boolean
// })

// const trigger = ref(null)
// const sidebar = ref(null)

const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
console.log(storedSidebarExpanded)
const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

const currentRoute = useRouter().currentRoute.value

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!isOpen.value || keyCode !== 27) return
  console.log(isOpen.value)
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('keydown', keyHandler)
})

watch(sidebarExpanded, () => {
  localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
  if (sidebarExpanded.value) {
    document.querySelector('body')?.classList.add('sidebar-expanded')
  } else {
    document.querySelector('body')?.classList.remove('sidebar-expanded')
  }
})

</script>

<template>
  <div class="min-w-fit">
    <!-- Sidebar backdrop (mobile only) -->
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" @click.prevent="isOpen = !isOpen">
    </div>

    <!-- Sidebar -->
    <div
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out"
      :class="isOpen ? 'translate-x-0' : '-translate-x-64'">

      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button class="lg:hidden text-slate-500 hover:text-slate-400" @click.stop="isOpen = !isOpen">
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <defs>
              <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                <stop stop-color="#A5B4FC" offset="100%" />
              </linearGradient>
              <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                <stop stop-color="#38BDF8" offset="100%" />
              </linearGradient>
            </defs>
            <rect fill="#6366F1" width="32" height="32" rx="16" />
            <path
              d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
              fill="#4F46E5" />
            <path
              d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
              fill="url(#logo-a)" />
            <path
              d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
              fill="url(#logo-b)" />
          </svg>
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
          </h3>
          <ul class="mt-3">
            <!-- Dashboard -->
            <SidebarLinkGroup v-slot="parentLink"
              :activeCondition="currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')">
              <a class="block text-slate-200 truncate transition duration-150"
                :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'hover:text-slate-200' : 'hover:text-white'"
                href="#0" @click.prevent="parentLink.handleClick(); sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current"
                        :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-500' : 'text-slate-400'"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path class="fill-current"
                        :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-600' : 'text-slate-600'"
                        d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path class="fill-current"
                        :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-200' : 'text-slate-400'"
                        d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Main</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/dashboard/analytics" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/dashboard/fintech" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Fintech</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
            <!-- E-Commerce  -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('ecommerce')">
              <a class="block text-slate-200 truncate transition duration-150"
                :class="currentRoute.fullPath.includes('ecommerce') ? 'hover:text-slate-200' : 'hover:text-white'"
                href="#0" @click.prevent="parentLink.handleClick(); sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current"
                        :class="currentRoute.fullPath.includes('ecommerce') ? 'text-indigo-300' : 'text-slate-400'"
                        d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                      <path class="fill-current"
                        :class="currentRoute.fullPath.includes('ecommerce') ? 'text-indigo-600' : 'text-slate-700'"
                        d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                      <path class="fill-current"
                        :class="currentRoute.fullPath.includes('ecommerce') ? 'text-indigo-500' : 'text-slate-600'"
                        d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">E-Commerce
                    </span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/ecommerce/customers" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Customers</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/orders" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/invoices" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Invoices</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/shop" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/shop-2" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop
                          2</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/product" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Single
                          Product</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/cart" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/cart-2" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart
                          2</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/cart-3" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart
                          3</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/pay" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pay</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
            <!-- Messages -->
            <router-link to="/messages" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
                <a class="block text-slate-200 truncate transition duration-150"
                  :class="isExactActive ? 'hover:text-slate-200' : 'hover:text-white'" :href="href" @click="navigate">
                  <div class="flex items-center justify-between">
                    <div class="grow flex items-center">
                      <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path class="fill-current" :class="isExactActive ? 'text-indigo-500' : 'text-slate-600'"
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                        <path class="fill-current" :class="isExactActive ? 'text-indigo-300' : 'text-slate-400'"
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Messages</span>
                    </div>
                    <!-- Badge -->
                    <div class="flex flex-shrink-0 ml-2">
                      <span
                        class="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div>
                  </div>
                </a>
              </li>
            </router-link>
          </ul>
        </div>
        <!-- More group -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
          </h3>
          <ul class="mt-3">
            <!-- Authentication -->
            <SidebarLinkGroup v-slot="parentLink">
              <a class="block text-slate-200 truncate transition duration-150"
                :class="parentLink.expanded ? 'hover:text-slate-200' : 'hover:text-white'" href="#0"
                @click.prevent="parentLink.handleClick(); sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z" />
                      <path class="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z" />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Authentication</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/signin" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Sign
                          in</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/signup" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Sign
                          up</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/reset-password" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Reset
                          Password</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
            <!-- Onboarding -->
            <SidebarLinkGroup v-slot="parentLink">
              <a class="block text-slate-200 truncate transition duration-150"
                :class="parentLink.expanded ? 'hover:text-slate-200' : 'hover:text-white'" href="#0"
                @click.prevent="parentLink.handleClick(); sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600"
                        d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z" />
                      <path class="fill-current text-slate-400"
                        d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Onboarding</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/onboarding-01" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step
                          1</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/onboarding-02" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step
                          2</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/onboarding-03" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step
                          3</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/onboarding-04" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step
                          4</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
            <!-- Components  -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('component')">
              <a class="block text-slate-200 truncate transition duration-150"
                :class="currentRoute.fullPath.includes('component') ? 'hover:text-slate-200' : 'hover:text-white'"
                href="#0" @click.prevent="parentLink.handleClick(); sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <circle class="fill-current"
                        :class="currentRoute.fullPath.includes('component') ? 'text-indigo-500' : 'text-slate-600'"
                        cx="16" cy="8" r="8" />
                      <circle class="fill-current"
                        :class="currentRoute.fullPath.includes('component') ? 'text-indigo-300' : 'text-slate-400'"
                        cx="8" cy="16" r="8" />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Components
                    </span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/component/button" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Button</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/form" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Input
                          Form</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/dropdown" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dropdown</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/alert" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Alert
                          & Banner</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/modal" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Modal</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/pagination" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pagination</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/tabs" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tabs</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/breadcrumb" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Breadcrumb</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/badge" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Badge</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/avatar" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Avatar</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/tooltip" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tooltip</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/accordion" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Accordion</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/icons" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate"
                        :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href"
                        @click="navigate">
                        <span
                          class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Icons</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>