<template>
  <div class="main">
    <CardProductComponent v-for="( cartData, index ) in prodCartData" v-bind:key="index" :title="cartData.title"
      :description="cartData.description" :price="cartData.price" :imageSource="cartData.imageSource" />
  </div>
</template>

<script>
// import { ref } from 'vue'
import CardProductComponent from '../elements/CardProduct.vue'

export default {
  name: 'MainComponent',
  components: {
    CardProductComponent
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
          title: 'Свиные ребрышки на гриле с зеленью',
          description: 'Не следует, однако забывать, что реализация намеченных плановых',
          price: '1 600 ₽',
          imageSource: require('@/assets/img/image1.png')
        },
        {
          title: 'Креветки по-королевски в лимонном соке',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
          price: '1 820 ₽',
          imageSource: require('@/assets/img/image2.png')
        },
        {
          title: 'Устрицы по рокфеллеровски',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
          price: '2 700 ₽',
          imageSource: require('@/assets/img/image0.png')
        },
        {
          title: 'Устрицы по рокфеллеровски',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
          price: '2 700 ₽',
          imageSource: require('@/assets/img/image0.png')
        },
        {
          title: 'Свиные ребрышки на гриле с зеленью',
          description: 'Не следует, однако забывать, что реализация намеченных плановых',
          price: '1 600 ₽',
          imageSource: require('@/assets/img/image1.png')
        },
        {
          title: 'Креветки по-королевски в лимонном соке',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
          price: '1 820 ₽',
          imageSource: require('@/assets/img/image2.png')
        },
        {
          title: 'Устрицы по рокфеллеровски',
          description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
          price: '2 700 ₽',
          imageSource: require('@/assets/img/image0.png')
        }
      ]
    }
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 312px);
  // grid-template-rows: 50% 50%;
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
}
</style>
