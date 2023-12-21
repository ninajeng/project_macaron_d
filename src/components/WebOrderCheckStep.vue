<template>
  <div class="container">
    <h5 class="mb-0 fw-bolder">結帳流程</h5>
    <div class="stepInfo d-none d-md-flex mt-2">
      <template v-for="(info, key) in stepInfo" :key="'stepInfo' + key">
        <div
          class="deco deco-mid"
          v-if="key > 0"
          :class="{ decoActive: step > key }"
        ></div>
        <div class="p-3 w-100 stepDisable" :class="{ stepActive: step > key }">
          <h6 class="fw-normal" v-if="key + 1 < stepInfo.length">
            STEP {{ key + 1 }}：
          </h6>
          <p class="mb-0" v-else><i class="bi bi-flag-fill"></i></p>
          <p class="mb-0">{{ info }}</p>
        </div>
      </template>
    </div>
    <div class="accordion d-md-none mt-2" id="accordionStep">
      <div class="accordion-item rounded-0">
        <template
          v-for="(info, key) in stepInfo"
          :key="'accordionStepInfo' + key"
        >
          <h2 class="accordion-header" v-if="step === key + 1">
            <button
              class="accordion-button rounded-0 fw-bolder"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseStep"
            >
              STEP {{ key + 1 }}：{{ info }}
            </button>
          </h2>
          <div
            id="collapseStep"
            class="accordion-collapse collapse rounded-0"
            :style="{
              backgroundColor:
                step > key ? 'var(--bs-accordion-active-bg)' : 'white'
            }"
            data-bs-parent="#accordionStep"
            v-else
          >
            <div class="accordion-body">
              <p class="mb-0">STEP {{ key + 1 }}：{{ info }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.stepInfo {
  --deco-bg-disable: var(--bs-dark-bg-subtle);
  --deco-bg-active: var(--bs-dark);
  --deco-line-color: #ffffff;
}
.stepDisable {
  background-color: var(--deco-bg-disable);
}
.stepActive {
  background-color: var(--deco-bg-active);
  color: #ffffff;
}

.deco {
  min-width: 3rem;
}
.deco-mid {
  background: linear-gradient(
      115deg,
      transparent 75%,
      var(--deco-bg-disable) 25%
    ),
    linear-gradient(65deg, transparent 75%, var(--deco-bg-disable) 25%),
    linear-gradient(115deg, transparent 65%, var(--deco-line-color) 65%),
    linear-gradient(65deg, transparent 65%, var(--deco-line-color) 65%);
  background-color: var(--deco-bg-disable);
}
.stepActive + .deco-mid {
  background-color: var(--deco-bg-active);
}
.decoActive {
  --deco-bg-disable: var(--deco-bg-active);
}
</style>

<script>
export default {
  data() {
    return {
      stepInfo: ['確認明細、輸入優惠碼', '填寫訂購人資料', '付款', '訂單完成']
    }
  },
  props: ['step']
}
</script>
