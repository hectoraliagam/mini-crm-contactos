<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Nombre</label>
      <input
        v-model="form.name"
        type="text"
        required
        class="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Correo</label>
      <input
        v-model="form.email"
        type="email"
        required
        class="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Teléfono</label>
      <input
        v-model="form.phone"
        type="text"
        required
        class="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    <button
      type="submit"
      class="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ContactoForm } from '@/models/Contacto'

const props = defineProps<{
  initialContacto?: ContactoForm
  onSubmit: (contacto: ContactoForm) => void
  buttonText?: string
}>()

const form = reactive<ContactoForm>({
  name: '',
  email: '',
  phone: ''
})

if (props.initialContacto) {
  Object.assign(form, props.initialContacto)
}

function handleSubmit() {
  props.onSubmit({ ...form })
}
</script>
