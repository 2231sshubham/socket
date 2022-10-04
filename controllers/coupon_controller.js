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