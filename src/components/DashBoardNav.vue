<template>
  <LoadingVue :active="isLoading"></LoadingVue>
  <nav
    class="navbar navbar-expand-lg bg-secondary fw-bolder"
    data-bs-theme="dark"
  >
    <div class="container">
      <div class="d-flex align-items-baseline me-3">
        <router-link class="navbar-brand p-0 me-2" to="/home"
          ><h1 class="fs-3 dashLogo">
            macar<i class="bi bi-egg-fill"></i>n
          </h1></router-link
        >
        <p class="m-0 d-none d-sm-block text-white">後台管理</p>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        v-if="isLogin"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" v-if="isLogin">
        <ul class="navbar-nav d-flex w-100 justify-content-end">
          <li class="nav-item mx-2">
            <router-link class="nav-link" to="/dashboard/salesReport"
              >銷售統計</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" to="/dashboard/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" to="/dashboard/coupons"
              >優惠券列表</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" to="/dashboard/orders"
              >訂單列表</router-link
            >
          </li>
        </ul>
        <button
          class="btn btn-sm btn-outline-light text-nowrap ms-2"
          type="button"
          @click="logout"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>

<style>
.dashLogo:hover {
  color: #f7e2e6;
}
</style>

<script>
import emitter from '@/methods/emitter'
export default {
  data() {
    return {
      isLoading: false
    }
  },
  props: ['isLogin'],
  methods: {
    logout() {
      this.isLoading = true
      const API_LOGOUT = `${process.env.VUE_APP_API}logout`
      this.axios
        .post(API_LOGOUT)
        .then((res) => {
          this.isLoading = false
          this.$router.push('/login')
        })
        .catch((e) => {
          emitter.emit('sendMsg', {
            message: `登出失敗(${e})`,
            status: 'error'
          })
        })
    }
  }
}
</script>
