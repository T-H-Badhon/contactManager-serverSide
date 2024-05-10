import httpStatus from 'http-status'
import { AppError } from '../../errors/AppError'
import { fileUpload } from '../../utilities/fileUploader'
import { TContact } from './contact.interface'
import { Contact } from './contact.model'

const addContact = async (
  payload: Partial<TContact>,
  photoDirectory: string,
) => {
  const photoLink = (await fileUpload.upload_to_cloudinary(
    photoDirectory,
  )) as string

  if (!photoLink) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Profile photo required')
  }
  payload.ProfilePhoto = photoLink

  const result = await Contact.create(payload)

  return result
}

const getContacts = async (searchTerm: string) => {
  let searchValue = ''

  if (searchTerm) {
    searchValue = searchTerm
  }

  const result = await Contact.find({
    $or: ['name', 'email', 'phoneNumber', 'address'].map((field) => ({
      [field]: { $regex: searchValue, $options: 'i' },
    })),
  })

  return result
}

const updateContact = async (
  id: string,
  payload: Partial<TContact>,
  photoDirectory: string,
) => {
  const contact = await Contact.findById({ _id: id })

  if (!contact) {
    throw new AppError(httpStatus.NOT_FOUND, 'Contact not found')
  }

  if (photoDirectory) {
    const photoLink = (await fileUpload.upload_to_cloudinary(
      photoDirectory,
    )) as string

    if (!photoLink) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Profile photo  update failed')
    }
    payload.ProfilePhoto = photoLink
  }

  const result = await Contact.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })

  return result
}

const deleteContact = async (id: string) => {
  const result = await Contact.deleteOne({ _id: id })

  if (result.deletedCount !== 1 && result.acknowledged === true) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Contact not found')
  } else if (result.acknowledged !== true) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Contact deletion failed')
  }
}

export const contactServices = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
}
