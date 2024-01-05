<template>
  <WebLoading :is-loading="isLoading"></WebLoading>
  <BannerCarousel :sorce-images="bannerImages"></BannerCarousel>

  <div
    v-show="adDisplay"
    class="position-fixed"
    style="
      z-index: 1058;
      backdrop-filter: blur(5px);
      top: -100vh;
      height: 300vh;
      left: -100vw;
      width: 300vw;
    "
  >
   <div class="d-block d-sm-none mb-3" style="height: 100vh;"></div>
    <div
      class="d-flex justify-content-center align-items-start align-items-sm-center h-100"
    >
      <div class="border border-3 border-primary shadow-lg" style="width: 90vw">
        <div class="pt-2 pb-3 px-2 bg-warning-subtle">
          <div class="text-end position-relative">
            <button
              type="button"
              class="btn btn-sm btn-gray position-absolute rounded-circle end-0"
              @click="adDisplay = false"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <p class="mb-0 text-center text-primary fw-bolder mt-2">macarOn</p>
          <h3 class="text-center text-primary-emphasis fw-bolder mb-0">
            <i class="bi bi-stars me-1"></i>週年慶活動開跑<i
              class="bi bi-stars ms-1"
            ></i>
          </h3>
        </div>
        <div class="p-3 bg-primary">
          <div class="row g-3 text-center">
            <div
              class="col-12 col-md-6 col-lg-3"
              v-for="(infoItem, key) in anniversaryInfo"
              :key="'anniversaryInfo' + key"
            >
              <div class="p-3 mx-lg-3 py-lg-5 rounded bg-primary-subtle">
                <span class="badge bg-secondary text-white rounded-pill fs-6">{{
                  infoItem.name
                }}</span>
                <p
                  class="mt-2 mb-0 ms-2 ms-md-0 d-inline d-md-block text-secondary fw-bolder"
                >
                  {{ infoItem.info }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center p-3 bg-warning-subtle">
          <button
            type="button"
            class="btn btn-outline-gray me-1"
            @click="adDisplay = false"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-light border-dark ms-1"
            @click="goTarget('anniversary', true)"
          >
            查看活動詳情
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div class="container py-3 py-md-5 text-primary-emphasis">
      <h3 class="text-center mb-3 mb-lg-4 fw-bolder">官網限定優惠</h3>
      <div
        class="row mb-4 justify-content-center align-items-center gx-4 gy-3 flex-column-reverse flex-lg-row"
        v-for="(product, key) in featuredProducts"
        :key="'featuredProduct' + key"
        :class="{ 'flex-lg-row-reverse': key % 2 === 0 }"
      >
        <div
          class="col-lg-5 text-center text-lg-start"
          :class="{ 'text-lg-end': key % 2 === 1 }"
          v-if="product.content"
        >
          <h4 class="fw-semibold">
            <router-link
              :to="`/product/${product.id}`"
              class="link-secondary text-decoration-none"
              >{{ product.title }}</router-link
            >
            <span class="fs-6">({{ product.unit }})</span>
          </h4>
          <hr class="my-2 d-none d-lg-block" />
          <p
            v-html="adjustSentence(product.content)"
            class="lh-lg mb-1 d-none d-lg-block"
          ></p>
          <p class="lh-lg mb-1 d-lg-none">{{ product.content }}</p>
          <hr class="my-2 d-none d-lg-block" />
          <p class="mb-2">
            <del class="text-gray me-2"
              >NT${{ $filters.currency(product.origin_price) }}元</del
            >
            <span
              class="badge rounded-pill bg-secondary me-2"
              style="vertical-align: top"
              >{{
                Math.floor((product.price / product.origin_price) * 10)
              }}折</span
            >
            <span class="text-danger fs-4"
              >NT${{ $filters.currency(product.price) }}元</span
            >
          </p>
          <a
            href="#"
            class="zIndex position-relative btn btn-outline-secondary"
            @click.prevent="
              this.emitter.emit('addCart', { product_id: product.id, qty: 1 })
            "
            ><i class="bi bi-cart-plus me-2"></i>加到購物車</a
          >
          <hr class="mb-0 d-lg-none" />
        </div>
        <div class="col-lg-6" v-if="product.content" data-aos="zoom-in-up">
          <ProductCardClassic
            :product="product"
            :height="'400px'"
          ></ProductCardClassic>
        </div>
      </div>
    </div>
  </div>

  <div class="container" ref="subscribe">
    <div
      class="row justify-content-end align-items-center"
      style="min-height: 500px"
    >
      <div
        class="col-lg-7 text-primary-emphasis"
        style="backdrop-filter: blur(2px)"
      >
        <h3 class="fw-bolder">訂閱我們</h3>
        <p class="mb-2">
          訂閱 macarOn
          電子報，獲得最新優惠與活動訊息，還可享有訂閱限定的折扣優惠！於下方輸入電子信箱，並按下訂閱按鈕，將立即獲得<span
            class="text-danger fw-semibold"
            >訂閱折扣碼</span
          >，結帳金額享八五折優惠！
        </p>
        <VForm v-slot="{ errors, validate }">
          <div class="input-group">
            <VField
              name="信箱"
              type="email"
              class="form-control border border-secondary border-end-0 rounded-0"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入 E-mail"
              ref="userEmail"
              v-model="userEmail"
              rules="email|required"
            ></VField>
            <button
              type="button"
              class="btn btn-secondary rounded-0"
              @click="subscribe(validate)"
            >
              訂閱並取得折扣碼
            </button>
            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
          </div>
        </VForm>
      </div>
    </div>
  </div>

  <!-- 訂閱區塊的背景圖 -->
  <div class="fixed-top w-100 h-100 subscribeBackground"></div>
  <div
    v-show="subscribeView"
    class="position-fixed"
    style="
      z-index: 1058;
      backdrop-filter: blur(5px);
      top: -100vh;
      height: 300vh;
      left: -100vw;
      width: 300vw;
    "
  >
    <div
      class="d-flex flex-column justify-content-center align-items-center h-100"
    >
      <div
        class="card text-primary-emphasis border-dark px-3 py-1 bg-light shadow-lg"
        style="max-width: 90vw"
      >
        <button
          type="button"
          class="btn btn-sm btn-dark position-absolute border border-secondary rounded-circle top-0 start-100 translate-middle"
          @click="closeSubscribeView"
        >
          <i class="bi bi-x-lg"></i>
        </button>
        <div class="card-body">
          <h3 class="fw-bolder">訂閱成功！</h3>
          <p
            class="mb-2 text-secondary d-inline-block"
            style="
              background-image: linear-gradient(
                transparent 60%,
                var(--bs-secondary-bg-subtle) 40%
              );
            "
            ref="subscribeEmail"
          >
            訂閱Email
          </p>
          <p class="mb-2">感謝您訂閱 macarOn 電子報！</p>
          <p class="mb-2">搶先獻上訂閱折扣碼，結帳金額享八五折優惠</p>
          <div class="d-flex flex-wrap mb-4 mb-md-3">
            <p class="mb-2 display-6 me-2">
              <i class="bi bi-ticket-perforated-fill fs-3 me-2"></i>
              <span>MCOmemb</span>
            </p>
            <button
              type="button"
              class="btn btn-sm btn-primary align-self-center"
              @click="copyCode('MCOmemb', $event)"
              ref="copyBtn"
            >
              複製優惠碼
            </button>
          </div>
          <div class="text-center">
            <button
              type="button"
              class="btn btn-dark"
              @click="closeSubscribeView"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white" ref="anniversary">
    <div class="container pt-5 pb-4 text-center text-primary-emphasis">
      <h3 class="fw-bolder align-middle text-secondary mb-3">
        \ 週年慶活動開跑 /
      </h3>
      <div class="border-bottom pb-3">
        <h4 class="fw-bolder fs-3">
          <span
            class="badge bg-secondary-subtle text-secondary rounded-pill align-middle me-2"
            style="font-size: 0.5em"
            >{{ anniversaryInfo[0].name }}</span
          >
          <span class="align-middle">{{ anniversaryInfo[0].info }}</span>
        </h4>
        <div class="position-relative w-100 mt-3 discountedProducts">
          <router-link
            :to="`/product/${product.id}`"
            v-for="(product, key) in discountedProducts"
            :key="'discountedProduct' + key"
          >
            <img
              :src="product.imageUrl"
              :alt="product.title"
              style="aspect-ratio: 1 / 1"
              :style="{
                width: `${100 / (discountedProductsNum + 1) + 5}%`,
                left: `${
                  key *
                  (100 / (discountedProductsNum + 1) +
                    5 -
                    (5 * (discountedProductsNum + 1)) / discountedProductsNum)
                }%`
              }"
              class="position-absolute rounded-circle"
              data-aos="fade-up"
              :data-aos-duration="100 + key * 100"
            />
          </router-link>
          <router-link
            to="/products"
            class="position-absolute rounded-circle btn btn-primary text-white d-flex align-items-center justify-content-center linkToProducts"
            style="aspect-ratio: 1 / 1"
            :style="{
              width: `${100 / (discountedProductsNum + 1) + 5}%`,
              left: `${
                discountedProductsNum *
                (100 / (discountedProductsNum + 1) +
                  5 -
                  (5 * (discountedProductsNum + 1)) / discountedProductsNum)
              }%`
            }"
            data-aos="fade-up"
            :data-aos-duration="100 + discountedProductsNum * 100"
          >
            <span>查看更多</span>
          </router-link>
          <div
            style="aspect-ratio: 1 / 1"
            :style="{
              width: `${100 / (discountedProductsNum + 1) + 5}%`
            }"
          ></div>
        </div>
      </div>
      <div class="border-bottom">
        <h4 class="fw-bolder fs-3 mt-3">
          <span
            class="badge bg-secondary-subtle text-secondary rounded-pill align-middle me-2"
            style="font-size: 0.5em"
            >{{ anniversaryInfo[1].name }}</span
          >
          <span class="align-middle">{{ anniversaryInfo[1].info }}</span>
        </h4>
        <p class="mb-0 mb-md-2">
          新朋友限定優惠！立即使用折扣碼，結帳金額享九折優惠。
        </p>
        <div
          class="d-flex flex-wrap mb-2 mb-md-3 justify-content-center overflow-hidden"
        >
          <p class="display-6 me-2 my-1" data-aos="fade-right">
            <i class="bi bi-ticket-perforated-fill fs-3"></i>
            newfriend
          </p>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary my-1"
            @click="copyCode('newfriend', $event)"
            data-aos="fade-left"
          >
            複製優惠碼
          </button>
        </div>
      </div>
      <div class="border-bottom">
        <h4 class="fw-bolder fs-3 mt-3">
          <span
            class="badge bg-secondary-subtle text-secondary rounded-pill align-middle me-2"
            style="font-size: 0.5em"
            >{{ anniversaryInfo[2].name }}</span
          >
          <span class="align-middle">{{ anniversaryInfo[2].info }}</span>
        </h4>
        <p class="mb-0">提供三大取貨服務</p>
        <div class="d-flex flex-wrap justify-content-evenly align-items-center">
          <div
            class="text-center m-3"
            v-for="(delivery, key) in deliveryWays"
            :key="'delivery' + key"
            data-aos="zoom-out"
          >
            <div class="delivery">
              <img :src="delivery.image" :alt="delivery.way" />
            </div>
            <h5 class="fw-bolder mt-3">{{ delivery.way }}</h5>
          </div>
        </div>
      </div>
      <div>
        <h4 class="fw-bolder fs-3 mb-sm-0 mt-3">
          <span
            class="badge bg-secondary-subtle text-secondary rounded-pill align-middle me-2"
            style="font-size: 0.5em"
            >{{ anniversaryInfo[3].name }}</span
          >
          <span class="align-middle">{{ anniversaryInfo[3].info }}</span>
        </h4>
        <div
          class="d-flex justify-content-center align-items-center overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            class="bi bi-envelope h-100"
            style="color: var(--bs-primary)"
            viewBox="0 0 16 16"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
          <div class="ms-4" data-aos="zoom-in-left">
            <p class="mb-2" style="text-align: justify">
              訂閱 macarOn 電子報，將立即獲得訂閱折扣碼，結帳金額享八折優惠！
            </p>
            <button
              type="button"
              class="btn btn-outline-secondary w-100"
              @click="goTarget('subscribe')"
            >
              前往訂閱
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <WebRecommand :num="5" :bgColor="true" :isRandom="false" :classicType="true">
    <template #title>人氣商品</template>
  </WebRecommand>
</template>

<style>
.delivery {
  max-height: 250px;
  max-width: 250px;
  aspect-ratio: 1;
  position: relative;
  z-index: 1;
}
.delivery::before {
  content: '';
  background-color: var(--bs-orange);
  position: absolute;
  top: 5px;
  left: 10px;
  bottom: -5px;
  right: -10px;
  border-radius: 50%;
  z-index: -1;
}
.delivery img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
  border-radius: 50%;
}
.subscribeBackground {
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1702696009212.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DR1SJPMCeigeIgJNvQyrpVzBohFCLhuLdqf%2Fs6wrQSdN43jX33yNZSaJw3NxniqCz1ARhD9Yxly4NVxpiiUv7FmsQLLJnZgBQkA6QtMKuWxABfuP3OTlC%2BrJbZsqIL9frAhh4u29pIf0JrargCEKLfzVXSIz5bax0RXqu2yvDWUqlZhAq76%2BN2Gsdxy805ep1p4ctYwLLN1Q25HeuVhbwxVri6TYmmSFVMxM6oEAgco0JrwLKY6%2FSteoZkwNq%2B%2FDhGq88zwJCcddrsEWvVoDS5tinIOGZfeakPWSKArI4PoRdQ33sLNIdq5ah%2FfcM3a2ffBC6OWQx1IbfQzwoO8jow%3D%3D);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
}
@media (min-width: 992px) {
  .subscribeBackground {
    background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1702358864882.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oM5TlSijR1vMNQtYmYXOgbLaJQwl0Gz0VQlpJHkw9XwQwd07M5TaVY4Pnf5%2FktT0Ed9LGOWT0elHG0Ht1j61QA13HJ7fpBLPf03umSWsrWA5R6fG5Bhmu7prV%2F%2Byq8UwxbpxmpiQgIthdn0c%2BDh6BpflGLEq%2B7N50H%2F7d2mOtrC5BtJjWfH75FUvM%2FwtOEK1yjztL7F1Diam5%2F5sOypANcDa0wIIuCBQN95mfDbzNY0Fc17sCrdapxrQAJprZWySXLk1uR%2FxQ5yBAY5UJxY9bEUy7a4BgsHeT9BO7EabgfBvnUhPzE%2BS%2BuIkWvEiulvytWA2eiZlxSPlUDECHa8pSQ%3D%3D);
    background-position: left top;
  }
  .discountedProducts a:hover img,
  .linkToProducts:hover {
    top: -10px;
  }
}
</style>

<script>
import BannerCarousel from '@/components/WebBannerCarousel.vue'
import ProductCardClassic from '@/components/WebProductCard-classic.vue'
import WebRecommand from '@/components/WebRecommand.vue'
import AOS from 'aos'
import { RouterLink } from 'vue-router'
AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
})
export default {
  data() {
    return {
      bannerImages: [
        'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1702358908364.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bF%2FbqfCcl%2FD2m%2FeXkv3W9ivbpbkfL4L%2B8zPl14vt0ByA9LVHrm%2Fk5wnk3cmLPKNIu9sCxXrNuEgBpNRBYVIhZF1ctjA5ckdXPCftnGuGrDEH2qgjUCNHQeonUgoAVk8rqjgZBpg6ywebVApWs%2FS0TfqWGxtbWBmz%2FOuwKYnsZtF9TPwIx0heL4l0d2a32aeh%2FkkOSYWe1WsddM2dnncdvxitJYiwU2mfgYZpf1WzrHRfErCUSUv5L%2Bhl%2Bj%2FpY%2FVVvOruqK3AmlEQOyWAkRE8p0g%2Fl20goW0U651wMRtshVqASYANN7ruUj0KCpH4GTwa8mcRzjP7Cl6YdZXafMVg8A%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547377040.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YcHDUtduB8Xb3pJQnRrJnnkqfuiQDDiLNmGN6uV4S9gX4gbXo7a9bXBAhmUZRAS9djNdOGeYjcr8RpPlgFHX7zpw7ApodoQoPse43guX3Yp%2FugHwDbWMDpUSYUEiM0rwlTeVry7ugQDiA2HneBmcdel5cO4qeesGojC%2F%2FH8hznQG%2BP8vHEEpPd7vf7XQfXR2c2YOS7J6v7emTfOAlt1IwBwF9tVegVVuD1j4OO2kEF2t0QaWfRuc3I4x8jcCdQtbnweb7JZYZjlsW3%2Fs8cxDXXvQ%2FC5NaxLQco%2FNZbpR6TeLOZGTyvjwl58M4l6KP%2FT34HWjMJuXBtBOE0vIf4ptbg%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547322880.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FNhU%2F2KjMjyrak3XDCaSByEqsv%2FHBGu6wpOM6c%2Flv3kbWuMsIlsQhO4jBDoBCYmDQUeOItGevqL7OUHXJgMgGPucfXoR%2FPcD6RgJ7JNZ%2Bt35pjDYoGgRWwvjBbF6joeHQCtHaTaNYb9xVectAnQfapwCedezLtJllXlyBYm8wIYRMNXwyWMPcSF%2FMRuzgbLEKmheBHOaICF88m4ST8qbI%2FigNpOq%2F%2F0YlP%2BkLbnZcP4hsPiVlzBCmqlvDBM1%2FTJs4SVa5yQKcYIr8qaRGOEFFQ9dbeQhxL1q5sb0phNlRudxQxZDOrUC4HIPI98ol6%2BqJA%2B75Pse2eWnoD3x0lf7sA%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547350774.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hesbZ0j88e85SU04AWUaDDPgKswQjaGRBVNPSGcD477dPD%2F94ob7TvIEvIHOziJQmqs9fBaoJeU63uYcj%2FzBh%2FYOS4t1WaMOB%2FZ2j7VDoWmjdHhDXy0J%2FKzkiOJcUJblsyQ5Y4Ozy4bjtm%2FfWlvRrCN9UDBWhMlktARUfgHmLKtZnZVoepYGNphLuPOuWhNi5dwdctg1Ev3NhXBs9C5xfWwTrF0rlZhyRXVUtrG1xcdWned2wI1erRvSmaKpf%2BZVd%2Fbj6VKIVD7m52sQB0gdo9mfwndl6%2BzTdsRWxmDFxzd1JCCHJpz6%2BBXWjGz6h9PWWU8VwDiJkcvwHkMlo7YYDA%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547331394.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dZKsiPqgpqTxYrjp3Ip6VILxX9VWJVcO1W7XF8m2%2BdPUFolE1pDTyL9imU0JKQa5IATWkQhr7lIJ8zPEqqXkD0kQkPXt5H5Jh2ewGyU6ORZiPFEW92jmonjuClq5F%2BpMDtMoM7WfV0mDE1ZFEp0V%2FKeSQnKdqsoWfdztTfAssLUR6Zsj6fZu%2B9JFuUL7pHY8tbtuEQKuXv4qPL%2F8ogEb5pEk0coBRaLkk138vGsXZRSWXxKyIc1cZ7rZrbgkWG2Vy%2FOtG%2F1Han%2BznIak%2BEGiSpzYUW4dQR0au0ksCQqhZCTUPOHGdnxRqFhbf75brWx2wKHhYpfeX%2BKJoPA3DtQUVQ%3D%3D'
      ],
      discountedProducts: [],
      discountedProductsNum: 8,
      featuredProducts: [
        {
          id: '-NhkSxjcw0blB6bdsN2L'
        },
        {
          id: '-NhkFgYVUIPsrWPtONg-'
        }
      ],
      deliveryWays: [
        {
          way: '門市取貨',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700578441045.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N%2BdqoBj8M7oNyrw0LbdGiE2Br53t0QzOwbxYo3ur8a3SgAagv4r3TyjGw4wggEGnob6JE%2F2MiKeA2tibZ11PYH%2Fa3EIkv6OaAxggPsHNvLt4mB2PkRkQ2FUXfQDWF%2F9HPBjdz7oAWNfOMP6L8SJoTvl4%2FqjPQHs34WQ%2BthGEhf024KtCUsTKlCN0T%2BaXxQno%2FEG4GGhr7hOy%2FBCQvjptDUp5uPvjAYb%2FBgQuKEnpai12pz%2BL98kywSOmfs1YnlNKU9oj0atg02uDYSpS8O9mGl0YlFYnQ5IRwqQFpxR8LOhSZxWLZvMMD1FX6kn%2BLJW1RVxTocu%2BdZ6ZrzQe2ndizw%3D%3D'
        },
        {
          way: '貨運低溫宅配',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700578452764.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bxjQ3tCE2k4uVjA5Re90Wy%2FQV24EBuNDGrbPui73O5cC08PDOeVozY4eJdxlyRzaPYYoqC7PV0Q2v%2ByExrE%2Fsif8hJBxsFZCwup21%2FlgT8iWonn0mKO%2FpC9aRlM2Zc%2BKeD0Dn2pKLe4Ge%2FIyGJJsAxEiCueaytif2rRkMHcxVbgP%2F9q9UgY0eKNMn8xMLCPT13c4am7%2BHh6QejxTN2IfT%2B%2F6MflAxBS4nrs2cmEqOejKpciBBxbmB0vCpT2In%2FiZ5UjQ7Byq5LL0%2BicLLBfptXzGkcdJ%2FuiyhhgYEIIZgHGuSmvqNUyUHPK78P72KBXOYafOZaZj1NvA2CQ5TM4JIg%3D%3D'
        },
        {
          way: '超商冷藏運送',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700578463742.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hHuIA7adBvasOabvHeE4TVkZQfF6WBKwjDSKX8j%2F4LrK0KgQmJFeVkNNNC93IN3bidDasud0Y7TyuFmUL3FW99Y3SZ0sf0g36N6kwV0dBu5bpaif0IE6wWjtmugxF92V7xazVDEdB9emFAHFCWVz8VBFBQpHwLV3b6TTiELmGR8xRR3Gp01ydb9YlIEbgh1K0OT48cw1Z0l35KK564p86zFLvm3313Kssin4cJfX7OCAm9GlVlvdYAMwCEKfEwnuT9wQzyvNRuzl7G1HZULpleS6poTQTiD%2Bunbdh2pokYKAewepxniahoNnoImEyWbOHOFS9AbuCCUQqQC4s0ykyQ%3D%3D'
        }
      ],
      subscribeView: false,
      userEmail: '',
      anniversaryInfo: [
        {
          name: '好禮一',
          info: '多樣商品限時特價'
        },
        {
          name: '好禮二',
          info: '新朋友下單享優惠'
        },
        {
          name: '好禮三',
          info: '不限金額皆免運費'
        },
        {
          name: '好禮四',
          info: '訂閱用戶加碼優惠'
        }
      ],
      adDisplay: false,
      isLoading: false
    }
  },
  inject: ['emitter'],
  components: {
    BannerCarousel,
    ProductCardClassic,
    WebRecommand,
    RouterLink
  },
  methods: {
    async subscribe(validate) {
      try {
        const isValid = await validate()
        if (!isValid.valid) return
        this.$refs.subscribeEmail.textContent = this.userEmail
        this.subscribeView = true
        this.$refs.userEmail.reset()
      } catch (e) {
        this.emitter.emit('sendMsg', {
          message: '信箱格式錯誤',
          status: 'error'
        })
      }
    },
    copyCode(code, e) {
      e.target.classList.add('disabled')
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            e.target.innerHTML = '<i class="bi bi-check me-1"></i>已複製'
            e.target.classList.add('btn-success')
            e.target.classList.add('btn-outline-success')
          })
          .catch(() => {
            e.target.innerHTML = '<i class="bi bi-x"></i>複製失敗'
            e.target.classList.add('btn-danger')
            e.target.classList.add('btn-outline-danger')
          })
      } else {
        e.target.innerHTML = '<i class="bi bi-x"></i>複製失敗'
        e.target.classList.add('btn-danger')
        e.target.classList.add('btn-outline-danger')
      }
    },
    closeSubscribeView() {
      this.subscribeView = false
      this.btnReset()
    },
    btnReset() {
      this.$refs.copyBtn.classList.remove('disabled')
      this.$refs.copyBtn.classList.remove('btn-success')
      this.$refs.copyBtn.classList.remove('btn-outline-success')
      this.$refs.copyBtn.classList.remove('btn-danger')
      this.$refs.copyBtn.classList.remove('btn-outline-danger')
      this.$refs.copyBtn.innerHTML = '複製折扣碼'
    },
    async getData() {
      try {
        this.isLoading = true
        await Promise.all([
          ...this.featuredProducts.map((product, key) =>
            this.getProductData(product, key)
          ),
          this.getProductList()
        ])
        this.isLoading = false
        if (window.history.state.back === null) {
          this.adDisplay = true
        }
      } catch (e) {
        this.emitter.emit('sendMsg', {
          message: e,
          status: 'error'
        })
      }
    },
    getProductData(product, key) {
      return new Promise((resolve, reject) => {
        const API_GETPRODUCT = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${product.id}`
        this.axios
          .get(API_GETPRODUCT)
          .then((res) => {
            if (res.data.success) {
              this.featuredProducts[key] = res.data.product
            } else {
              this.emitter.emit('sendMsg', {
                message: '找不到產品',
                status: 'error'
              })
            }
            resolve()
          })
          .catch((e) => {
            this.emitter.emit('sendMsg', {
              message: e,
              status: 'error'
            })
            reject(new Error('Failed: get product data'))
          })
      })
    },
    getProductList() {
      return new Promise((resolve, reject) => {
        const API_GETPRODUCTLIST = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
        this.axios
          .get(API_GETPRODUCTLIST)
          .then((res) => {
            if (res.data.success) {
              for (let index = 0; index < res.data.products.length; index++) {
                if (
                  res.data.products[index].origin_price !==
                  res.data.products[index].price
                ) {
                  this.discountedProducts.push(res.data.products[index])
                }
                if (
                  this.discountedProducts.length >= this.discountedProductsNum
                ) {
                  break
                }
              }
            } else {
              this.emitter.emit('sendMsg', {
                message: res.data.message,
                status: 'error'
              })
            }
            resolve()
          })
          .catch((e) => {
            this.emitter.emit('sendMsg', {
              message: e,
              status: 'error'
            })
            reject(new Error('Failed: get product list'))
          })
      })
    },
    adjustSentence(content) {
      return content.replaceAll('，', '<br>').replace('。', '')
    },
    goTarget(target, closeAd = false) {
      if (closeAd) {
        this.adDisplay = false
      }
      const yOffset = -80
      const y =
        this.$refs[target].getBoundingClientRect().top +
        window.scrollY +
        yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    },
    showAdvertise() {
      this.adDisplay = true
      window.removeEventListener('scroll', this.showAdvertise)
    }
  },
  created() {
    this.getData()
  }
}
</script>
