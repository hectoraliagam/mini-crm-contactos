<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
    <!-- Navbar solo si está autenticado -->
    <header v-if="isLoggedIn" class="bg-white shadow-md">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-teal-600">Mini CRM Contactos</h1>
        <ul class="flex space-x-4 text-sm font-medium items-center">
          <li>
            <RouterLink
              to="/dashboard"
              class="text-gray-600 hover:text-teal-600 transition"
              active-class="text-teal-700 font-semibold"
            >Inicio</RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contactos"
              class="text-gray-600 hover:text-teal-600 transition"
              active-class="text-teal-700 font-semibold"
            >Todos los Contactos</RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contactos/nuevo"
              class="text-gray-600 hover:text-teal-600 transition"
              active-class="text-teal-700 font-semibold"
            >Agregar Contacto</RouterLink>
          </li>
          <li>
            <button
              @click="handleLogout"
              class="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1 max-w-5xl mx-auto w-full p-4">
      <RouterView />
    </main>

    <!-- Footer solo si está autenticado -->
    <footer v-if="isLoggedIn" class="text-center text-sm text-gray-400 py-6 border-t mt-4">
      © {{ year }} Hector Aliaga — Mini CRM en Vue 3
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { isLoggedIn, logout as doLogout } from '@/composables/useAuth'

const year = new Date().getFullYear()
const router = useRouter()

function handleLogout() {
  doLogout()
  router.push('/')
}
</script>

