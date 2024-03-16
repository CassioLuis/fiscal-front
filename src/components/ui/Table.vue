<script setup lang="ts">
import { ref } from 'vue'
import { TableItem } from '.'


const headers = ['Data', 'Descrição', 'Documento', 'Valor', 'Saldo']

const transactions = ref([
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "02759941124",
    "valor": 84.75,
    "saldo": -19258.83
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "04300302154",
    "valor": 15.85,
    "saldo": -19242.98
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "21765910000135",
    "valor": 109.50,
    "saldo": -19133.48
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "06446793103",
    "valor": 139.40,
    "saldo": -18994.08
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "05836520186",
    "valor": 57.15,
    "saldo": -18936.93
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "70442069138",
    "valor": 115.00,
    "saldo": -18821.93
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX SICREDI",
    "documento": "11235946193",
    "valor": 44.75,
    "saldo": -18777.18
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "03830749163",
    "valor": 27.75,
    "saldo": -18749.43
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "04045201114",
    "valor": 85.35,
    "saldo": -18664.08
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX SICREDI",
    "documento": "35587200833",
    "valor": 22.65,
    "saldo": -18641.43
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "70390140171",
    "valor": 48.36,
    "saldo": -18593.07
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "05601456160",
    "valor": 176.60,
    "saldo": -18416.47
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "06289727176",
    "valor": 19.85,
    "saldo": -18396.62
  },
  {
    "data": "02/10/2023",
    "descricao": "PAGAMENTO PIX",
    "documento": "05795291188",
    "valor": -200.00,
    "saldo": -18596.62
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "98538829149",
    "valor": 9.60,
    "saldo": -18587.02
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "98538829149",
    "valor": 9.60,
    "saldo": -18577.42
  },
  {
    "data": "02/10/2023",
    "descricao": "RECEBIMENTO PIX",
    "documento": "05998482190",
    "valor": 30.00,
    "saldo": -18547.42
  },
])
</script>

<template>
  <div class="bg-white dark:bg-slate-900">
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full dark:text-slate-300">
          <!-- Table header -->
          <thead
            class="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700"
          >
            <tr>
              <th
                v-for="(header, idx) of headers"
                :key="idx"
                class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
              >
                <div class="font-semibold text-left">
                  {{ header }}
                </div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody
            class="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700"
          >
            <TableItem
              v-for="(transaction, idx) in transactions"
              :key="idx"
              :transaction="transaction"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
