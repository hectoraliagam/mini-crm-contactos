<template>
  <section class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold text-teal-700 mb-4">Editar Contacto</h2>
    <ContactForm
      v-if="contacto"
      :initialContacto="contacto"
      :onSubmit="editar"
      buttonText="Actualizar"
    />
    <p v-else>Cargando contacto...</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// @ts-ignore
import { useStore } from 'vuex'
import ContactForm from '@/components/ContactForm.vue'
import type { State } from '@/stores'
import type { Contacto, ContactoForm } from '@/models/Contacto'

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
  store.state.contactos.find((c: Contacto) => c.id === id)
)

function editar(actualizado: ContactoForm) {
  const contactosActualizados = store.state.contactos.map((c: Contacto) =>
    c.id === id ? { ...c, ...actualizado } : c
  )
  store.commit('setContactos', contactosActualizados)
  router.push('/contactos')
}
</script>
