<template>
  <div class="">
    <button class="button">
      +
    </button>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonComponent',
  components: {
  },
  props: {
  },
  data () {
    return { currentClass: 'button' }
  },
  methods: {
    changeColor (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background: none;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 25px;
}

.button:hover {
  background: #D58C51;
  border: 1px solid #D58C51;
}
</style>
