import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const isLoggedIn = ref(localStorage.getItem('auth') === 'true')

// Función para iniciar sesión con redirección
export function loginWithRedirect() {
  const router = useRouter()
  localStorage.setItem('auth', 'true')
  isLoggedIn.value = true
  router.replace('/dashboard')
}

// Función para cerrar sesión con redirección
export function logoutWithRedirect() {
  const router = useRouter()
  localStorage.removeItem('auth')
  isLoggedIn.value = false
  router.replace('/')
}

// Funciones simples sin redirección 
export function login() {
  localStorage.setItem('auth', 'true')
  isLoggedIn.value = true
}

export function logout() {
  localStorage.removeItem('auth')
  isLoggedIn.value = false
}
