<template>
    <router-view/>
  </template>
<script>
import { useStore } from 'vuex'
import { watch } from 'vue'
export default {
  name: 'App',
  components: {
  },
  props: {
  },
  setup () {
    const store = useStore()
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]))
    } else {
      store.commit('setStoreUsers')
    }

    watch(
      store.getters.getUsers,
      () => {
        if (
          // eslint-disable-next-line eqeqeq
          JSON.stringify(store.getters.getUsers) !=
          localStorage.getItem('users')
        ) {
          localStorage.setItem('users', JSON.stringify(store.getters.getUsers))
        }
      },
      { deep: true }
    )

    if (!localStorage.getItem('authorizedUserLogin')) {
      localStorage.setItem('authorizedUserLogin', '')
    } else {
      store.commit('setAuthorizedUserLogin')
    }
  }
}
</script>
  <style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  </style>
