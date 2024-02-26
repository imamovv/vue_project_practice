// import goods from './goods'
export default {
  state: {
    goodsInBasket: [

    ]
  },
  getters: {
    getBasketGoods: state => state.goodsInBasket
  },
  mutations: {
    // addGoodInBasket (state, value) {
    //   goods.state.goods.forEach(good => {
    //     if (value === good.id) {
    //       state.goodsInBasket.push(good)
    //     }
    //   })
    // },
    // removeGoodFromBasket (state, value) {
    //   state.goodsInBasket.splice(value, 1)
    // }
  },
  actions: {},
  modules: {}
}
