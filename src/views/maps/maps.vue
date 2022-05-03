<template>
  <div class="maps" @click="orderCardShow = !orderCardShow">
    <Header />

    <KakaoMap ref="map" height="100vh" />

    <div class="map-top-btns">
      <v-btn
        text
        v-for="(item, index) in orderState"
        :key="index"
        :class="{ active: stateActive === index }"
        @click="stateActive = index"
      >
        <label>{{ item.name }}</label>
        <span>{{ item.number }}</span>
      </v-btn>
    </div>
    
    <div class="map-bottom-btns">
      <div class="left">
        <v-btn text @click.stop="()=>{}">배송지연알림</v-btn>
      </div>
      <div class="right">
        <v-btn
          icon
          class="mylocation"
          @click="() => $refs.map.moveCameraNowPosition()"
        >
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="order-area">
      <OrderCard v-show="orderCardShow"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/header.vue";
import KakaoMap from "@/components/kakaomap/kakaomap.vue";
import OrderCard from '@/components/orderCard/orderCard.vue'

@Component({
  components: {
    Header,
    KakaoMap,
    OrderCard,
  },
})
export default class extends Vue {
  orderCardShow:boolean = false;
  stateActive: number = 0;
  orderState = [
    {
      name: "전체",
      number: 30,
    },
    {
      name: "수거",
      number: 13,
    },
    {
      name: "배송",
      number: 17,
    },
  ];
}
</script>

<style lang="scss" src="./maps.scss" scoped />
