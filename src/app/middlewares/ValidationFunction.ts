import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'
import fs from 'fs'

const validate = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      })

      next()
    } catch (err) {
      if (req.file?.path) {
        fs.unlinkSync(req.file?.path)
      }
      next(err)
    }
  }
}

export default validate
