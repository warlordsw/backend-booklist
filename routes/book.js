import express from 'express'
import {
  createBook,
  getAllBooks,
  removeSpecificBook,
  removeAll,
  newMessage,
} from '../controller/book_controller.js'

const router = express.Router()

router.get('/localfile', getAllBooks)
router.post('/localfile', createBook)
router.post('/localfile/removespecific', removeSpecificBook)
router.post('/localfile/removeall', removeAll)
router.get('/deneme', newMessage)

export default router
