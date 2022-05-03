<template>
  <div class="orderList">
    <Header />

    <div class="stateBoard">
      <dl 
        v-for="(item, index) in orderState" 
        :key="index" 
        :class="{active: index === stateActive}"
        @click="stateActive = index"
      >
        <dt>{{ item.name }}</dt>
        <dd>{{ item.number }}</dd>
      </dl>
    </div>

    <div class="list">
      <div class="no-data">
        등록된 주문이 없습니다.
      </div>
      <OrderCard v-for="item in 10" :key="item" />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/header/header.vue';
import OrderCard from '@/components/orderCard/orderCard.vue';

@Component({
  components:{
    Header, OrderCard
  },
})
export default class extends Vue{
  stateActive:number = 0;
  orderState = [
    {
      name: "주문예약",
      number: 5,
    },
    {
      name: "수거요청",
      number: 53,
    },
    {
      name: "수거중",
      number: 5,
    },
    {
      name: "출고대기",
      number: 0,
    },
    {
      name: "배송대기",
      number: 5,
    },
    {
      name: "작업완료",
      number: 10,
    },
  ];
}
</script>

<style lang="scss" src="./orderList.scss" scoped />


