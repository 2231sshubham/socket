const express = require('express')
const router = express.Router();
const { Coupons } = require('../controllers')

router.get('/all', async (req, res) => {
    try {
        const data = await Coupons.getAll({...req.params})
        res.send(data).status(200)
    } catch (err) {
        console.log(err.toString());
        res.status(500).send({
            status: "failed",
            msg: err.toString()
        })
    }
})

router.get('/', async (req, res) => {
    try { 
        const data = await Coupons.getOne({
            ...req.params
        })
    } catch (err) {
        console.log(err.toString());
        res.status(500).send({
            status: "failed",
            msg: err.toString()
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Coupons.addCoupon({...req.body})
        res.send(data).status(200)

    } catch (err) {
        console.log(err.toString())
        res.status(500).send({
            status: "failed",
            message: err.toString()
        })
    }
})

router.delete('/', async (req,res) => {
    try {
        const { coupon_id } = req.params
        await Coupons.deleteCoupon(coupon_id)
        res.send("Success").status(200)
    } catch (err) {
        console.log(err.toString())
        res.status(500).send({
            status: "failed",
            message: err.toString()
        })
    }
})

router.put('/', async (req,res) => {
    try {
        let { coupon_id } = req.params
        const data = { coupon_id, body: req.body }
        await Coupons.updateCoupon(data)
        res.send("Success").status(200)
    } catch (err) {
        console.log(err.toString())
        res.status(500).send({
            status: "failed",
            message: err.toString()
        })
    }
})