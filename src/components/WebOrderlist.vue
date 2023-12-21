<template>
  <div class="py-2 px-3 d-flex align-items-baseline justify-content-between">
    <h5 class="text-secondary mb-0 fw-bolder">
      <slot name="title">購物清單</slot> ({{
        cartInfo.carts.reduce((acc, cur) => (acc += cur.qty), 0)
      }})
    </h5>
    <a
      href="#"
      class="link-gray link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      @click.prevent="this.emitter.emit('cartReset')"
      v-if="isEdit"
      >清空購物車</a
    >
  </div>
  <ul class="list-group rounded-0">
    <li
      class="list-group-item d-flex flex-column-reverse flex-sm-row border-secondary-subtle border-start-0 border-end-0"
      v-for="(item, key) in cartInfo.carts"
      :key="'cart' + key"
    >
      <div class="d-flex flex-column flex-sm-row">
        <div style="max-width: 100px" class="d-flex align-items-center mb-2 mb-sm-0">
          <img
            :src="item.product.imageUrl"
            :alt="item.product.title"
            class="img-fluid"
          />
        </div>
        <div class="px-0 px-sm-3 w-auto align-self-sm-center">
          <router-link
            :to="`/product/${item.product.id}`"
            class="fw-bolder link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="_blank"
            >{{ item.product.title }}</router-link
          >
          <p
            class="mt-2 mb-0"
            v-if="item.product.origin_price === item.product.price"
          >
            單價 NT${{ $filters.currency(item.product.origin_price) }}元
          </p>
          <p v-else class="mt-2 mb-0">
            單件優惠價
            <span class="text-danger"
              >NT${{ $filters.currency(item.product.price) }}元</span
            >
            <span
              class="badge rounded-pill bg-secondary ms-1"
              style="vertical-align: baseline"
              >{{
                Math.floor(
                  (item.product.price / item.product.origin_price) * 10
                )
              }}折</span
            >
          </p>
          <p class="my-2">規格：{{ item.product.unit }}</p>
          <div class="input-group input-group-sm w-auto mb-2" v-if="isEdit">
            <button
              class="btn btn-outline-secondary"
              type="button"
              :class="{ disabled: item.qty === 1 }"
              @click="
                cartAdjustNum(
                  { product_id: item.product.id, qty: item.qty - 1 },
                  item.id
                )
              "
            >
              <i class="bi bi-dash-lg"></i>
            </button>
            <span
              class="input-group-text bg-white border-start-0 border-end-0 border-secondary"
              >{{ item.qty }}</span
            >
            <button
              class="btn btn-outline-secondary"
              type="button"
              :class="{ disabled: item.qty === 10 }"
              @click="
                cartAdjustNum(
                  { product_id: item.product.id, qty: item.qty + 1 },
                  item.id
                )
              "
            >
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
          <p class="mb-2" v-else>數量：{{ item.qty }}</p>
          <p class="mb-0">小計：{{ item.total }} 元</p>
        </div>
      </div>
      <button
        type="button"
        class="btn-close ms-auto"
        @click="emitter.emit('cartDeleteItem', item.id)"
        title="移除品項"
        v-if="isEdit"
      ></button>
    </li>
  </ul>
  <div class="text-end">
    <a
      href="#"
      class="btn btn-outline-secondary mt-2"
      @click.prevent="scrolltop"
      :class="{ 'd-none': !scolltopShow || !isEdit }"
      >TOP</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      scolltopShow: false
    }
  },
  props: ['cartInfo', 'isEdit'],
  inject: ['emitter'],
  methods: {
    cartAdjustNum(data, cartId) {
      this.emitter.emit('cartAdjustNum', { data, cartId })
    },
    scrolltop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.scolltopShow = true
    })
  }
}
</script>
