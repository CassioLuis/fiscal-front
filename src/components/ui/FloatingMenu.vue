<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const dropdownOpen = ref<boolean>(false)
const trigger = ref<HTMLElement>()
const dropdown = ref<HTMLElement>()

// close on click outside
const clickHandler = ({ target }: any) => {
  if (!dropdownOpen.value || dropdown.value?.contains(target) || trigger.value?.contains(target)) return
  dropdownOpen.value = false
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }: any) => {
  if (!dropdownOpen.value || keyCode !== 27) return
  dropdownOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

</script>

<template>
  <div
    @mouseenter="dropdownOpen = true"
    @mouseleave="dropdownOpen = false"
    class="fixed right-8 bottom-8 select-none"
  >
    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="dropdownOpen"
        ref="dropdown"
        class="flex flex-col gap-1 items-center"
      >
        <li>
          <div class="w-12 h-12 p-2 transition-all bg-rose-500 hover:bg-rose-600 rounded-full text-white cursor-pointer shadow-md shadow-slate-400 dark:shadow-slate-900">
            <img
              src="@/assets/pdf.png"
              alt=".pdf"
              @click.prevent="dropdownOpen = !dropdownOpen"
            >
          </div>
        </li>
        <li>
          <div class="w-12 h-12 p-2 transition-all bg-amber-500 hover:bg-amber-600 rounded-full text-white cursor-pointer shadow-md shadow-slate-400 dark:shadow-slate-900">
            <img
              src="@/assets/ofx.png"
              alt=".ofx"
              @click.prevent="dropdownOpen = !dropdownOpen"
            >
          </div>
        </li>
        <li>
          <div class="w-12 h-12 p-2 transition-all bg-emerald-500 hover:bg-emerald-600 rounded-full text-white cursor-pointer shadow-md shadow-slate-400 dark:shadow-slate-900">
            <img
              src="@/assets/xls.png"
              alt=".xls"
              @click.prevent="dropdownOpen = !dropdownOpen"
            >
          </div>
        </li>
      </ul>
    </transition>
    <div
      ref="trigger"
      class="shadow-lg shadow-slate-400 dark:shadow-slate-900 mt-2 p-4 bg-emerald-500 hover:bg-emerald-600 transition-all rounded-full text-white cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-download"
      ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line
        x1="12"
        x2="12"
        y1="15"
        y2="3"
      />
      </svg>
    </div>
  </div>
</template>
