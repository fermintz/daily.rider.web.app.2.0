<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal pictureIn">
      <div class="top">
        <h3>수거완료</h3>
      </div>
      <div class="middle">
        <div class="photos">
          <div class="no-photo" v-if="true">
            <v-icon>
              mdi-image
            </v-icon>
            <span>등록된 사진이 없습니다</span>
          </div>
          <img src="https://picsum.photos/400/400" v-else>
        </div>

        <div class="pictureBtn" v-ripple>
          <div class="left">
            <v-icon>mdi-camera-outline</v-icon>
            <span>카메라</span>
          </div>
          <v-icon>mdi-arrow-right</v-icon>
        </div>

        <div class="pictureBtn" v-ripple>
          <div class="left">
            <v-icon>mdi-image-outline</v-icon>
            <span>갤러리</span>
          </div>
          <v-icon>mdi-arrow-right</v-icon>
        </div>
    
      </div>  
      <div class="bottom">
        <v-btn text class="cancle" @click="visible = false">취소</v-btn>
        <v-btn text class="ok"  @click="visible = false">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({

})
export default class extends Vue{
  visible:boolean = false;

  show(value:boolean){
    this.visible = value;
  }
}
</script>

<style lang="scss" src="./pictureInModal.scss" scoped />
