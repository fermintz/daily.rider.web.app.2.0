<template>
  <div class="bottomNav">
    <div 
      class="btn" 
      v-ripple 
      @click="$router.push({name: item.route})"
      v-for="item in bottomNavigation"
      :key="item"
      :class="{active:$route.name === item.route}"
    >
      <v-icon>{{item.icon}}</v-icon>
      <label>{{item.name}}</label>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, } from 'vue-property-decorator'

@Component({

})
export default class extends Vue{
  bottomNavigation = [
    {
      icon:'mdi-archive-outline',
      name:'임시보관함',
      route:'storage'
    },
    {
      icon:'mdi-van-utility',
      name:'주문내역',
      route:'orderList'
    },
    {
      icon:'mdi-map-marker',
      name:'주문지도',
      route:'maps'
    },
    {
      icon:'mdi-menu',
      name:'전체메뉴',
      route:'menu'
    },
  ]
  mounted(){
    console.log(this.$route)
  }
}
</script>


<style lang="scss" scoped src="./bottomNav.scss" />
