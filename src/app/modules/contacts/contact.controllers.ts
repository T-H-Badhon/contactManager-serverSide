import { Request, Response } from 'express'
import catchAsync from '../../utilities/catchAsync'
import { contactServices } from './contact.services'
import response from '../../utilities/response'
import httpStatus from 'http-status'

const addContact = catchAsync(async (req: Request, res: Response) => {
  const photoDirectory = req.file?.path as string
  const payload = req.body

  const result = await contactServices.addContact(payload, photoDirectory)

  response(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Contact added successfully',
    data: result,
  })
})

const getContacts = catchAsync(async (req: Request, res: Response) => {
  const { searchTerm } = req.query

  const result = await contactServices.getContacts(searchTerm as string)

  response(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Contacts fetched successfully',
    data: result,
  })
})

const updateContact = catchAsync(async (req: Request, res: Response) => {
  const photoDirectory = req.file?.path as string
  const payload = req.body
  const id = req.params.id
  const result = await contactServices.updateContact(
    id,
    payload,
    photoDirectory,
  )

  response(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Contact updated successfully',
    data: result,
  })
})

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await contactServices.deleteContact(id)

  response(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Contact deleted successfully',
    data: result,
  })
})

export const contactControllers = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
}
