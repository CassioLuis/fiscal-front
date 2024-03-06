<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import router from './router'


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
    <div v-for="route of router.options.routes" class="flex gap-2 mb-2">
      <router-link class="mr-2 p-2 border bg-slate-200" v-for="chield of route.children" :to="`${route.path}/${chield.path}`">
        {{ route.name }} / {{ chield.meta.name }}
      </router-link> <br/>
    </div>

    <!-- SEM CHILDREN -->
    <!-- <div v-for="route of router.options.routes">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div> -->
    <!-- <router-link to="/efd-icms-ipi/entrada">ICMS / ENTRADA</router-link><br /><br />
    <router-link to="/efd-icms-ipi/saida">ICMS / SAIDA</router-link><br /><br />
    <router-link to="/efd-pis-cofins/entrada">PIS / ENTRADA</router-link><br /><br />
    <router-link to="/efd-pis-cofins/saida">PIS / SAIDA</router-link><br /><br /> -->

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
