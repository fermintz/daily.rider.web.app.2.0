<template>
  <div class="searchResult">
    <div class="header">
      <div class="searchBox">
        <div class="logo">
          <v-btn icon @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </div>
        <input type="text" placeholder="주문번호 검색" id="searchInput" @keyup.enter="$router.push('searchResult')">
        <v-btn icon class="close">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="searchText">
      <strong>[2351]</strong>에 대한 검색결과
    </div>
    
    <div class="list">
      <OrderCard v-for="item in 10" :key="item" />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/views/searchResult/searchResult.vue';
import OrderCard from '@/components/orderCard/orderCard.vue';

@Component({
  components:{
    Header,OrderCard
  },
})
export default class extends Vue{
  
}
</script>

<style lang="scss" scoped src="./searchResult.scss" />