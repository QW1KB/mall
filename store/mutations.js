export default {
    addCount(state, payload) {
        payload.count++
    },
    addToCount(state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    }
}