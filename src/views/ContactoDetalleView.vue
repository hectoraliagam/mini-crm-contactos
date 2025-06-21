<template>
  <section class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold text-teal-700 mb-4">Editar Contacto</h2>
    <ContactForm v-if="contacto" :initialContacto="contacto" :onSubmit="editar" buttonText="Actualizar" />
    <p v-else>Cargando contacto...</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ContactForm from '@/components/ContactForm.vue'
import type { Contacto, State } from '@/stores'

const store = useStore<State>()
const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)

onMounted(() => {
  if (store.state.contactos.length === 0) {
    store.dispatch('cargarContactos')
  }
})

const contacto = computed(() =>
  store.state.contactos.find((c) => c.id === id)
)

function editar(actualizado: Contacto) {
  const contactosActualizados = store.state.contactos.map((c) =>
    c.id === id ? { ...c, ...actualizado } : c
  )
  store.commit('setContactos', contactosActualizados)
  router.push('/contactos')
}
</script>
