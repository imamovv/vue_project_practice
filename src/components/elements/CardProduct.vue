<template>
  <div class="card">
    <div class="card__info">
      <img class="card__image" :src="imageSource" alt="image.png">
      <h2 class="card__title">{{ title }}</h2>
      <h3 class="card__description">{{ description }}</h3>
    </div>
    <div class="card__footer">
      <div class="card__price">
        <span>{{ price }}</span>
      </div>
      <ButtonComponent />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import ButtonComponent from '../ui/Button.vue'

export default {
  name: 'CardProductComponent',
  components: {
    ButtonComponent
  },
  props: {
    title: {
      type: String,
      default: 'Название блюда'
    },
    description: {
      type: String,
      default: 'Описание блюда'
    },
    price: {
      type: String,
      default: 'Цена товара'
    },
    imageSource: {
      type: String,
      default: 'default'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #D58C51;
  width: 312px;
  flex-shrink: 0;
}

.card__image {
  width: 270px;
  height: 271px;
  flex-shrink: 0;
  padding-bottom: 30px;;
}

.card__info {
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 13px
}

.card__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 169px;
  padding-bottom: 36px
}

.card__title {
  color: #FFF;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.card__description {
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card__price {
  color: #FFF;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.card:hover .card__title {
  color: #D58C51;
}

.card:hover .card__description {
  color: #D58C51;
}

.card:hover .card__price {
  color: #D58C51;
}
</style>
