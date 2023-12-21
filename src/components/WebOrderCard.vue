<template>
  <WebLoading :is-loading="isLoading"></WebLoading>
  <div
    class="card border-secondary mb-3 text-secondary"
    :class="{ 'border-0': !isEdit }"
  >
    <div class="card-body p-3 bg-light" :class="{ rounded: isEdit }">
      <h5 class="fw-bolder mb-3 ms-2"><slot name="title">訂單確認</slot></h5>
      <div class="px-2">
        <p class="mb-1">
          商品共
          {{ cartInfo.carts.reduce((acc, cur) => (acc += cur.qty), 0) }}
          件
        </p>
        <div class="d-flex justify-content-between">
          <p class="mb-1">小計</p>
          <p class="mb-1">{{ $filters.currency(cartInfo.total) }} 元</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-1">運費</p>
          <p class="mb-1">活動免運</p>
        </div>
      </div>
      <div
        class="px-2 py-1"
        :class="{
          'bg-secondary-subtle': isEdit,
          'border-top border-secondary-subtle': !isEdit
        }"
      >
        <div class="input-group mb-2 pt-1" v-if="isEdit">
          <input
            type="text"
            class="form-control border-secondary border-end-0"
            placeholder="輸入優惠碼"
            v-model="couponCode"
          />
          <button class="btn btn-dark" type="button" @click="useCoupon">
            套用
          </button>
        </div>
        <div
          class="d-flex justify-content-between flex-wrap"
          v-if="cartInfo.carts[0].coupon"
        >
          <p class="w-100 mb-1">
            <slot name="coupon">已套用的優惠券：</slot>
          </p>
          <p class="mb-1">
            {{
              `${cartInfo.carts[0].coupon.code} ${cartInfo.carts[0].coupon.title}`
            }}
          </p>
          <p class="mb-1 flex-fill text-end">
            {{ $filters.currency(cartInfo.final_total - cartInfo.total) }}
            元
          </p>
        </div>
        <div class="d-flex justify-content-between" v-else>
          <p class="mb-1">優惠券折扣</p>
          <p class="mb-1 flex-fill text-end">-0 元</p>
        </div>
      </div>
      <div
        class="d-flex justify-content-between border-top border-secondary pt-1 px-2"
        :class="{ 'border-secondary-subtle': !isEdit, 'mt-2': isEdit }"
      >
        <p class="mb-1 fs-5 fw-bolder">總計</p>
        <p class="mb-1 fs-5 fw-bolder">
          NT$ {{ $filters.currency(cartInfo.final_total) }} 元
        </p>
      </div>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponCode: '',
      isLoading: false
    }
  },
  props: ['cartInfo', 'isEdit'],
  inject: ['emitter'],
  methods: {
    useCoupon() {
      const API_USECOUPON = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.isLoading = true
      this.axios
        .post(API_USECOUPON, { data: { code: this.couponCode } })
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.emitter.emit('sendMsg', {
              message: '已套用優惠',
              status: 'success'
            })
            this.emitter.emit('updateCart')
          } else {
            this.couponError(res.data.message)
          }
        })
        .catch((e) => {
          this.isLoading = false
          this.couponError(e)
        })
    },
    couponError(err) {
      this.emitter.emit('sendMsg', {
        message: err,
        status: 'error'
      })
    }
  }
}
</script>
