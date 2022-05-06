<template>
  <div class="maps">
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

    <div class="order-area" v-show="orderCardShow">
      <div class="top">
        <span></span>
      </div>
      <div class="list">
        <OrderCard v-for="item in 5" :key="item"/>
        
      </div>
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
  orderCardShow:boolean = true;
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

  mounted(){
    this.DragMenu()
  }

  DragMenu():void{
    const control = document.querySelector('.order-area .top');
    const container = document.querySelector('.order-area');

    let maxPoint:number = window.innerHeight * 0.2;
    let basePoint:number = 0;
    let middle:mumber = window.innerHeight / 2
    let touchY:number = 0;

    control?.addEventListener('touchstart', (e)=>{
      e.preventDefault();
      basePoint = container.offsetTop;
    },false)

    control?.addEventListener('touchmove', (e)=>{
      touchY = Math.floor(e.touches[0].clientY)
      console.log(touchY)
      container.style.transition = 'all 0s ease-out';

      if(touchY >= maxPoint){
        container.style.top = touchY + 'px'
      }
    },false)

    control?.addEventListener('touchend', (e)=>{
      let endPoint = e.changedTouches[0].clientY
      container.style.transition = 'top 0.2s ease-out';

      if(endPoint > middle && endPoint > basePoint){
        container.style.top = window.innerHeight + 'px'
        setTimeout(() => {
          container.style.display = 'none'
        }, 1000);
      }else if(touchY <= basePoint){
        container.style.top = maxPoint + 'px';
        
      }
    },false)
  }
}
</script>

<style lang="scss" src="./maps.scss" scoped />
