import { z } from 'zod'

const addContact = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string().optional(),
    phoneNumber: z.string({
      required_error: 'Phone Number is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
  }),
})

const updateContact = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
  }),
})

export const contactValidationSchemas = {
  addContact,
  updateContact,
}
