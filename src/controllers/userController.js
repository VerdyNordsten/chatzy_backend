const userModel = require("../models/userModel")
const createPagination = require("../utils/createPagination")
const { success, failed } = require("../utils/createResponse")
// Import upload google
const { updatePhoto, uploadPhoto, deletePhoto } = require("../config/googleDrive.config")

module.exports = {
  list: async (req, res) => {
    try {
      const { search, page, limit } = req.query
      const count = await userModel.countAll()
      const paging = createPagination(count.rows[0].count, page, limit)
      const users = await userModel.selectAll(paging, search)
      success(res, {
        code: 200,
        payload: users.rows,
        message: "Select List User Success",
        // pagination: paging.response,
      })
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      })
    }
  },

  detail: async (req, res) => {
    try {
      const { id } = req.params
      const user = await userModel.findBy("id", id)
      if (!user.rowCount) {
        failed(res, {
          code: 404,
          payload: `User with Id ${id} not found`,
          message: "Select Detail User Failed",
        })
        return
      }
      success(res, {
        code: 200,
        payload: user.rows[0],
        message: "Select Detail User Success",
      })
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      })
    }
  },

  updateProfile: async (req, res) => {
    try {
      const { id } = req.params
      const user = await userModel.findBy("id", id)
      if (!user.rowCount) {
        failed(res, {
          code: 404,
          payload: `User with Id ${id} not found`,
          message: "Update User Failed",
        })
        return
      }
      await userModel.updateById(id, req.body)
      success(res, {
        code: 200,
        payload: null,
        message: "Update User Success",
      })
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      })
    }
  },

  updatePhoto: async (req, res) => {
    try {
      const { id } = req.params
      const user = await userModel.findBy("id", id)
      if (!user.rowCount) {
        if (req.file) {
          deletePhoto(req.file.id)
        }
        res.status(404).json({
          code: 404,
          payload: `User with Id ${id} not found`,
          message: "Update User Photo Failed",
        })
        return
      }
      const oldPhoto = user.rows[0].photo
      console.log(oldPhoto)
      if (req.file) {
        try {
          if (oldPhoto != null && oldPhoto != "" && oldPhoto != "undefined") {
            const oldPhotoId = oldPhoto.split("=")[1]
            const updateResult = await updatePhoto(req.file, oldPhotoId)
            const parentPath = process.env.GOOGLE_DRIVE_PHOTO_PATH
            const newPhotoId = parentPath.concat(updateResult.id)
            await userModel.changePhoto(user.rows[0].id, newPhotoId)
          } else {
            const uploadResult = await uploadPhoto(req.file)
            const parentPath = process.env.GOOGLE_DRIVE_PHOTO_PATH
            const newPhotoId = parentPath.concat(uploadResult.id)
            await userModel.changePhoto(user.rows[0].id, newPhotoId)
          }
          res.status(200).json({
            code: 200,
            payload: null,
            message: "Update User Photo Success",
          })
        } catch (error) {
          console.log(error)
          res.status(500).json({
            code: 500,
            payload: "Failed to update user photo",
            message: "Internal Server Error",
          })
        }
      } else {
        res.status(200).json({
          code: 200,
          payload: null,
          message: "Update User Photo Success",
        })
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      })
    }
  },
}
