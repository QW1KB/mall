export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                // oldProduct.count += 1
                context.commit('addCount', oldProduct)
                resolve('当前商品数量+1')
            } else {
                payload.count = 1
                    // state.cartList.push(payload)
                context.commit('addToCount', payload)
                resolve('添加啦新的商品')

            }
        })
    }
}