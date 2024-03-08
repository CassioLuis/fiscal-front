<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../ui/Modal.vue'

const modalOpen = ref(false)

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
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span
                class="ml-2"
              >
                Enviar Extrato
              </span>
            </button>
          </template>
          <template #title>
            <div class="gap-4 flex items-center">
              <div>
                <span class="rounded-full border border-slate-200 dark:border-slate-700 h-12 w-12 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-file-up"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M12 12v6" />
                    <path d="m15 15-3-3-3 3" />
                  </svg>
                </span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold text-lg">Envie extrato.</span>
                <span class="text-sm text-gray-500 font-normal">Selecione e envie extratos de sua escolha.</span>
              </div>
            </div>
          </template>
          <template #content>
            <div class="bg-gray-100 dark:bg-slate-700 border border-dotted dark:border-slate-600 w-full h-72 rounded flex flex-col justify-center items-center">
              <span class="rounded-full mb-4 h-12 w-12 flex justify-center items-center">
                <!-- <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-cloud-upload"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-up"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 12v6" />
                  <path d="m15 15-3-3-3 3" />
                </svg>
              </span>
              <span class="font-semibold text-lg">Escolha um arquivo ou arraste aqui.</span>
              <span class="text-sm text-gray-500 font-normal">Formatos OFX, PDF ou XLS.</span>
              <input
                type="file"
                class="btn mt-6 px-8 border-indigo-500 rounded-lg border-2 filter hover:drop-shadow-lg"
                placeholder="Navegar"
              >
              Navegar
            </div>
          </template>
        </Modal>
      </div>
    </div>

    <div class="border-t border-slate-200 dark:border-slate-700">
      <div class="max-w-2xl m-auto mt-16">
        <div class="text-center px-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 mb-4">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg
              class="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span class="ml-2">Add Event</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
