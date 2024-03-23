<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'

const props = defineProps<{
  data: Array<any>
  itemsPerPage: number
}>()

const emit = defineEmits<{ pageData: any[] }>()

const paginated = reactive<{ pages: Array<any> }>({ pages: [] })
const pageNumber = ref<number>(0)

onMounted(() => {
  createPagination()
  toPage(0)
})

function createPagination (): void {
  paginated.pages = props.data.reduce((acc, curr, index) => {
    const chunkIndex = Math.floor(index / props.itemsPerPage)
    !(index % props.itemsPerPage) ? acc.push([curr]) : acc[chunkIndex].push(curr)
    return acc
  }, [])
}

function toPage (page: number): void {
  pageNumber.value = page
  emit('pageData', paginated.pages[page])
}

function nextPage (): void {
  if (pageNumber.value === paginated.pages.length - 1) return
  pageNumber.value++
  toPage(pageNumber.value)
}

function prevPage (): void {
  if (pageNumber.value <= 0) return
  pageNumber.value--
  toPage(pageNumber.value)
}

watch(() => props.data, () => {
  console.log(`ola`)
  createPagination()
  toPage(0)
}, { deep: true })


</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:gap-10 sm:justify-center">
    <nav
      class="mb-4 sm:mb-0 sm:order-1"
      role="navigation"
      aria-label="Navigation"
    >
      <ul class="flex justify-center">
        <li class="ml-3 first:ml-0 cursor-pointer">
          <span
            class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500"
            @click="prevPage"
          >
            &lt;- Anterior
          </span>
        </li>
        <li class="ml-3 first:ml-0 cursor-pointer">
          <span
            class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500"
            @click="nextPage"
          >
            Próxima -&gt;
          </span>
        </li>
      </ul>
    </nav>
    <div class="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
      Página
      <span class="font-medium text-slate-600 dark:text-slate-300">{{ pageNumber + 1 }} - {{ paginated.pages.length }}
        de
      </span>
      <span class="font-medium text-slate-600 dark:text-slate-300">
        {{ props.data.length }}
      </span> resultados
    </div>
  </div>
</template>
