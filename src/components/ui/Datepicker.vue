<script setup lang="ts">
import { ref } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import { Portuguese } from 'flatpickr/dist/l10n/pt.js'

const props = defineProps<{
  align: string
}>()

const date = ref(null)

const config: any = {
  mode: 'range',
  locale: Portuguese,
  static: true,
  monthSelectorType: 'static',
  dateFormat: 'd/m/Y',
  defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
  prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  onReady: (_: Date, dateStr: string, instance: any) => {
    instance.element.value = dateStr.replace('to', '-')
    const customClass = props.align ? props.align : ''
    instance.calendarContainer.classList.add(`flatpickr-${customClass}`)
  },
  onChange: (_: Date, dateStr: string, instance: any) => {
    instance.element.value = dateStr.replace('to', '-')
  }
}

</script>

<template>
  <div class="relative">
    <flat-pickr
      class="w-[16.0rem] form-input pl-9 dark:bg-slate-800 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200 font-medium"
      :config="config"
      v-model="date"
    />
    <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
      <svg
        class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 ml-3"
        viewBox="0 0 16 16"
      >
        <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
      </svg>
    </div>
  </div>
</template>
