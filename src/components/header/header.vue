<template>
  <div class="header">
    <div class="searchBox">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="데일리세탁">
        <span>Rider</span>
      </div>
      <input type="text" placeholder="주문번호 검색" id="searchInput">
      <v-btn icon class="close">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({

})
export default class OrderList extends Vue{
  mounted(){
    this.searchActive()
  }

  searchActive():void{
    const searchInput = document.getElementById('searchInput');
    const searchBox = document.querySelector('.searchBox');
    searchInput?.addEventListener('focus', ()=>{
      searchBox?.classList.add('active')
    })
    searchInput?.addEventListener('blur', ()=>{
      searchBox?.classList.remove('active')
    })
  }
}
</script>

<style lang="scss" src="./header.scss" scoped />