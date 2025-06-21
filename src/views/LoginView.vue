<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-gray-200">
      <h1 class="text-2xl font-bold text-center text-teal-600 mb-4">Demo Mini CRM</h1>

      <p class="text-sm text-gray-500 text-center mb-6">
        Esta es una demostración. El inicio de sesión es automático, no se requieren credenciales reales.
      </p>

      <div class="flex justify-center items-center gap-2 text-teal-600">
        <svg class="animate-spin h-5 w-5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10"
            stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span class="text-sm">Iniciando sesión automática...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { login, isLoggedIn } from '@/composables/useAuth'

const router = useRouter()

onMounted(() => {
  if (isLoggedIn.value) {
    router.replace('/dashboard')
  } else {
    setTimeout(() => {
      login()
      router.replace('/dashboard')
    }, 1000)
  }
})
</script>
