<template>
  <div class="list-group mb-5">
    <a
      class="list-group-item list-group-item-action list-group-item-secondary rounded-0"
      href="#"
      @click.prevent="collapseCategory.toggle"
    >
      <i class="bi bi-caret-down me-2"></i>分類篩選<span v-if="!searchKey">
        ：<span class="fw-bolder">{{ filter ? filter : '全部產品' }}</span>
      </span>
    </a>
    <div class="collapse" id="collapseCategory">
      <a
        href="#"
        class="list-group-item list-group-item-action list-group-item-primary"
        v-for="(type, key) in categories"
        :key="'type' + key"
        @click.prevent="setCategory(key)"
        :class="{ active: filter === key && !searchKey }"
      >
        {{ key ? key : '全部產品' }} ({{ type }})
      </a>
    </div>
    <a
      class="list-group-item list-group-item-action list-group-item-secondary"
      href="#"
      @click.prevent="collapseSearch.toggle"
    >
      <i class="bi bi-caret-down me-2"></i>關鍵字搜尋<span class="fw-bolder">{{
        searchKey ? `："${searchKey}"` : ''
      }}</span>
    </a>
    <div id="collapseSearch" class="collapse">
      <div
        class="list-group-item list-group-item-action list-group-item-primary"
        :class="{ active: searchKey }"
      >
        <div class="input-group">
          <input
            type="text"
            class="form-control border-primary"
            placeholder="輸入關鍵字，如巧克力"
            ref="searchInput"
          />
          <button class="btn btn-primary" type="button" @click="search()">
            <i class="bi bi-search me-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle'
export default {
  data() {
    return {
      collapseCategory: {},
      collapseSearch: {},
      searchKey: ''
    }
  },
  props: ['categories', 'filter'],
  methods: {
    setCategory(key) {
      this.searchKey = ''
      this.$refs.searchInput.value = ''
      this.$emit('setFilter', key)
    },
    search() {
      this.searchKey = this.$refs.searchInput.value
      this.$emit('setFilter', this.searchKey)
    }
  },
  mounted() {
    const closeCategory = window.innerWidth < 992
    this.collapseCategory = new Collapse('#collapseCategory', {
      toggle: !closeCategory
    })
    this.collapseSearch = new Collapse('#collapseSearch', {
      toggle: !closeCategory
    })
  },
  updated() {
    window.scrollTo({ top: 0 })
  }
}
</script>
