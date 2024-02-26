/* eslint-disable eqeqeq */
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    // eslint-disable-next-line no-new-wrappers
    authorizedUserLogin: new String(''),
    currentUserIndex: {
      value: null
    }
  },
  getters: {
    getUsers: (state) => state.users,
    getAuthorizedUserLogin: (state) => state.authorizedUserLogin
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
        (x) => x.login == state.authorizedUserLogin.value
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
    }
  }
})
