import { z } from 'zod'

const addContact = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string().optional(),
    phoneNumber: z
      .string({
        required_error: 'Phone Number is required',
      })
      .min(11, { message: 'Please provide 11 digit Contact No.' })
      .max(11, { message: 'Please provide 11 digit Contact No.' })
      .regex(/^\d+$/, {
        message: 'Phone number must contain only numeric characters',
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
    phoneNumber: z
      .string()
      .min(11, { message: 'Please provide 11 digit Contact No.' })
      .max(11, { message: 'Please provide 11 digit Contact No.' })
      .regex(/^\d+$/, {
        message: 'Phone number must contain only numeric characters',
      })
      .optional(),
    address: z.string().optional(),
  }),
})

export const contactValidationSchemas = {
  addContact,
  updateContact,
}
