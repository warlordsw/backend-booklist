import express from 'express'
import bookRoutes from './routes/book.js'
import cors from 'cors'
const app = express()
app.use(
  cors({ origin: 'https://booklist-project.herokuapp.com/', credentials: true })
)

app.use(express.json({ extended: false }))

app.use('/books', bookRoutes)

app.listen(5000, () => {
  console.log('Listening port on 5000...')
})
