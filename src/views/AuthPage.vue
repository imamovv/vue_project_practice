<!-- eslint-disable eqeqeq -->
<template>
  <div class="main">
    <form action="" class="form">
        <p class="form__toggle"
        @click="isAuth = !isAuth">
            {{ isAuth ? 'Зарегистрироваться' : 'Авторизоваться' }}
        </p>
        <div class="form__elements">
        <h2 class="form__title">
            {{ isAuth ? 'ВХОД' : 'РЕГИСТРАЦИЯ' }}
        </h2>
        <input
            class="form__input"
            type="text"
            placeholder="Логин"
            v-model="login"
        />
        <p class="error">
            {{ isShowLoginPswError ? loginErrorTxt :  '' }}&nbsp;
        </p>
        <input
            class="form__input"
            type="password"
            placeholder="Пароль"
            v-model="password"
        />
        <p class="error">
            {{ isShowLoginPswError ? passwordErrorTxt : '' }}&nbsp;
        </p>
        <div class="form__checkbox">
            <input class="form__checkbox-input" type="checkbox" v-model="isAgree"/>
            <label class="form__checkbox-label" >Я согласен получать обновления на почту</label>
        </div>
        <p class="error error_center">
        {{
          isAuth && loginOrPswIncorrect ? 'Логин или пароль не верен' : ''
        }}&nbsp;
        </p>
        <button class="form__button" type="button"
        @click="onConfirm">{{ isAuth ? 'ВХОД' : 'РЕГИСТРАЦИЯ' }}</button>
        </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { notification } from 'ant-design-vue'

export default {
  name: 'AuthPage',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const isAuth = ref(true)
    const login = ref('')
    const password = ref('')
    const isAgree = ref(false)

    const isShowLoginPswError = ref(false)
    const loginOrPswIncorrect = ref(false)
    const loginErrorTxt = computed(() => {
      if (!login.value) {
        return 'Поле не должно быть пустым'
      }
      if (login.value.length < 4) {
        return 'Логин должен содержать не менее 4-х символов'
      }
      return ''
    })
    const passwordErrorTxt = computed(() => {
      if (!password.value) {
        return 'Поле не должно быть пустым'
      }
      if (password.value.length < 4) {
        return 'Пароль должен содержать не менее 4-х символов'
      }
      return ''
    })
    const onConfirm = () => {
      isShowLoginPswError.value = true
      console.log(passwordErrorTxt.value)
      if (loginErrorTxt.value || passwordErrorTxt.value) {
        return
      }
      if (isAuth.value) {
        const users = store.getters.getUsers
        const userIndex = users.findIndex((x) => x.login === login.value)
        if (userIndex >= 0) {
          if (
            users[userIndex].password ===
             password.value && users[userIndex].login === login.value
          ) {
            const param = {
              login: login.value,
              isAgree: isAgree.value
            }
            store.commit('loginUser', param)
            router.push('/')
          }
        }

        loginOrPswIncorrect.value = true
      } else {
        const userData = {
          login: login.value,
          password: password.value,
          isAgree: isAgree,
          basket: []
        }
        store.commit('registerUser', userData)
        isAuth.value = true
        notification.open({
          description: 'Вы успешно зарегистрированы!'
        })
      }
    }
    return {
      onConfirm,
      isAgree,
      isAuth,
      login,
      password,
      loginErrorTxt,
      passwordErrorTxt,
      isShowLoginPswError,
      loginOrPswIncorrect
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
    background-image: url( '../assets/img/bgAuthPage.svg' );
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 30px;
}
.form {
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    position: relative;
    width: 460px;
    border: 3px solid orange;
    background-color: #fff;
    padding-bottom: 34px;
}
.form__elements {
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: center;
}
.form__title {
    font-size: 31px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 36px;
}
.form__input {
    box-sizing: border-box;
    align-self: center;
    border: 1px solid rgb(213, 140, 81);
    border-radius: 61px;
    width: 90%;
    height: 39px;
    font-size: 20px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    // margin-bottom: 15px;
    padding-left: 20px;
}
.form__button {
    font-family: Montserrat;
    align-self: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
    justify-content: center;
    width: 53%;
    height: 42px;
    left: 620px;
    right: -620px;
    top: 622px;
    bottom: -622px;
    background: rgb(213, 140, 81);
    border: 1px solid rgb(213, 140, 81);
}
.form__toggle {
    margin-right: 20px;
    padding-top: 7px;
    font-size: 11px;
    font-weight: 300;
    line-height: 13px;
    letter-spacing: 0%;
    text-align: right;
    text-decoration-line: underline;
    padding-bottom: 15px;
}
.form__checkbox {
    // padding-bottom: 29px;
    padding-left: 24px;
    align-items: left;
    justify-content: left;
}
.form__checkbox-input {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid rgb(213, 140, 81);
    appearance: none;
    //-webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.form__checkbox-label {
    font-size: 11px;
    font-weight: 300;
    line-height: 13px;
    letter-spacing: 0%;
    text-align: left;
    padding-left: 10px;
}
.form__checkbox-input:checked {
    background-color: rgb(213, 140, 81);
}
.error {
  font-size: 8px;
  font-weight: 300;
  color: rgb(255, 11, 11);
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 18px;
  padding-right: 18px;
}
.error_center {
  margin-left: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
