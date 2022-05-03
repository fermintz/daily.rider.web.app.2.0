<template>
  <v-dialog
    v-model="visible"
  >
    <div class="confirm modal">
      <div class="top">
        <h3>{{title}}</h3>
      </div>
      <div class="middle">
        {{message}}
      </div>
      <div class="bottom">
        <v-btn text class="cancle">취소</v-btn>
        <v-btn text class="ok">확인</v-btn>
      </div>
    </div>
  </v-dialog> 
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop({required: true, default: '제목'}) title!: string;
  @Prop({required: true, default: '내용'}) message!: string;


  visible:boolean = false

  show(value:boolean):void{
    this.visible = value
  }
}
</script>

<style lang="scss" src="./confirm.scss" scoped />