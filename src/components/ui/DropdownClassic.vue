<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  options: Array<any>
}>()

const dropdownOpen = ref<boolean>(false)
const trigger = ref<HTMLElement>()
const dropdown = ref<HTMLElement>()
const selected = ref<string>('')

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
  <div class="relative flex">
    <button
      ref="trigger"
      class="btn justify-between max-w-44 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200"
      aria-label="Select date range"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="flex items-center truncate">
        <span v-if="selected">{{ selected }}</span>
        <span
          v-else
          class="text-xs text-slate-400"
        >
          Escolha um banco...
        </span>
      </span>
      <svg
        class="shrink-0 ml-1 fill-current text-slate-400"
        width="11"
        height="7"
        viewBox="0 0 11 7"
      >
        <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="z-10 absolute top-full left-0 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1"
      >
        <div
          ref="dropdown"
          class="font-medium text-sm text-slate-600 dark:text-slate-300"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >
          <button
            v-for="(option, idx) in options"
            :key="idx"
            class="flex items-center w-full hover:bg-slate-50 hover:dark:bg-slate-700/20 py-1 px-3 cursor-pointer"
            :class="option.name === selected && 'text-indigo-500'"
            @click="selected = option.name; dropdownOpen = false"
          >
            <svg
              class="shrink-0 mr-2 fill-current text-indigo-500"
              :class="option.name !== selected && 'invisible'"
              width="12"
              height="9"
              viewBox="0 0 12 9"
            >
              <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
            </svg>
            <div class="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
              <!-- <img
                :src="option.logo"
                alt="#"
              > -->
              <span>{{ option.name }}</span>
            </div>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
