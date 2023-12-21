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
          <div class="card border-0" v-if="classicType">
            <img
              :src="product.imageUrl"
              class="card-img productImg"
              :alt="product.title"
              style="height: 300px; object-fit: cover"
            />
            <div class="position-absolute bottom-0">
              <p
                class="fs-6 ms-3 badge rounded-pill text-bg-primary"
                v-if="product.category === '期間限定'"
              >
                期間限定
              </p>
              <p
                class="fs-6 ms-3 badge rounded-pill text-bg-secondary"
                v-else-if="product.origin_price !== product.price"
              >
                特價
                {{ Math.floor((product.price / product.origin_price) * 10) }} 折
              </p>
            </div>
            <div class="card-img-overlay p-0">
              <div
                class="d-flex justify-content-center align-items-center rounded py-3 d-lg-none"
                style="
                  background: linear-gradient(
                    rgba(41, 41, 43, 0.5) 20%,
                    transparent
                  );
                "
              >
                <p class="fw-bolder text-white px-2 fs-5 text-center">
                  {{ product.title }}
                </p>
              </div>
              <router-link
                :to="`/product/${product.id}`"
                class="stretched-link productLink"
              ></router-link>
              <div
                class="h-100 d-none d-lg-flex flex-column justify-content-center align-items-center rounded productTitle"
                style="background-color: rgba(41, 41, 43, 0.5)"
              >
                <p class="fw-bolder text-white px-3 fs-5 text-center mb-5">
                  {{ product.title }}
                </p>
                <p class="fw-bolder text-white fs-5 linkIcon">
                  <i class="bi bi-search"></i>
                </p>
              </div>
            </div>
          </div>

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
export default {
  data() {
    return {
      allData: [],
      showData: [],
      isLoading: false
    }
  },
  inject: ['emitter'],
  props: ['num', 'bgColor', 'isRandom', 'classicType'],
  emits: ['addCart'],
  components: {
    ProductCard
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
      let index = 0
      if (this.isRandom) {
        index = Math.floor(Math.random() * (this.allData.length - this.num))
      }
      this.showData = this.allData.slice(index, index + this.num)
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
