<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal delayGuide">
      <div class="top">
        <h3>
          배송지연안내
        </h3>
      </div>
      <div class="middle">
        <div class="selectedNum">
          <span>선택됨</span>
          <strong>1</strong>
        </div>

        <div class="times">
          <v-row>
            <v-col cols="6" v-for="(item, index) in 10" :key="index">
              <v-btn class="time-item" text :class="{active:active === index}" @click="active = index">
                10:00 ~ 12:00
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="bottom">
        <v-btn class="cancle">취소</v-btn>
        <v-btn class="ok">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({

})
export default class extends Vue{
  visible:boolean = false;
  active:number = 0;
  
  show(value:boolean):void{
    this.visible = value;
  }
}
</script>


<style lang="scss" src="./delayGuide.scss" scoped>

</style>