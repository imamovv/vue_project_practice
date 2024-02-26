import { createStore } from 'vuex'

import goods from './modules/goods'
import basket from './modules/basket'

export default createStore({
  state: {
    users: [],
    products: goods.state.goods,
    // eslint-disable-next-line no-new-wrappers
    authorizedUserLogin: new String(''),
    currentUserIndex: {
      value: null
    }
  },
  getters: {
    getUsers: (state) => state.users,
    getAuthorizedUserLogin: (state) => state.authorizedUserLogin,
    getProducts: (state) => state.products,
    getProduct: (state) => (id) => {
      return state.products.find((x) => x.id === id)
    },

    getIsProductInBasket: (state) => (id) => {
      return !!state.users[state.currentUserIndex.value].basket.find(
        (x) => x.id === id
      )
    },
    getBasketProducts: (state) => {
      return state.users[state.currentUserIndex.value].basket
    },
    getCountProductsInBasket: (state) => {
      return state.users[state.currentUserIndex.value].basket.length
    },
    getAllPricePoductsInBasket: (state) => {
      return state.users[state.currentUserIndex.value].basket.reduce(
        (total, item) => total + item.price,
        0
      )
    }
  },
  mutations: {
    setStoreUsers (state) {
      state.users = JSON.parse(localStorage.getItem('users'))
    },
    setAuthorizedUserLogin (state) {
      state.authorizedUserLogin.value = localStorage.getItem(
        'authorizedUserLogin'
      )
      state.currentUserIndex.value = state.users.findIndex(
        (x) => x.login === state.authorizedUserLogin.value
      )
    },
    registerUser (state, userData) {
      const userIndex = state.users.findIndex(
        (x) => x.login === userData.login
      )

      if (userIndex === -1) {
        state.users.push(userData)
        state.currentUserIndex.value = state.users.length - 1
      } else {
        const busket = state.users[userIndex].basket
        state.users[userIndex] = userData
        state.users[userIndex].basket = busket
        state.currentUserIndex.value = userIndex
      }
      state.authorizedUserLogin.value = userData.login
      localStorage.setItem(
        'authorizedUserLogin',
        state.authorizedUserLogin.value
      )
    },
    unloginUser (state) {
      state.authorizedUserLogin.value = ''
      localStorage.setItem(
        'authorizedUserLogin',
        state.authorizedUserLogin.value
      )
    },
    loginUser (state, param) {
      state.authorizedUserLogin.value = param.login
      const userIndex = state.users.findIndex((x) => x.login === param.login)
      state.currentUserIndex.value = userIndex
      state.users[userIndex].isAgree = param.isAgree
      localStorage.setItem('authorizedUserLogin', param.login)
    },
    addGoodInBasket (state, id) {
      state.users[state.currentUserIndex.value].basket.push(
        state.products.find((x) => x.id === id)
      )
    },

    deleteGoodFromBasket (state, id) {
      const basketIndex = state.users[
        state.currentUserIndex.value
      ].basket.findIndex((x) => x.id === id)
      state.users[state.currentUserIndex.value].basket.splice(basketIndex, 1)
    },
    clearBasket (state) {
      const basket = state.users[state.currentUserIndex.value].basket
      basket.splice(0, basket.length)
    }
  },
  modules: {
    goods,
    basket
  }
})
