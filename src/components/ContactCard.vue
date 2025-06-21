<template>
  <div class="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
    <h2 class="text-xl font-semibold text-gray-800 mb-1">{{ contacto.name }}</h2>
    <p class="text-sm text-gray-600">
      <span class="font-medium">Correo:</span> {{ contacto.email }}
    </p>
    <p class="text-sm text-gray-600">
      <span class="font-medium">Teléfono:</span> {{ contacto.phone }}
    </p>

    <router-link
      :to="`/contactos/${contacto.id}`"
      class="mt-3 inline-block text-teal-600 hover:text-teal-800 text-sm font-medium"
    >
      Ver detalles →
    </router-link>
  </div>
</template>

<script setup lang="ts">
interface Contacto {
  id: number
  name: string
  email: string
  phone: string
}

defineProps<{ contacto: Contacto }>()
</script>