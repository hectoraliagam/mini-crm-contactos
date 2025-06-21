# Mini CRM de Contactos

Este proyecto es una demostración profesional de un sistema **CRM básico** desarrollado completamente en el **frontend** utilizando **Vue 3**, **Vue Router**, **Vuex** y **Tailwind CSS**. Su propósito es mostrar habilidades sólidas en desarrollo de interfaces modernas, componentes reutilizables y arquitectura clara.

## Características

- Login automático simulado (sin backend, ideal para pruebas)
- Navegación protegida por rutas (redirección si no hay sesión activa)
- Vista principal (Dashboard) con estadísticas
- Listado de todos los contactos (consumidos desde una API externa)
- Visualización detallada de contacto individual
- Formulario de registro de contacto nuevo
- Componentes reutilizables como `ContactForm` y `ContactCard`
- Estado global con Vuex para manejar datos de contactos
- Estilos limpios y responsivos con Tailwind CSS

## Tecnologías usadas

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex 4](https://vuex.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) como bundler moderno
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) como fuente de datos mock

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/mini-crm-contactos.git
   cd mini-crm-contactos
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

## Estructura del Proyecto

```
src/
├── assets/
├── components/
│   ├── ContactCard.vue
│   └── ContactForm.vue
├── views/
│   ├── LoginView.vue
│   ├── DashboardView.vue
│   ├── ContactosView.vue
│   ├── ContactoDetalleView.vue
│   └── AgregarContactoView.vue
├── store/
│   └── index.ts
├── composables/
│   └── useAuth.ts
├── router/
│   └── index.ts
├── App.vue
├── main.ts
└── style.css
```

## Autenticación

- Se usa `localStorage` para simular el estado de sesión.
- La sesión se inicia automáticamente al acceder a la página.
- Si el usuario no está autenticado, no puede acceder a rutas privadas como `/dashboard`, `/contactos`, etc.
- La navegación está protegida mediante un `beforeEach` en el router.

## Estado global (Vuex)

- Los contactos se almacenan en el estado global.
- Se consumen desde la API `https://jsonplaceholder.typicode.com/users`.
- Se actualiza el estado con acciones y mutaciones estándar.

## Consideraciones finales

- Este proyecto es solo **frontend**. No hay base de datos ni backend real.
- Ideal para mostrar en portafolio personal o como base para integrar autenticación real, persistencia, validaciones avanzadas, etc.

## Autor

**Hector Aliaga**  
Desarrollador frontend con enfoque en soluciones modernas, estructuradas y escalables.
