<template>
  <LoadingVue :active="isLoading" style="z-index: 1056"></LoadingVue>
  <productModal
    ref="productModal"
    :temp-product="temp"
    @update-product="updateProduct"
    @create-product="createProduct"
  ></productModal>
  <deleteModal
    ref="deleteModal"
    :delete-item="deleteProduct"
    :item="'產品'"
    @delete="deleteId"
  ></deleteModal>
  <div class="d-flex justify-content-between pt-4 py-3 pe-2">
    <h2 class="m-0 text-secondary fw-bolder">產品列表</h2>
    <button
      type="button"
      class="btn btn-secondary align-self-center me-4"
      @click="editProduct()"
    >
      新增產品
    </button>
  </div>
  <table class="table table-hover align-middle">
    <thead class="border-dark">
      <tr>
        <th width="150">類別</th>
        <th>產品名稱</th>
        <th width="150" class="text-end">原價</th>
        <th width="150" class="text-end">售價</th>
        <th width="100" class="text-end">是否啟用</th>
        <th width="150" class="text-center">編輯/刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, key) in products" :key="'product' + key">
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td class="text-end">{{ $filters.currency(product.origin_price) }}</td>
        <td class="text-end">{{ $filters.currency(product.price) }}</td>
        <td
          class="text-end text-muted"
          :class="{ 'text-success': product.is_enabled }"
        >
          {{ product.is_enabled ? '啟用' : '未啟用' }}
        </td>
        <td class="text-center">
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              class="btn btn-outline-success"
              @click="editProduct(product)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteConfirm(product)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination :page-info="pageInfo" @set-page="getData"></pagination>
</template>

<script>
import productModal from '@/components/ProductModal.vue'
import deleteModal from '@/components/DelModal.vue'
import pagination from '@/components/PaginationItem.vue'
export default {
  data() {
    return {
      products: [],
      temp: {},
      deleteProduct: {},
      isLoading: false,
      pageInfo: {}
    }
  },
  components: {
    productModal,
    deleteModal,
    pagination
  },
  inject: ['emitter'],
  methods: {
    getData(page = 1) {
      this.isLoading = true
      window.scrollTo({ top: 0 })
      const API_PORDUCTS = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.axios
        .get(API_PORDUCTS)
        .then((res) => {
          this.isLoading = false
          if (!res.data.success) {
            alert(res.data.message)
          } else {
            this.products = res.data.products
            this.pageInfo = res.data.pagination
          }
        })
        .catch((e) => {
          alert(e)
        })
    },
    editProduct(product = {}) {
      this.temp = product
      this.$refs.productModal.showModal()
    },
    updateProduct(product) {
      this.isLoading = true
      const API_UPDATE = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
      this.axios
        .put(API_UPDATE, { data: product })
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.emitter.emit('sendMsg', {
              message: `已更新產品：${product.title}`,
              status: 'success'
            })
            this.$refs.productModal.hideModal()
            this.getData()
          } else {
            this.emitter.emit('sendMsg', {
              message: res.data.message.join(', '),
              status: 'error',
              title: '產品更新失敗'
            })
          }
        })
        .catch((e) => {
          this.emitter.emit('sendMsg', {
            message: e,
            status: 'error',
            title: '產品更新失敗'
          })
        })
    },
    createProduct(product) {
      this.isLoading = true
      const API_CREATE = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      this.axios
        .post(API_CREATE, { data: product })
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.emitter.emit('sendMsg', {
              message: `已新增產品：${product.title}`,
              status: 'success'
            })
            this.$refs.productModal.hideModal()
            this.getData()
          } else {
            this.emitter.emit('sendMsg', {
              message: res.data.message.join(', '),
              status: 'error',
              title: '產品新增失敗'
            })
          }
        })
        .catch((e) => {
          this.emitter.emit('sendMsg', {
            message: e,
            status: 'error',
            title: '產品新增失敗'
          })
        })
    },
    deleteConfirm(product) {
      this.deleteProduct = product
      this.$refs.deleteModal.showModal()
    },
    deleteId() {
      this.isLoading = true
      this.$refs.deleteModal.hideModal()
      const API_DELETE = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.deleteProduct.id}`
      this.axios
        .delete(API_DELETE)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.emitter.emit('sendMsg', {
              message: `已刪除產品：${this.deleteProduct.title}`,
              status: 'success'
            })
          } else {
            this.emitter.emit('sendMsg', {
              message: `${res.data.message}`,
              status: 'error',
              title: '產品刪除失敗'
            })
          }
          this.getData(this.pageInfo.current_page)
        })
        .catch((e) => {
          this.emitter.emit('sendMsg', {
            message: `${e}`,
            status: 'error',
            title: '產品刪除失敗'
          })
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>
