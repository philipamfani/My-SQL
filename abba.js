const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for cart and orders
let cart = [];
let orders = [];

// Get cart items
app.get('/cart', (req, res) => {
    res.json(cart);
});

// Add item to cart
app.post('/cart/add', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    cart.push({ name, price: parseFloat(price) });
    res.json({ message: 'Item added to cart', cart });
});

// Clear cart
app.post('/cart/clear', (req, res) => {
    cart = [];
    res.json({ message: 'Cart cleared', cart });
});

// Get cart total
app.get('/cart/total', (req, res) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    res.json({ total });
});

// Place order
app.post('/order', (req,
app.post
