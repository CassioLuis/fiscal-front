<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'


const { currentRoute } = useRouter()

const layout: any = computed(() => currentRoute.value.meta.layout ?? 'DefaultLayout')

</script>

<template>
  <div>
    <!-- COM CHILDREN -->
    <!-- <router-link to="/efd-icms-ipi/entrada">ICMS/entrada</router-link><br />
    <router-link to="/efd-icms-ipi/saida">ICMS/saida</router-link><br /><br />
    <router-link to="/efd-pis-cofins/entrada">PIS/entrada</router-link><br />
    <router-link to="/efd-pis-cofins/saida">PIS/saida</router-link><br /><br /><br />
    <router-link to="/efd-pis-cofins2/entrada">PIS2/entrada</router-link><br />
    <router-link to="/efd-pis-cofins2/saida">PIS2/saida</router-link><br /><br /> -->

    <!-- SEM CHILDREN -->
    <router-link to="/efd-icms-ipi">ICMS</router-link><br /><br />
    <router-link to="/efd-pis-cofins">PIS</router-link><br /><br />
    <router-link to="/efd-pis-cofins2">PIS2</router-link><br /><br />
    <router-link to="/efd-pis-cofins3">PIS3</router-link><br /><br />

    <!-- NAO MUDA -->
    <p>
    <h1 class="font-semibold">VIEWS</h1><br />
    <router-view></router-view>
    </p>
  </div>
  <!-- <component :is="layout">
    <router-view />
  </component> -->
</template>
