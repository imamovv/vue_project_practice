<template>
  <div class="main">
    <CardProductComponent v-for="( cartData, index ) in prodCartData" v-bind:key="index" :title="cartData.title"
      :description="cartData.description" :price="cartData.price" :imageSource="cartData.imageSource" :line="true" />
  </div>
</template>

<script>
// import { ref } from 'vue'
import CardProductComponent from '../elements/CardProduct.vue'

export default {
  name: 'MainBasketComponent',
  components: {
    CardProductComponent
  },
  props: {
  },
  data () {
    return {
      prodCartData: [
        {
          title: 'Устрицы по рокфеллеровски',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
          price: '2 700 ₽',
          imageSource: require('@/assets/img/image0.png')
        },
        {
          title: 'Креветки по-королевски в лимонном соке',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
          price: '1 820 ₽',
          imageSource: require('@/assets/img/image2.png')
        },
        {
          title: 'Свиные ребрышки на гриле с зеленью',
          description: 'Не следует, однако забывать, что реализация намеченных плановых',
          price: '1 600 ₽',
          imageSource: require('@/assets/img/image1.png')
        }
      ]
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
</style>
