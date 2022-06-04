const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

/* Products */
app.get('/products', (req, res) => {
    // Respond with All products
    console.log('Accessing all products');
    res.send('products');
})

app.get('/products/query', (req, res) => {
    // Respond with products that match query
    const itemName = req.query.itemName;
    const department = req.query.department;
    const brand = req.query.brand;
    const itemId = req.query.itemId;
    
    const query = {
        itemName: itemName,
        department: department || "",
        brand: brand || "",
        itemId: itemId || ""
    }

    res.json(query)
})

/* Orders */
app.get('/orders', (req, res) => {
    // Respond with All orders
    console.log('Accessing all orders');
    res.send('orders');
})

app.get('/orders/query', (req, res) => {
    // Respond with orders that match query
    const orderID = req.query.orderId;
    const pastOrders = (req.query.pastOrders === 'true');
    const futureOrders = (req.query.futureOrders === 'true');
    
    const query = {
        orderID: orderID,
        pastOrders: pastOrders || false,
        futureOrders: futureOrders || false
    }

    res.json(query)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
