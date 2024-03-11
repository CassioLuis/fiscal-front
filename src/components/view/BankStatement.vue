<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../ui/Modal.vue'
import { DragAndDrop, Card } from '../ui'

const modalOpen = ref(false)

const selectedFiles = ref<any>([])

function onUpLoad (event: any) {
  selectedFiles.value = event
}

function cleanFile () {
  // const newInput =
  // inputFile.value?.target.files = { length: 0}
  // console.log(inputFile.value)
  // const inputFile = document.querySelector('input[type="file"]')
  // const newFileInput = document.createElement('input')
  // newFileInput.type = 'file'
  // newFileInput.style.display = 'none'
  // selectedFiles.value = []
  // newFileInput.addEventListener('change', () => {})
  // inputFile?.parentNode?.replaceChild(newFileInput, inputFile)

  // fileInputRef.value = newFileInput
}

</script>

<template>
  <div>
    <!-- Page header -->
    <div class="sm:flex sm:justify-between sm:items-center mb-8">
      <!-- Left: Title -->
      <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
          Extrato ✨
        </h1>
      </div>

      <!-- Right: Actions -->
      <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        <!-- Add board button -->
        <Modal
          :modal-open="modalOpen"
          position="top"
          @close-modal="(event) => modalOpen = event"
        >
          <template #activator>
            <button
              @click="modalOpen = true"
              class="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              <svg
                class="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                />
              </svg>
              <span class="ml-2">
                Enviar Extrato
              </span>
            </button>
          </template>
          <template #title>
            <div class="gap-4 flex items-center">
              <div class="rounded-full border border-slate-200 dark:border-slate-700 p-3 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 640 512"
                  class="text-indigo-500"
                >
                  <path
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                    class="fill-current text-indigo-500"
                  />
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold text-lg">Envie extrato.</span>
                <span class="text-sm text-gray-500 font-normal">Selecione e envie extratos de sua escolha.</span>
              </div>
            </div>
          </template>
          <template #content>
            <div class="flex flex-col gap-4">
              <DragAndDrop @up-load-file="onUpLoad">
                <template #formats>
                  <span class="text-xs text-slate-500 md:text-sm">Formatos
                    <span class="font-semibold">OFX</span>,
                    <span class="font-semibold">PDF</span>  ou
                    <span class="font-semibold">XLS</span>.
                  </span>
                </template>
              </DragAndDrop>
              <Card
                v-if="selectedFiles.size"
                class="flex rounded-md"
                @event="cleanFile"
              >
                <template #content>
                  <span
                    class="text rounded-full border border-slate-200 dark:border-slate-700 p-2 flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 18 18"
                      class="fill-current"
                    >
                      <g
                        class="nc-icon-wrapper fill-current"
                        fill="#212121"
                      >
                        <line
                          x1="5.75"
                          y1="6.75"
                          x2="7.75"
                          y2="6.75"
                          fill="none"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.0"
                          class="fill-current stroke-indigo-500"
                        />
                        <line
                          x1="5.75"
                          y1="9.75"
                          x2="12.25"
                          y2="9.75"
                          fill="none"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.0"
                          class="fill-current stroke-indigo-500"
                        />
                        <line
                          x1="5.75"
                          y1="12.75"
                          x2="12.25"
                          y2="12.75"
                          fill="none"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.0"
                          class="fill-current stroke-indigo-500"
                        />
                        <path
                          d="M2.75,14.25V3.75c0-1.105,.895-2,2-2h5.586c.265,0,.52,.105,.707,.293l3.914,3.914c.188,.188,.293,.442,.293,.707v7.586c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2Z"
                          fill="none"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.0"
                          class="stroke-indigo-500"
                        />
                        <path
                          d="M15.16,6.25h-3.41c-.552,0-1-.448-1-1V1.852"
                          fill="none"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.0"
                          class="stroke-indigo-500 fill-current text-indigo-500"
                        />
                      </g>
                    </svg>
                  </span>
                  <div class="flex flex-col justify-center">
                    <span class="font-semibold">{{ selectedFiles.name }}</span>
                    <span class="text-sm">{{ (selectedFiles.size / 1048576).toFixed(2) }} MB</span>
                  </div>
                </template>
              </Card>
            </div>
          </template>
        </Modal>
      </div>
    </div>

    <div class="border-t border-slate-200 dark:border-slate-700">
      <div class="max-w-2xl m-auto mt-16">
        <div class="text-center px-4">
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 mb-4"
          >
            <svg
              class="w-5 h-6 fill-current"
              viewBox="0 0 20 24"
            >
              <path
                class="text-slate-500 dark:text-slate-600"
                d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z"
              />
              <path
                class="text-slate-300 dark:text-slate-400"
                d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z"
              />
              <path
                class="text-slate-400 dark:text-slate-500"
                d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z"
              />
            </svg>
          </div>
          <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">
            Pay your bills in just a few clicks
          </h2>
          <div class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg
              class="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path
                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
              />
            </svg>
            <span class="ml-2">Add Event</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
