<template>
  <div class="main">
    <div class="main__header">
        <HeaderProductComponent/>
    </div>
    <MainProduct/>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import HeaderProductComponent from '@/components/blocks/HeaderProduct.vue'
import MainProduct from '@/components/blocks/MainProduct.vue'

export default {
  name: 'ProductPage',
  components: {
    MainProduct,
    HeaderProductComponent
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    return {
      good: computed(() => store.getters.getGoodById(parseInt(route.params.id)))
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-image: url( '../assets/img/bgProductPage.svg' );
  padding-bottom: 45px;
  height: calc(100vh - 50px);
}

.main__header {
    z-index: 1;
    position: fixed;
    width: 100%;
    padding-top: 54px;
    padding-bottom: 50px;
}

</style>
