<template>
  <section class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold text-teal-700 mb-4">Agregar Nuevo Contacto</h2>
    <ContactForm :onSubmit="agregar" buttonText="Guardar Contacto" />
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ContactForm from '@/components/ContactForm.vue'
import type { State } from '@/stores'
import type { Contacto } from '@/models/Contacto'
import type { ContactoForm } from '@/models/Contacto'

const store = useStore<State>()
const router = useRouter()

function agregar(contacto: ContactoForm) {
  const nuevoContacto: Contacto = {
    ...contacto,
    id: Date.now(),
    username: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    },
    company: {
      name: ''
    }
  }

  const nuevos = [...store.state.contactos, nuevoContacto]
  store.commit('setContactos', nuevos)
  router.push('/contactos')
}
</script>
