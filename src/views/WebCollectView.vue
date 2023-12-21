<template>
  <WebLoading :is-loading="isLoading"></WebLoading>
  <div class="container py-5">
    <div class="row justify-content-center bg-light">
      <div class="col-10">
        <div
          class="py-3 d-flex align-items-baseline justify-content-between border-bottom border-dark"
        >
          <h5 class="text-primary-emphasis mb-0 fw-bolder">
            我的收藏清單 ({{ collectId.length }})
          </h5>
          <a
            href="#"
            class="link-gray link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            @click.prevent="emitter.emit('setCollect')"
            v-if="collectProducts.length > 0"
            >清空我的收藏</a
          >
        </div>
        <div class="py-4">
          <div class="row row-cols-1 row-cols-lg-2 g-4" v-if="getDataComplete">
            <div
              class="col"
              v-for="(product, key) in collectProducts"
              :key="'collectProduct' + key"
            >
              <div class="card overflow-hidden">
                <div class="row g-0">
                  <div class="col-md-4">
                    <router-link :to="`/product/${product.id}`">
                      <img
                        :src="product.imageUrl"
                        class="collectImg w-100"
                        :alt="product.title"
                        style="height: 200px; object-fit: cover"
                      />
                    </router-link>
                  </div>
                  <div class="col-md-7">
                    <div
                      class="card-body d-flex justify-content-center align-items-center h-100 p-0 pt-3"
                    >
                      <div class="ps-3 text-center">
                        <router-link
                          :to="`/product/${product.id}`"
                          class="fw-bolder link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          target="_blank"
                          >{{ product.title }}</router-link
                        >
                        <p
                          class="mt-2 mb-0"
                          v-if="product.origin_price === product.price"
                        >
                          單價 NT${{
                            $filters.currency(product.origin_price)
                          }}元
                        </p>
                        <p v-else class="mt-2 mb-0">
                          優惠價
                          <span class="text-danger"
                            >NT${{ $filters.currency(product.price) }}元</span
                          >
                          <span
                            class="badge rounded-pill bg-secondary ms-1"
                            style="vertical-align: baseline"
                            >{{
                              Math.floor(
                                (product.price / product.origin_price) * 10
                              )
                            }}折</span
                          >
                        </p>
                        <p class="my-2">規格：{{ product.unit }}</p>
                        <a
                          href="#"
                          class="btn btn-outline-secondary"
                          @click.prevent="
                            this.emitter.emit('addCart', {
                              product_id: product.id,
                              qty: 1
                            })
                          "
                          ><i class="bi bi-cart-plus me-2"></i>加到購物車</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="text-end p-2 d-block d-md-none">
                    <a
                      href="#"
                      @click.prevent="emitter.emit('setCollect', product.id)"
                      class="text-decoration-none text-muted"
                      ><i class="bi bi-trash3 text-gray me-1"></i
                      >移除收藏</a>
                  </div>
                  <div class="col-1 text-end d-none d-md-block">
                    <div class="m-2">
                      <a
                        href="#"
                        @click.prevent="emitter.emit('setCollect', product.id)"
                        title="從收藏中移除"
                        ><i class="bi bi-trash3 text-gray"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5 text-center" v-else>
            <p class="d-sm-inline-block me-sm-2">尚無收藏...</p>
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
  <WebRecommand
    :num="5"
    :bgColor="true"
    :isRandom="true"
    :classicType="true"
  ></WebRecommand>
</template>

<style>
.collectImg:hover{
  opacity: 0.85;
}
</style>

<script>
import WebRecommand from '@/components/WebRecommand.vue'
export default {
  data() {
    return {
      collectId: '',
      isLoading: false,
      collectProducts: [],
      dataCount: 0,
      getDataComplete: false
    }
  },
  components: {
    WebRecommand
  },
  inject: ['emitter'],
  watch: {
    collectId() {
      this.collectProducts = []
      this.getDataComplete = false
      if (this.collectId.length > 0) {
        this.getProductList()
      }
    },
    dataCount() {
      if (this.dataCount === this.collectId.length) {
        this.isLoading = false
        this.getDataComplete = true
      }
    }
  },
  methods: {
    getCollectId() {
      this.emitter.emit('getCollectInfo')
    },
    getProductList() {
      this.isLoading = true
      this.dataCount = 0
      this.collectProducts = []
      this.collectId.forEach((id, index) => {
        const API_GETPRODUCT = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        this.axios
          .get(API_GETPRODUCT)
          .then((res) => {
            if (res.data.success) {
              if (!res.data.product.is_enabled) {
                // 產品未啟用
                this.getInfoError()
              }
              this.collectProducts[index] = res.data.product
              this.dataCount += 1
            } else {
              this.getInfoError()
            }
          })
          .catch((e) => {
            this.isLoading = false
            this.getInfoError(e)
            this.$router.push('/products')
          })
      })
    },
    getInfoError(err = '找不到產品') {
      this.emitter.emit('sendMsg', {
        message: err,
        status: 'error'
      })
    }
  },
  created() {
    this.emitter.on('collectInfo', (data) => {
      this.collectId = data
    })
    this.getCollectId()
  }
}
</script>
