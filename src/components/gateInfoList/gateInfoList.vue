<template>
  <v-dialog
   v-model="visible"
  >
    <div class="modal gateInfo">
      <div class="top">
        <h3>출입정보</h3>
      </div>  
      <div class="middle list">
        <div class="gateItem" v-for="item in 10" :key="item">
          <dl>
            <dt>상세주소</dt>
            <dd>905호</dd>
          </dl>
          <dl>
            <dt>출입정보</dt>
            <dd>종표시 누루고 7777</dd>
          </dl>  
        </div>
              
      </div>  
      <div class="bottom">
        <v-btn text class="ok" @click="visible = false">확인</v-btn>
      </div>  
    </div>
  </v-dialog>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue{
  visible:boolean = false;

  show(value:boolean):void{
    this.visible = value
  }
}
</script>

<style lang="scss" src="./gateInfoList.scss" scoped />