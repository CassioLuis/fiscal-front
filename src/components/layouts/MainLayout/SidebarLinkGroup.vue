<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()

const props = defineProps<{
  routes: Array<any>
}>()

const routesRef = ref(props.routes)
const basePathRef = ref(router.currentRoute)

function navigate (basePath: any, childrenPath: any) {
  !childrenPath ? router.push(basePath) : router.push(`${basePath}/${childrenPath}`)

  routesRef.value.forEach(module => {
    module.routes.forEach((route: any) => {
      if (route.path === basePath) return
      route.meta.groupOpen = false
    })
  })
}

</script>

<template>
  <div class="space-y-8">
    <div
      v-for="(group, groupIdx) of routesRef"
      :key="groupIdx"
    >
      <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
        <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6">•••</span>
        <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">{{ group.module }}</span>
      </h3>

      <ul class="mt-3">
        <li
          v-for="(route, routeIdx) of group.routes"
          :key="routeIdx"
          class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
          :class="{ 'bg-slate-900': basePathRef.matched[0].path === route.path }"
        >
          <div
            class="cursor-pointer block text-slate-200 truncate transition duration-150"
            @click.prevent="route.meta.groupOpen = !route.meta.groupOpen; route.children ? null : navigate(route.path, '')"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg
                  class="shrink-0 h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="fill-current"
                    :class="
                      basePathRef.matched[0].path === route.path
                        ? 'text-indigo-500'
                        : 'text-slate-400'
                    "
                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                  />
                  <path
                    class="fill-current"
                    :class="
                      basePathRef.matched[0].path === route.path
                        ? 'text-indigo-600'
                        : 'text-slate-600'
                    "
                    d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                  />
                  <path
                    class="fill-current"
                    :class="
                      basePathRef.matched[0].path === route.path
                        ? 'text-indigo-200'
                        : 'text-slate-400'
                    "
                    d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                >
                  {{ route.name }}
                </span>
              </div>
              <!-- Arrow Icon -->
              <div
                v-if="route.children"
                class="flex shrink-0 ml-2"
              >
                <svg
                  class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                  :class="route.meta.groupOpen && 'rotate-180'"
                  viewBox="0 0 12 12"
                >
                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                </svg>
              </div>
            </div>
          </div>
          <div
            v-if="route.children"
            class="lg:hidden lg:sidebar-expanded:block 2xl:block"
          >
            <ul
              :class="!route.meta.groupOpen && 'hidden'"
              class="pl-9 mt-1"
            >
              <router-link
                v-for="(childRoute, idx) of route.children"
                :key="idx"
                :to="`${route.path}/${childRoute.path}`"
                v-slot="{ href, isExactActive }"
              >
                <li class="mb-1 last:mb-0">
                  <a
                    class="block transition duration-150 truncate"
                    :class=" isExactActive ? 'text-indigo-500': 'text-slate-400 hover:text-slate-200'"
                    :href="href"
                    @click.prevent="navigate(route.path, childRoute.path)"
                  >
                    <span
                      class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                    >
                      {{ childRoute.meta.name }}
                    </span>
                  </a>
                </li>
              </router-link>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
