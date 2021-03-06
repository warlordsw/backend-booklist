import fs from 'fs'

export const createBook = (req, res) => {
  const book = req.body
  console.log('createBook fonksiyonu', book)
  let data = JSON.stringify(book)
  fs.writeFile('saveBooks.json', data, (err) => {
    if (err) throw err
    res.status(200).send({ status: 'success' })
    //console.log(`data saved`)
  })
}

export const getAllBooks = (req, res) => {
  fs.readFile('saveBooks.json', (err, data) => {
    if (err.code === 'ENOENT') {
      return
    }
    let allBooks = JSON.parse(data)
    res.status(200).json(allBooks)
    //console.log('read')
  })
}

export const removeSpecificBook = (req, res) => {
  const book = req.body
  console.log('removeBook fonksiyonu', book)
  let data = JSON.stringify(book)
  fs.writeFile('saveBooks.json', data, (err) => {
    if (err) throw err
    res.status(200).send({ status: 'success' })
    //console.log(`data removed`)
  })
}

export const removeAll = (req, res) => {
  const book = req.body
  let data = JSON.stringify(book)
  fs.writeFile('../saveBooks.json', data, (err) => {
    if (err) throw err
    res.status(200).send({ status: 'success' })
    //console.log(`all data removed`)
  })
}

export const newMessage = (req, res) => {
  res.status(200).send('Hello world')
}
