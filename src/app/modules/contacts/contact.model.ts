import mongoose, { Schema } from 'mongoose'
import { TContact } from './contact.interface'

const contactSchema = new Schema<TContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    ProfilePhoto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Contact = mongoose.model('contact', contactSchema)
