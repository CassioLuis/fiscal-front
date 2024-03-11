<script setup lang="ts">
defineEmits(['event'])

</script>

<template>
  <div
    class="inline-flex flex-col w-full max-w-lg px-4 py-2 text-sm bg-white dark:bg-slate-800 shadow border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
  >
    <div class="flex w-full justify-between items-start">
      <div class="flex items-center gap-4">
        <!-- CONTENT -->
        <slot name="content" />
      </div>
      <button
        class="opacity-70 hover:opacity-80 ml-3 mt-[3px]"
        @click="$emit('event')"
      >
        <div class="sr-only">
          Close
        </div>
        <svg class="w-4 h-4 fill-current">
          <path
            d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
          />
        </svg>
      </button>
    </div>
    <div class="text-right mt-1">
      <a
        class="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
        href="#0"
      >
        <slot name="action" />
      </a>
    </div>
  </div>
</template>
