export interface Contacto {
  id: number
  name: string
  email: string
  phone: string
  username: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  company: {
    name: string
  }
}

export type ContactoForm = Pick<Contacto, 'name' | 'email' | 'phone'>