import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ContactosView from '../views/ContactosView.vue'
import ContactoDetalleView from '../views/ContactoDetalleView.vue'
import AgregarContactoView from '../views/AgregarContactoView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/contactos', component: ContactosView },
  { path: '/contactos/nuevo', component: AgregarContactoView },
  { path: '/contactos/:id', component: ContactoDetalleView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Protege rutas privadas
router.beforeEach((to, _, next) => {
  const isAuth = localStorage.getItem('auth') === 'true'
  const publicPaths = ['/']

  const isPublic = publicPaths.includes(to.path)

  if (!isPublic && !isAuth) {
    return next('/')
  }

  // Evita que usuarios logueados entren de nuevo al login
  if (to.path === '/' && isAuth) {
    return next('/dashboard')
  }

  next()
})

export default router
