<template>
  <v-dialog
    v-model="visible"
  >
    <div class="imageViewer" @click="visible = false">
      <img src="https://picsum.photos/1080/1920" />
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';


@Component
export default class imageViewer extends Vue {
  visible = false;

  show(value : boolean) : void{
    this.visible = value;
  }
}
</script>

<style lang="scss" src="./imageViewer.scss" scoped/>