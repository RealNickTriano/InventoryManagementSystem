const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

let data = [
    { 
      "id": 1,
      "price": 50,
      "name": "gun reform now tee", 
      "type": "t-shirt",
      "quantity": 0,
      "men": true,
      "women": false,
      "collection": "special",
      "thumbnail": "https://cdn.shopify.com/s/files/1/2166/8231/products/GUNREFORMSHIRT_800x.jpg?v=1653684958"
    },
    { 
        "id": 2,
        "price": 50,
        "name": "tf x mortal kombat raiden tee", 
        "type": "t-shirt",
        "quantity": 12,
        "men": true,
        "women": false,
        "collection": "tf x mortal kombat",
        "thumbnail": "https://cdn.shopify.com/s/files/1/2166/8231/products/TF22T32-34-MORTAL-KOMBAT-SS-TEE-C-BLACK_800x.jpg?v=1653513061"
    },
    { 
        "id": 3,
        "price": 50,
        "name": "im completely alone by hila klein", 
        "type": "t-shirt",
        "quantity": 0,
        "men": true,
        "women": false,
        "collection": "by hila klein",
        "thumbnail": "https://cdn.shopify.com/s/files/1/2166/8231/products/TF22T39-COMPLETELY-ALONE-SS-TEE-BLACK-FRONT_658162b2-e9c6-4d77-80cb-4277a6371e07_800x.jpg?v=1652223425"
    },
    { 
        "id": 4,
        "price": 70,
        "name": "handcuff necklace", 
        "type": "accessories",
        "quantity": 24,
        "men": false,
        "women": true,
        "collection": "none",
        "thumbnail": "https://cdn.shopify.com/s/files/1/2166/8231/products/TF21ACC27-HANDCUFFNECKLACE-A_1c9a3e91-5c03-4195-82ad-00ff209ea03e_800x.jpg?v=1652222299"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Teddy Fresh Items API</h1>')
})

app.get('/info', (req, res) => {
    res.send(`<p>This API has info for ${data.length} items</p>
        <p>${new Date()}</p>`)
})

app.get('/api/t-shirts', (req, res) => {
    const result = data.filter(item => item.type === "t-shirt")
    if (result.length !== 0)
    {
        console.log(result)
        res.json(result)
    }
    else {
        res.status(404).end()
    } 
})

app.get('/api/t-shirts/:id', (req, res) => {
    const id = Number(req.params.id)
    const result = data.find(item => item.id === id)
    if (result)
    {
        res.json(result)
    }
    else {
        res.status(404).end()
    }
})

app.get('/api/accessories', (req, res) => {
    const result = data.filter(item => item.type === "accessories")
    if (result.length !== 0)
    {
        console.log(result)
        res.json(result)
    }
    else {
        res.status(404).end()
    }
    
})

app.post('/api/t-shirts', (req, res) => {
    const id = Math.floor(Math.random() * 100000)
    const quantity = 0
    const men = false
    const women = false
    const collection = "none"
    // Check required missing fields
    if(!req.body.name)
    {
        return res.status(400).json({
            error: 'name missing'
        })
    }
    else if(!req.body.price)
    {
        return res.status(400).json({
            error: 'price missing'
        })
    }
    else if(!req.body.type)
    {
        return res.status(400).json({
            error: 'type missing'
        })
    }
    else if(!req.body.thumbnail)
    {
        return res.status(400).json({
            error: 'thumbnail missing'
        })
    }
    // Set Defaults
    if(!req.body.men)
    {
        const men = false
        const women = true
    }
    if(!req.body.women)
    {
        const men = true
        const women = false
    }
    
    // Check if already created
    if(data.filter(item => item.name === req.body.name).length)
    {
        console.log('name already exists')
        return res.status(400).json({
            error: 'name already exists'
        })
    }

    const post = {
        id: id,
        price:req.body.price,
        name: req.body.name, 
        type: req.body.type,
        quantity: req.body.quantity || quantity,
        men: req.body.men || false,
        women:req.body.women || true,
        collection: req.body.collection || collection,
        thumbnail: req.body.thumbnail
    }

    // Add new post
    data.concat(post)

    // Send post that was added
    res.json(post)
    
})

app.delete('/api/t-shirts/:id', (req, res) => {
    const id = Number(req.params.id)

    // Remove from data
    data = data.filter(item => item.id !== id)
    // Send 200 OK message
    res.status(204).end()
})

app.put('/api/t-shirts/:id', (req, res) => {
    const id = Number(req.params.id)

    data = data.map(item => {
        if (item.id === id)
        {
            console.log(`Changing name: ${req.body.name}`)
            return {
                ...item, 
                name: req.body.name
            }
        }
        else {
            return item
        }
    })

    res.status(200).end()

    })
    
    

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`)
})