import { createStore } from 'vuex'
import axios from 'axios'
import type { Contacto } from '@/models/Contacto'

export interface State {
  contactos: Contacto[]
}

const store = createStore<State>({
  state: (): State => ({
    contactos: []
  }),
  mutations: {
    setContactos(state, contactos: Contacto[]) {
      state.contactos = contactos
    }
  },
  actions: {
    async cargarContactos({ commit }) {
      const res = await axios.get<Contacto[]>('https://jsonplaceholder.typicode.com/users')
      commit('setContactos', res.data)
    }
  },
  getters: {
    getContactoPorId: (state) => (id: number) => {
      return state.contactos.find((c: Contacto) => c.id === id)
    }
  }
})

export default store
