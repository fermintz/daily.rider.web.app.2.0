<template>
  <div class="menu_wrap">

    <Header />

    <div class="inner">
      <div class="user-info">
        <dl>
          <dt>아이디</dt>
          <dd>부산_B</dd>
        </dl>
        <dl>
          <dt>이름</dt>
          <dd>금승록</dd>
        </dl>
      </div>
      <div class="menu">
        <h4>전체메뉴</h4>
        <div class="btns">
          <div class="btn" v-ripple>
            <v-icon>mdi-home</v-icon>
            <span>준비중입니다</span>
          </div>
          <div class="btn" v-ripple @click="$router.push('login')">
            <v-icon>mdi-logout</v-icon>
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, } from 'vue-property-decorator'
import Header from '@/components/header/header.vue';
@Component({
  components:{
    Header
  },
})
export default class extends Vue{
  
}
</script>

<style lang="scss" scoped src="./menu.scss" /> 
