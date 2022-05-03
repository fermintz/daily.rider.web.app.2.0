<template>
  <div class="storage">
    <Header />
    
    <div class="page-title">
      <h4>
        <label>임시보관함</label>
        <span />
      </h4>
    </div>

    <div class="list">
      <div class="no-data">
        등록된 주문이 없습니다.
      </div>
      <OrderCard v-for="item in 5" :key="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OrderCard from '@/components/orderCard/orderCard.vue'
import Header from '@/components/header/header.vue'

@Component({
  components:{
    OrderCard,Header
  }
})
export default class extends Vue {

}
</script>

<style lang="scss" src="./storage.scss" scoped />