<template>
  <div class="container">
    <div
      class="row justify-content-end align-items-center text-primary-emphasis gy-0"
      style="min-height: 90vh; text-align: justify"
    >
      <div
        class="col-lg-8 rounded p-3 pt-2"
        style="
          background-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(2px);
          box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
          transition: opacity 1s;
        "
      >
        <nav
          style="
            --bs-breadcrumb-divider: url(
              &#34;data:image/svg + xml,
              %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='%236c757d'/%3E%3C/svg%3E&#34;
            );
          "
          aria-label="breadcrumb"
          class="d-block d-lg-none"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link
                class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                to="/"
                >首頁</router-link
              >
            </li>
            <li class="breadcrumb-item active">關於我們</li>
          </ol>
        </nav>
        <hr class="d-block d-lg-none mb-2" />
        <p class="mb-2">
          <span class="text-primary fs-2 fw-semibold mb-0 me-1"
            >macar<i class="bi bi-egg-fill"></i>n</span
          >是一家專注於呈現最優質甜點的馬卡龍專賣店。
        </p>
        <p class="mb-3">
          我們的故事始於遠赴法國，深入探索和學習甜點的藝術和技術。在那裡，我們融合了法式烘焙傳統與創新靈感，精心學習每一種馬卡龍的獨特秘訣。回到家鄉，我們懷著熱忱與對品質的堅持，決心建立這間特色馬卡龍店。我們不僅嚴選當季的新鮮食材，更注重於每一個細節，以手工製作出最完美的馬卡龍。這不僅僅是一種烘焙，更是對甜點藝術的完美詮釋。
        </p>
        <p class="mb-3">
          誠摯地邀請您加入這趟甜蜜旅程，品嚐我們每一款用心製作的馬卡龍，感受法式甜點帶來的美好和滿足。
        </p>
        <hr class="d-block d-lg-none" />
        <router-link to="/products" class="btn btn-secondary"
          >選產品<i class="bi bi-caret-right-fill"></i
        ></router-link>
      </div>
    </div>
  </div>
  <!-- 背景圖 -->
  <div class="fixed-top h-100 w-100 aboutBackground"></div>
  <div class="bg-white overflow-hidden">
    <div class="container py-3 py-md-5">
      <h3 class="text-center fw-bolder text-primary-emphasis mb-3">
        精品級法式點心
      </h3>
      <div
        class="row feature justify-content-center align-items-center mb-4"
        :class="{ 'flex-row-reverse': key % 2 === 1 }"
        v-for="(feature, key) in featureDescribe"
        :key="'feature' + key"
      >
        <div class="col-md-5 feature-describe rounded text-primary-emphasis">
          <div
            class="text-center p-3"
            :data-aos="key % 2 === 0 ? 'fade-right' : 'fade-left'"
            data-aos-duration="2000"
          >
            <h4 class="fw-bolder">{{ feature.title }}</h4>
            <p class="m-0">{{ feature.content }}</p>
          </div>
        </div>
        <div class="col-md-6 feature-image">
          <img
            class="img-fluid rounded"
            :data-aos="key % 2 === 0 ? 'fade-left' : 'fade-right'"
            :src="feature.image"
            :alt="feature.title"
          />
        </div>
      </div>
    </div>
  </div>
  <WebContactInfo :withIcon="true"></WebContactInfo>
</template>

<style>
.feature-describe {
  background-color: var(--bs-warning-bg-subtle);
  box-shadow: 0;
  z-index: 2;
}
.feature-image {
  z-index: 1;
}

.feature {
  background-color: var(--bs-warning-bg-subtle);
  padding-bottom: 1rem;
}
.aboutBackground {
  background-color: var(--bs-primary-bg-subtle);
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1703774961511.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N5ohyoTS3IsOeZEZxiuWpV0YvGQUgK%2Fh0e%2FS96FTs37yPBjiWv4n68%2BGKHtnT%2FKChHkzc3L2I3dTAaDqKfI%2FsfvPg%2FdTPi4myfm6jXcs2Y26S%2BEiDZFQeeCGZcZiddAMQmvsmLKMV1de%2FooHWiO3JT6YU10Nkd5wZtAJDkDD0x76C3s%2FSzqd%2BXX1uY6afpAX1mLz9ImXioEtFGlj3bEXdQKxlNAcSTWWeafRE2AYcXFKA2gl%2FY2XEOt7k2zwYq26J7k2jmltZsTnO%2Fq9k3JDdaZ2QPNuaMQpvLRAgYOnC4GVIlD1zIkkdhJmVRQwcFOUqJFNKCf8EVDdGoz3o2LhaQ%3D%3D);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
}
@media (min-width: 768px) {
  .feature:nth-of-type(odd) {
    .feature-describe {
      transform: translateX(30px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
    .feature-image {
      transform: translateX(-30px);
    }
  }
  .feature:nth-of-type(even) {
    .feature-describe {
      transform: translateX(-30px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
    .feature-image {
      transform: translateX(30px);
    }
  }
  .feature {
    background-color: transparent;
    padding: 0;
  }
  .aboutBackground {
    background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1704419980393.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rIJEGV3nLxm9NbOY0FmKspH9DDmEexecc08YajR87ZPmYb5NzTPqi%2B3BpybFRhtQkn00%2FOo4oJCQEOD2V6BZgNbuhITtYUMgR21WJhaCmM3SyoTTRYhN%2F9orcYf5AXfW5xexNSarYHaokFQNNIHIKUGc%2Fxkf4M8jiR8e7LP1ADCHILpfYSLrBAkxW5DBscHClZ3s74qfoPUo%2BteNifsOOzbIRFlg9AWfVAMElIoX%2FaE29ct87HiL4w%2FRMCHP5qExsyHzJf3pXGlXvc0hjnSX6oFd0Y%2F9SuGwLzGtLa8RWVxUqpocYrSeAKjxtrP79U1XxrCnqXyiOToc5oJXTZU6yA%3D%3D);
  }
}
</style>

<script>
import WebContactInfo from '@/components/WebContactInfo.vue'
import AOS from 'aos'
AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
})
export default {
  data() {
    return {
      featureDescribe: [
        {
          title: '嚴選新鮮食材',
          content: '選用高品質食材製成，外殼酥脆、內餡飽滿',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700550140065.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IBKFyCkQ%2FHKuMiczpTGxWcUnu0Enb0D%2FJjFrXhPXehMISaVXLnPODLGtjGnmb3ZZn9lZCN9nLtBLKUgXBzuLSHL4fzaDwcI3VbcCQqp6wM9Utewg1w7MUSybN5SHMjmqOkdwiVkqtqt%2FZ0NSOcSugTCsJ8Inma8NVDw0e6tUqDCO0ZsTxuHxNIn8hk%2BarurdVrIBxk8Pm%2FANeqX7g0kYDLRuLcwaO3esGFh92nSlKEsrvxEGruGoYssyXVICD8rWovp6YgQrITJJCowgzd6OSaDYVS%2FmSuTbre4zNrTBPEcC18AR3twQ8VhH9mWRWdUABbzToG%2Bk%2BfM3kGk5iFFN4A%3D%3D'
        },
        {
          title: '手工精心製作',
          content: '我們用心，讓每一顆馬卡龍都是完美組合',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700623562475.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=h5SwGs8PVy6KAjR%2BoGbtF1M70j7%2BDfDNIpHng3EB4F8DIjKmqc0b2A8v6y%2FpWQe861ywEPaQAla5mjpwJ4lz3nrhy7IBndvp2fAkB5u6zAsL%2FypFFmv%2B1OMUozZOw4pVsOR9iM8zqnO8%2F4Lz4Q59O5oDWecnpoXVeji68B0krWgkI0VyQf5iKMtVx1bfpyBfqryU4rdLjuqNtiE0XHRrqbgGq5irfORWqIOW4SflQBOQF1CWieWINb6GW2gmB%2BZcsJ54EMPxNUd43uYy2Noo68ZnbnQ4kKAqQuyR9c5QKePT574h5U2Vi3%2FJ%2BfephfpoZ6kobHc0HfRqiCmHo7%2Fo9A%3D%3D'
        },
        {
          title: '多樣化口味',
          content: '從經典口味到當季限定風味，滿足您的味蕾',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700623591077.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iq%2FabU1zLVE%2F7hLIrCXeVj3kmnhxrtgTuwxUTuP%2FNrAHTMmye%2FqPINTRL3akO1vEmbbHd1F31lk5HzJ4XaIBiOklPLoERFFEw8OJgrHj0WNvnto5i5kPyWE2DEsVkyrurjIMuYvZ3I%2FAZ%2Bwi4kYQK8%2Fn1886%2B2jx1RP%2FvgzUlKsEGgoYHbJGnDd43tBeT7%2F3zQqGPN9%2BCqW3xcV%2Fi6cfiOrLp4EVTPlLdlx%2Bgwx7q23VyX4bVH6Dz%2F%2F74hNfpsB6zQ0om9IQKz6EmC56tIV5f%2F1UfxZMyCP3jRrAeHGfX6zrLjAI924sWtYhsQwTvaue9PlzgvD802NLn65VakVfQg%3D%3D'
        },
        {
          title: '獨特禮盒包裝',
          content: '精美的禮盒包裝，為每一刻增添奢華',
          image:
            'https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700624298368.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PND61nSJZ02VdjulofkCsDUj3XSzwHA04VkHt8oItnxgACweO7ZpO2PdVAtIWR8sK9FlyBilT574xXJGya%2BM54SqFY6i2pQuNyQpEsXgJZ3B9utTwkHHxW%2F0%2FL5QNO811z%2BmvIaMXUnlpt89vjS5nJN46xDgLaSwekdjzO4B82bYV6F4mueuFsSflLTEDeZwsZ2nfiJ7JeCrT8u6MHyfalzzgjdp6PYYlZ1dx1ALvrnbR%2BUhOlRiH%2BT2bmohOCGQVbSfbWfo1WQ0iV4S5wTtrzpAswru%2BGYpHcERtkqRD3z7UZy3JMPA%2B%2BfQ5bykkQ9g3GcqfdvyFx5C52t%2FAq%2BIvA%3D%3D'
        }
      ]
    }
  },
  components: {
    WebContactInfo
  }
}
</script>
