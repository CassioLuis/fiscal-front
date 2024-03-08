<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

type TPosition = 'top'

const props = defineProps<{
  modalOpen: boolean,
  position?: TPosition
}>()

const emit = defineEmits(['closeModal'])

function close (element: any) {
  if (element.target.id !== 'backdrop') return
  emit('closeModal', false)
}

const keyHandler = ({ keyCode }: any) => {
  if (!props.modalOpen || keyCode !== 27) return
  emit('closeModal', false)
}

onMounted(() => {
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('keydown', keyHandler)
})

</script>

<template>
  <div>
    <slot
      name="activator"
    />
    <!-- Modal backdrop -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="modalOpen"
        class="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        aria-hidden="true"
      />
    </transition>
    <!-- Modal dialog -->
    <transition
      enter-active-class="transition ease-in-out duration-200"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in-out duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-show="modalOpen"
        id="backdrop"
        class="backdrop-blur-sm fixed inset-0 z-50 overflow-hidden flex justify-center px-4 sm:px-6"
        :class="{
          'items-start pt-20': position === 'top' || 'items-center'
        }"
        role="dialog"
        aria-modal="true"
        @click.stop="close"
        @keyup.esc="close"
      >
        <div
          ref="modalContent"
          class="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded shadow-lg overflow-auto max-w-lg w-full max-h-full"
        >
          <!-- Modal header -->
          <div class="flex justify-between items-center px-5 py-3 border-b border-slate-200 dark:border-slate-700">
            <div class="font-semibold text-slate-800 dark:text-slate-100">
              <slot name="title" />
            </div>
            <button
              class="text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400"
              @click.stop="$emit('closeModal', false)"
            >
              <div class="sr-only">
                Close
              </div>
              <svg class="w-4 h-4 fill-current">
                <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
              </svg>
            </button>
          </div>
          <!-- Modal Content -->
          <div class="px-5 py-3">
            <slot name="content" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
