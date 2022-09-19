import { Express } from 'express'
import products from './Data/products.js'

const app = express()

app.get('/api/products', (req, res) => {
    res.json(products)
  })

app.get('/api/products/:id', (req, res) => {
    const prod = products.find((p)=>p._id === req.params.id)
    res.json(prod)
  })

  app.get('/', (req, res) => {
    res.json({'meg':'Hello world!'})
  })


app.listen(5000, console.log('Server is running on port 5000'));
