<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useDark } from '@vueuse/core'
import { chartColors } from './ChartjsConfig'

import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js'
import 'chartjs-adapter-moment'

// Import utilities
import { formatValue } from '@/utils/Utils'
import moment from 'moment'

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip)

const props = defineProps<{
  data: any,
  width: any,
  height: any
}>()

const canvas = ref<any>(null)
// const legend = ref(null)

let chart: any = null

const darkMode = useDark()
const { gridColor, tooltipBodyColor, tooltipBgColor, tooltipBorderColor, tooltipTitleColor } = chartColors

onMounted(() => {
  const ctx = canvas.value
  chart = new Chart(ctx, {
    type: 'line',
    data: props.data,
    options: {
      layout: {
        padding: {
          top: 16,
          bottom: 16,
          left: 20,
          right: 20,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          border: {
            display: false,
          },
          grid: {
            drawTicks: false,
            color: darkMode.value ? gridColor.dark : gridColor.light,
          },
          ticks: {
            maxTicksLimit: 2,
            display: false,
          },
        },
        x: {
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
          },
          display: false,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: ([context]) => moment(context.label, 'MMM D, YYYY, h:mm:ss a').format('DD/MM/YYYY'),
            label: (context) => formatValue(context.parsed.y),
          },
          titleColor: darkMode.value ? tooltipTitleColor.dark : tooltipTitleColor.light,
          bodyColor: darkMode.value ? tooltipBodyColor.dark : tooltipBodyColor.light,
          backgroundColor: darkMode.value ? tooltipBgColor.dark : tooltipBgColor.light,
          borderColor: darkMode.value ? tooltipBorderColor.dark : tooltipBorderColor.light,
        },
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: 'nearest',
      },
      maintainAspectRatio: false,
    },
  })
})

onUnmounted(() => chart.destroy())

watch(() => darkMode.value, () => {
  if (darkMode.value) {
    chart.options.scales.y.grid.color = gridColor.dark
    chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.dark
    chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.dark
    chart.options.plugins.tooltip.borderColor = tooltipBorderColor.dark
    chart.options.plugins.tooltip.titleColor = tooltipTitleColor.dark
  } else {
    chart.options.scales.y.grid.color = gridColor.light
    chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.light
    chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.light
    chart.options.plugins.tooltip.borderColor = tooltipBorderColor.light
    chart.options.plugins.tooltip.titleColor = tooltipTitleColor.light
  }
  chart.update('none')
})

</script>

<template>
  <canvas
    ref="canvas"
    :data="data"
    :width="width"
    :height="height"
  />
</template>
