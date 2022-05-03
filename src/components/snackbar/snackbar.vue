<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ text }}
  </v-snackbar>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue{
  @Prop({required:true, default:''}) text!:string;

  snackbar:boolean = false;
  timeout:number = 1000;

  show(value:boolean):void{
    this.snackbar = value
  }
}
</script>

<style lang="scss" src="./snackbar.scss" scoped />