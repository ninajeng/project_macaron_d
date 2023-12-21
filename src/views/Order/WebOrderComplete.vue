<template>
  <div class="container pb-5">
    <div class="row justify-content-lg-between">
      <div class="col-lg-8">
        <OrderStatus @order-data="getOrder" :isSearch="false"></OrderStatus>
        <OrderCard
          :cart-info="orderProducts"
          :isEdit="false"
          v-if="getOrderComplete"
        >
          <template #title>訂單資料</template>
          <template #coupon>優惠券折扣：</template></OrderCard
        >
      </div>
      <div class="col-lg-4">
        <Orderlist
          :cart-info="orderProducts"
          :isEdit="false"
          v-if="getOrderComplete"
        >
          <template #title>訂單明細</template></Orderlist
        >
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
import OrderCard from '@/components/WebOrderCard.vue'
import OrderStatus from '@/components/WebOrderStatus.vue'
import WebRecommand from '@/components/WebRecommand.vue'
export default {
  data() {
    return {
      orderProducts: {},
      getOrderComplete: false
    }
  },
  props: ['cartInfo'],
  components: {
    Orderlist,
    OrderCard,
    OrderStatus,
    WebRecommand
  },
  methods: {
    getOrder(data) {
      this.orderProducts = data
      // console.log(data)
      this.getOrderComplete = true
    }
  }
}
</script>
