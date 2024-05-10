import { Router } from 'express'
import { contactRoutes } from '../modules/contacts/contact.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/contacts',
    route: contactRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
