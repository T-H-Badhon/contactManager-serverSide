import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'
import { config } from '../config/config'

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + file.originalname)
  },
})

const upload = multer({ storage: storage })

const upload_to_cloudinary = async (path: string) => {
  if (!path) {
    return
  }
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: uniqueSuffix },
      (error, result) => {
        fs.unlinkSync(path)
        if (error) {
          reject(error)
        } else {
          resolve(result?.secure_url)
        }
      },
    )
  })
}

export const fileUpload = {
  upload,
  upload_to_cloudinary,
}
