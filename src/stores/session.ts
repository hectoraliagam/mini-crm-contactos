import { ref } from 'vue'

export const isLoggedIn = ref(localStorage.getItem('auth') === 'true')

export function login() {
  localStorage.setItem('auth', 'true')
  isLoggedIn.value = true
}

export function logout() {
  localStorage.removeItem('auth')
  isLoggedIn.value = false
}