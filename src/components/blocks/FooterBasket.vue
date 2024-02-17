<template>
    <div class="main">
        <div class="main__info">
            <span class="main__info-price">{{ price }}</span>
            <p class="main__info-text">Заказ на сумму:</p>
        </div>
        <ButtonComponent isBasketFooter textShow buttonText="Оформить заказ" />
    </div>
</template>

<script>
// import { ref } from 'vue'
import ButtonComponent from '../ui/Button.vue'
export default {
  name: 'FooterBasketComponent',
  components: {
    ButtonComponent
  },
  props: {
    price: {
      type: String,
      default: 'цена в руб'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    align-items: center;
    justify-content: center;
    gap: 360px;
}

.main__info {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 16px;
}

.main__info-text {
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: uppercase;
}

.main__info-price {
    color: rgb(213, 140, 81);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
}
</style>
