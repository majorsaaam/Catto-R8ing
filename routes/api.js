const express = require('express');
const router = express.Router();
const Cat = require('../models/cats');

/* these are examples... just for setting up & testing */
router.get('/cats', (req, res, next) => {
    Cat.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/cats', (req, res, next) => {
    if(req.body.action) {
        Cat.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    } else {
        res.json({
            error: "The field is empty"
        })
    }
});

router.delete('/cats/:id', (req, res, next) => {
    Cat.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;