const express = require('express');
const { get, add, update } = require('../models/cart');

const app = express.Router();


app.get('/:userId', (req, res, next) => {
    get(req.params.userId)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

<<<<<<< HEAD
app.post('/:userId', (req, res, next) => {
    add(req.params.userId, req.body.productId, +req.body.quantity)
    .then(x=> res.status(201).send(x))
    .catch(next);
=======
app.post('/:userId', (req, res) => {
    res.send(add(req.params.userId, +req.body.productId, +req.body.quantity));
>>>>>>> d5e7c85e84c21e10b72fe00fea07f7497c92f7cf
});

app.patch('/:userId/:productId/:quantity', (req, res, next) => {
    update(req.params.userId, req.params.productId, +req.params.quantity)
    .then(x=> res.status(200).send(x))
    .catch(next);
});

module.exports = app;