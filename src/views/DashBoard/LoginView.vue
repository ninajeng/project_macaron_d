<template>
  <LoadingVue :active="isLoading"></LoadingVue>
  <div
    class="d-flex flex-column"
    style="
      min-height: 100vh;
      background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1702358732265.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HfvexqBUIB45NzvHNtthSrfJKr2YI8wsveCN%2F2oXaew2ilPiL7a2wdZciHOlTA6D%2BLFKJumOAt%2FlGJ003ZEp%2FiRmq416egwi61ludKxcXUsYvECX5LxXJMgIS7prbpxI%2F2BEIH31DxGHifMbUAL5Ctc1MvJ7hK4NBVbo7HqdV5w%2FaVRVm5r%2FtOe2G%2FpIfzEz%2BpXHQN%2FTQwZTKzz4Ef6Ki0nEG2Wxt9PKgayXngBoTLTqWwYW518zgIjgAUm16y3qEry7kK81blGWAsSRO%2FX5KVC4KfiuxJW%2F5dOPVoTbmbUB1JawJn4tlH9%2FP9SoynjDF%2FkyQPS6rfx1CFiLaurOpw%3D%3D);
      background-size: cover;
      background-position: top center;
    "
  >
    <DashBoardNav :isLogin="false"></DashBoardNav>
    <div class="container">
      <ToastList></ToastList>
    </div>
    <div class="container py-5 flex-grow-1 d-flex align-items-center">
      <div class="row w-100 justify-content-center">
        <div class="col-lg-5">
          <div class="p-3 bg-light bg-opacity-25">
            <h2 class="text-center mt-2 mb-3 text-secondary">後台登入</h2>
            <VForm v-slot="{ errors, validate }">
              <div class="form-floating mb-4">
                <VField
                  type="email"
                  name="email"
                  id="username"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  rules="email|required"
                  v-model="user.username"
                  placeholder="請輸入帳號"
                >
                </VField>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
                <label for="username">帳號</label>
              </div>
              <div class="form-floating mb-4">
                <VField
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  :class="{ 'is-invalid': errors['password'] }"
                  rules="required"
                  v-model="user.password"
                  placeholder="請輸入帳號"
                >
                </VField>
                <ErrorMessage
                  name="password"
                  class="invalid-feedback"
                ></ErrorMessage>
                <label for="password">密碼</label>
              </div>
              <button
                type="button"
                class="btn btn-secondary w-100"
                @click="submit(validate)"
              >
                登入
              </button>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoardNav from '@/components/DashBoardNav.vue'
import ToastList from '@/components/ToastList.vue'
import emitter from '@/methods/emitter.js'
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  components: {
    DashBoardNav,
    ToastList
  },
  provide() {
    return {
      emitter
    }
  },
  methods: {
    async submit(validate) {
      try {
        const isValid = await validate()
        if (!isValid.valid) return
      } catch (e) {
        emitter.emit('sendMsg', {
          message: '表單驗證失敗',
          status: 'error'
        })
        return
      }
      this.isLoading = true
      const API_LOGIN = `${process.env.VUE_APP_API}admin/signin`
      this.axios
        .post(API_LOGIN, this.user)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `webToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard/salesReport')
          } else {
            emitter.emit('sendMsg', {
              message: res.data.message,
              status: 'error'
            })
            this.user.password = ''
          }
        })
        .catch((e) => {
          emitter.emit('sendMsg', {
            message: `登入失敗(${e})`,
            status: 'error'
          })
        })
    }
  },
  mounted() {
    const API_CHECK = `${process.env.VUE_APP_API}api/user/check`
    const AUTH_TOKEN = document.cookie
      .split('; ')
      .find((row) => row.startsWith('webToken='))
      ?.split('=')[1]
    this.axios.defaults.headers.common.Authorization = AUTH_TOKEN
    this.isLoading = true
    this.axios.post(API_CHECK).then((res) => {
      this.isLoading = false
      if (res.data.success) {
        this.$router.push('/dashboard/salesReport')
      }
    })
  }
}
</script>
