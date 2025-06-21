<template>
  <section class="max-w-6xl mx-auto mt-6 px-4">
    <h2 class="text-2xl font-bold text-teal-600 mb-4">Lista de Contactos</h2>

    <!-- Estado de carga -->
    <div v-if="loading" class="text-gray-500 text-center py-8">Cargando contactos...</div>

    <!-- Lista de contactos -->
    <div v-else-if="contactos.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ContactCard
        v-for="c in contactos"
        :key="c.id"
        :contacto="c"
      />
    </div>

    <!-- Sin contactos -->
    <div v-else class="text-center text-gray-500 py-10">
      <p>No hay contactos registrados.</p>
      <RouterLink
        to="/contactos/nuevo"
        class="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
      >
        Agregar Contacto
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
// @ts-ignore
import { useStore } from 'vuex'
import type { State } from '@/stores'
import ContactCard from '@/components/ContactCard.vue'

const store = useStore<State>()
const loading = ref(true)

onMounted(async () => {
  if (store.state.contactos.length === 0) {
    await store.dispatch('cargarContactos')
  }
  loading.value = false
})

const contactos = computed(() => store.state.contactos)
</script>
