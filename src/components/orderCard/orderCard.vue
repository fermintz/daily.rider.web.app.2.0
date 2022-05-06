<template>
  <div class="orderCard" @click="$router.push('orderDetail')">
    <div class="top">
      <div class="stateBox">
        수거요청
      </div>
      <div class="right">
        <span class="pickupTime">
          21.01.26<b>오전수거</b>
        </span>
        <span class="orderNumber">
          EE6B12-<b>2600</b>
        </span>
      </div>
    </div>
    <div class="middle">
      <div class="left">
        <div class="user">
          <span class="name">박수민</span>
          <span class="phone">010-8525-4561</span>
        </div>
        <span class="address">
          <v-icon>mdi-map-marker</v-icon>
          부산시 북구 구남언덕로 15 3층
        </span>
        <span class="gate">
          <v-icon>mdi-lock</v-icon>
          로비에서 엘레베이터 이용키 받아야함
        </span>
      </div>
      <div class="right">
        <span>이불포함</span>
        <span>신발포함</span>
      </div>
    </div> <!-- middle -->

    <div class="bottom">
      <div class="left">
        <v-btn class="lock" text @click.stop="()=>{}">임시보관</v-btn>
        <v-btn text @click.stop="$refs.gateInfoList.show(true)">출입정보</v-btn>
        <v-btn text @click.stop="$refs.copysnack.show(true)">주소복사</v-btn>
        <v-btn text @click.stop="()=>{}">네비안내</v-btn>
      </div>
  
      <v-btn text class="finish">
        수거완료
      </v-btn>
  
    </div> <!-- bottom -->

    <Snackbar ref="copysnack" text="주소를 복사하였습니다."/>
    <GateInfoList ref="gateInfoList"/>
  </div> <!-- orderCard -->
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Snackbar from '@/components/snackbar/snackbar.vue'
import GateInfoList from '@/components/gateInfoList/gateInfoList.vue'

@Component({
  components:{
    Snackbar, GateInfoList
  },
})
export default class extends Vue{

}
</script>

<style lang="scss" src="./orderCard.scss" scoped>

</style>