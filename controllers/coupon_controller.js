const { Coupons } = require('./database/models')

module.exports = async function addCoupon(params){
    try {
        const coupon = await Coupons.create(params)
        return coupon
    } catch (err) {
        throw err.toString();
    }
}

module.exports = async function deleteCoupon(params){
    try {
        const coupon_id = params
        await Coupons.destroy({
            where:{
                coupon_id
            }
        })
    } catch (err) {
        throw err.toString();
    }
}

module.exports = async function updateCoupon(params){
    try {
        const { coupon_id } = params.coupon_id
        const { data } = params.body
        const coupon = await Coupons.update(
            {...data},
            {
                where:{
                    coupon_id
                }
            }
        )
        return coupon
    } catch (err) {
        throw err.toString()
    }
}

module.exports = async function getAll(params){
    try {
        let {application_type} = params
        let data = await Coupons.findAll({
            where: application_type
        })
        return data
    } catch (err) {
        throw err.toString()
    }
}

module.exports = async function getOne(params){
    try {
        let {coupon_id} = params
        const data = await Coupons.find({
            where: coupon_id
        })
    } catch (err) {
        throw err.toString()
    }
}