<template>
  <div class="card h-100">
    <div
      class="zIndex position-absolute end-0 text-end p-2 icon-bg"
      style="height: 5rem; width: 5rem"
    >
      <a
        href="#"
        class="link-dark fs-4"
        :class="{ collected: isCollected }"
        @click.prevent="setCollect(product.id)"
        ><i class="bi bi-suit-heart"></i
      ></a>
    </div>
    <p
      v-if="product.category === '期間限定'"
      class="zIndex position-absolute mt-3 p-2 text-white smallTag bg-secondary"
    >
      期間限定
    </p>
    <p
      v-else-if="product.origin_price !== product.price"
      class="zIndex position-absolute mt-3 p-2 text-white smallTag"
    >
      特價 {{ Math.floor((product.price / product.origin_price) * 10) }} 折
    </p>
    <router-link
      :to="`/product/${product.id}`"
      class="overflow-hidden rounded-top"
      @click="scrollTop"
    >
      <img
        :src="product.imageUrl"
        class="card-img-top productImg"
        :alt="product.title"
        style="height: 300px; object-fit: cover"
      />
    </router-link>
    <div class="card-body position-relative">
      <router-link
        :to="`/product/${product.id}`"
        class="stretched-link"
        @click="scrollTop"
      ></router-link>
      <div class="d-flex flex-column justify-content-between h-100">
        <h5 class="card-title fw-bolder">{{ product.title }}</h5>
        <div>
          <p class="mb-2">{{ product.unit }}</p>
          <p class="mb-2" v-if="product.origin_price === product.price">
            NT${{ $filters.currency(product.origin_price) }}元
          </p>
          <p class="mb-2" v-else>
            <del class="text-gray me-2"
              >NT${{ $filters.currency(product.origin_price) }}元</del
            >
            <span class="text-danger"
              >NT${{ $filters.currency(product.price) }}元</span
            >
          </p>
          <a
            href="#"
            class="zIndex position-relative btn btn-outline-secondary w-100"
            @click.prevent="
              this.emitter.emit('addCart', { product_id: product.id, qty: 1 })
            "
            ><i class="bi bi-cart-plus me-2"></i>加到購物車</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.zIndex {
  z-index: 2;
}
.productImg:hover {
  transform: scale(1.2);
}
.bi-suit-heart:hover.bi-suit-heart::before {
  content: '\f59d';
}
.collected .bi-suit-heart.bi-suit-heart::before {
  content: '\f59d';
}
.productImg {
  transition: all 0.5s;
}
.icon-bg {
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%
  );
}
.smallTag {
  left: -6px;
  background-color: #5c3548;
  border-bottom-left-radius: 5px;
}
.smallTag::after {
  background-image: linear-gradient(157.4deg, transparent 50%, #000000 50%);
  content: '';
  z-index: -2;
  position: absolute;
  width: 6px;
  height: 2.5px;
  top: -2.5px;
  left: 0;
}
</style>

<script>
export default {
  data() {
    return {
      collect: ''
    }
  },
  computed: {
    isCollected() {
      return this.collect.findIndex((id) => id === this.product.id) > -1
    }
  },
  props: ['product'],
  inject: ['emitter'],
  methods: {
    setCollect(id) {
      this.emitter.emit('setCollect', id)
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  created() {
    this.emitter.on('collectInfo', (collect) => {
      this.collect = collect
    })
    this.emitter.emit('getCollectInfo')
  }
}
</script>
