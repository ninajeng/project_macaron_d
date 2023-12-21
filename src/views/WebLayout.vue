<template>
  <div class="homeView d-flex flex-column" style="min-height: 100vh">
    <WebNav></WebNav>
    <ToastList></ToastList>
    <router-view></router-view>
    <WebFooter class="mt-auto"></WebFooter>
  </div>
</template>

<script>
import WebNav from '@/components/WebNav.vue'
import WebFooter from '@/components/WebFooter.vue'
import ToastList from '@/components/ToastList.vue'
import emitter from '@/methods/emitter.js'
export default {
  components: {
    WebNav,
    WebFooter,
    ToastList
  },
  provide() {
    return {
      emitter
    }
  },
  updated() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}
</script>
