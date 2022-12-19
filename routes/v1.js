const express = require('express');
const router = express.Router();
const service = require('../services/service');

router.get('/', async function (req, res, next) {
    res.json({ status: "ok!" });
});

router.get('/category', async function (req, res, next) {
    try {
        res.json(await service.getCategory());
    } catch (err) {
        console.error(`Error while getting category `, err.message);
        next(err);
    }
});

router.get('/product', async function (req, res, next) {
    try {
        res.json(await service.getProduct());
    } catch (err) {
        console.error(`Error while getting product `, err.message);
        next(err);
    }
});

module.exports = router;