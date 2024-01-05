<template>
  <div :class="{ 'bg-primary-subtle': bgColor }" v-if="showData.length > 0">
    <div class="container py-5">
      <div
        class="d-flex flex-wrap justify-content-between align-items-center mb-3"
      >
        <h5 class="fw-bolder text-primary-emphasis mb-0">
          <slot name="title">推薦給您 ...</slot>
        </h5>
        <router-link
          to="/products"
          class="link-secondary text-decoration-none"
          @click="emitter.emit('setFilterStore', '')"
          >看更多產品<i class="bi bi-caret-right-fill"></i
        ></router-link>
      </div>
      <div class="row row-cols-md-3 row-cols-lg-5 g-4">
        <div
          class="col-12 flex-fill"
          v-for="(product, key) in showData"
          :key="'showData' + key"
        >
          <ProductCardClassic
            :product="product"
            :height="'300px'" v-if="classicType"
          ></ProductCardClassic>

          <ProductCard
            :product="product"
            @add-cart="addCart"
            v-else
          ></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.productTitle {
  opacity: 0;
  transition: all 0.5s;
}
.productLink:hover + .productTitle {
  opacity: 1;
  .linkIcon {
    transform: scale(3);
  }
}
.linkIcon {
  transform: scale(1);
  transition: all 1s;
}
</style>

<script>
import ProductCard from './WebProductCard.vue'
import ProductCardClassic from '@/components/WebProductCard-classic.vue'
export default {
  data() {
    return {
      allData: [],
      showData: [],
      index: 0,
      isLoading: false
    }
  },
  inject: ['emitter'],
  props: ['num', 'bgColor', 'isRandom', 'classicType'],
  emits: ['addCart'],
  components: {
    ProductCard,
    ProductCardClassic
  },
  methods: {
    getData() {
      const API_GETDATA = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.axios
        .get(API_GETDATA)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.allData = res.data.products
            this.setShowData()
          } else {
            this.getDataError(`(${res.data.message})`)
          }
        })
        .catch((e) => {
          this.isLoading = false
          this.getDataError(`(${e})`)
        })
    },
    getDataError(err = '') {
      this.emitter.emit('sendMsg', {
        message: `產品無法載入 ${err}`,
        status: 'error'
      })
    },
    setShowData() {
      let random = 0
      if (this.isRandom) {
        random = this.index
        while (random === this.index) {
          random = Math.floor(Math.random() * (this.allData.length - this.num))
        }
      }
      this.index = random
      this.showData = this.allData.slice(this.index, this.index + this.num)
    },
    addCart(data) {
      this.$emit('addCart', data)
    }
  },
  created() {
    this.getData()
  }
}
</script>
