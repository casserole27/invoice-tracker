const express = require('express');
const router = express.Router();

let items = []; //In-memory data store

// GET /items
router.get('/', (req, res) => {
    res.json(items);
});

// POST /items
router.post('/', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// GET /items/:id
router.get('/:id', (req, res) => {
    const item = items. find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// PUT /items/:id
router.put('/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex !== -1) {
        items[itemIndex] = req.body;
        res.json(items[itemIndex]);
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE /items/:id
router.delete('/', (req, res) => {
    const name = req.body.name;
    const itemIndex = items.findIndex(i => i.name === name);
    if (itemIndex !== -1){
        items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Item not found');
    }
});

module.exports = router;