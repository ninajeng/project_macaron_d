<template>
  <WebLoading :is-loading="isLoading"></WebLoading>
  <CartInfo @updateInfo="updateInfo"></CartInfo>
  <div class="container py-5">
    <div v-if="cartInfo.carts.length > 0">
      <div
        class="row flex-column-reverse flex-lg-row justify-content-lg-evenly"
        v-if="cartInfo.carts[0].product"
      >
        <div class="col-lg-6">
          <Orderlist :cart-info="cartInfo" :isEdit="true"></Orderlist>
        </div>
        <div class="col-lg-4">
          <div
            class="card border-secondary-subtle border-0 mb-5 text-secondary"
          >
            <div class="card-body p-3 bg-secondary-subtle rounded">
              <h5 class="fw-bolder mb-3">購物車總計</h5>
              <p class="border-bottom border-secondary mb-1 pb-1">
                商品共
                {{ cartInfo.carts.reduce((acc, cur) => (acc += cur.qty), 0) }}
                件
              </p>
              <div class="d-flex justify-content-between">
                <p class="mb-1">小計</p>
                <p class="mb-1">
                  NT$ {{ $filters.currency(cartInfo.total) }} 元
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-1">運費</p>
                <p class="mb-1">活動免運</p>
              </div>
              <div
                class="d-flex justify-content-between border-top border-secondary pt-1 mb-3"
              >
                <p class="mb-1">總金額</p>
                <p class="mb-1 fw-bolder">
                  NT$ {{ $filters.currency(cartInfo.total) }} 元
                </p>
              </div>
              <router-link to="/order/check" class="btn btn-secondary w-100"
                >去結帳</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div v-else>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="py-3 px-4 bg-light text-center">
            <h5
              class="text-secondary py-2 border-bottom border-secondary-subtle"
            >
              購物車 (0)
            </h5>
            <div class="py-5">
              <p class="text-secondary d-sm-inline-block me-sm-2">
                購物車尚無資料...
              </p>
              <router-link
                to="/products"
                class="link-secondary fw-bolder text-decoration-none border-bottom border-secondary d-sm-inline-block"
                >查看商品<i class="bi bi-arrow-up-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WebRecommand
    :num="5"
    :bgColor="true"
    :isRandom="true"
    :classicType="true"
  ></WebRecommand>
</template>

<script>
import Orderlist from '@/components/WebOrderlist.vue'
import CartInfo from '@/components/WebCartInfo.vue'
import WebRecommand from '@/components/WebRecommand.vue'
export default {
  data() {
    return {
      cartInfo: {
        carts: []
      },
      isLoading: false
    }
  },
  components: {
    CartInfo,
    Orderlist,
    WebRecommand
  },
  methods: {
    updateInfo(data) {
      this.cartInfo = data
      this.isLoading = false
    }
  },
  created() {
    this.isLoading = true
  }
}
</script>
