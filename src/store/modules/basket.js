export default {
  state: {
    goodsInBasket: [
      {
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700,
        imageSource: require('@/assets/img/image0.png')
      },
      {
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820,
        imageSource: require('@/assets/img/image2.png')
      },
      {
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600,
        imageSource: require('@/assets/img/image1.png')
      }
    ]
  },
  getters: {
    getBasketGoods: state => state.goodsInBasket
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
