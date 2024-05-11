import { Router } from 'express'
import { contactControllers } from './contact.controllers'
import { fileUpload } from '../../utilities/fileUploader'
import { formDataModifier } from '../../middlewares/FormDataModifier'
import validate from '../../middlewares/ValidationFunction'
import { contactValidationSchemas } from './contact.validationSchema'

const router = Router()

router.post(
  '/add',
  fileUpload.upload.single('file'),
  formDataModifier(),
  validate(contactValidationSchemas.addContact),
  contactControllers.addContact,
)

router.get('/', contactControllers.getContacts)

router.patch(
  '/update/:id',
  fileUpload.upload.single('file'),
  formDataModifier(),
  validate(contactValidationSchemas.updateContact),
  contactControllers.updateContact,
)

router.patch(
  '/change-favourite-status/:id',
  contactControllers.changeFavouriteStatus,
)

router.delete('/delete/:id', contactControllers.deleteContact)

export const contactRoutes = router
