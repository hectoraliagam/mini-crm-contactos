<template>
  <section class="min-h-screen bg-gray-50 px-4 py-8 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold text-teal-700 mb-8">Dashboard</h1>

    <!-- Tarjetas estadísticas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow border border-gray-200 text-center">
        <p class="text-gray-500 text-sm mb-2">Contactos cargados</p>
        <h2 class="text-4xl font-extrabold text-teal-600">{{ contactos.length }}</h2>
      </div>

      <!-- Tarjetas futuras -->
      <div class="bg-white p-6 rounded-lg shadow border border-gray-200 text-center opacity-50">
        <p class="text-gray-400 text-sm mb-2">Contactos añadidos hoy</p>
        <h2 class="text-2xl font-semibold text-gray-400">Próximamente</h2>
      </div>

      <div class="bg-white p-6 rounded-lg shadow border border-gray-200 text-center opacity-50">
        <p class="text-gray-400 text-sm mb-2">Ediciones recientes</p>
        <h2 class="text-2xl font-semibold text-gray-400">Próximamente</h2>
      </div>
    </div>

    <!-- Enlace acción -->
    <RouterLink
      to="/contactos"
      class="inline-block mt-8 text-teal-600 hover:text-teal-800 font-medium transition"
    >
      → Ver lista de contactos
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import type { State } from '@/stores'

const store = useStore<State>()

onMounted(() => {
  if (store.state.contactos.length === 0) {
    store.dispatch('cargarContactos')
  }
})

const contactos = computed(() => store.state.contactos)
</script>
