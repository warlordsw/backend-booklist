import express from 'express'
import bookRoutes from './routes/book.js'
import cors from 'cors'
const app = express()
app.use(
  cors({ origin: 'https://booklist-project.herokuapp.com/', credentials: true })
)

const port = process.env.port || 5000
app.use(express.json({ extended: false }))

app.use('/books', bookRoutes)

app.listen(port, () => {
  console.log('Listening port on 5000...')
})
