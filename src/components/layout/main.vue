<template>
  <div class="main">
    <router-view />
    <BottomNav />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BottomNav from '@/components/bottomNav/bottomNav.vue'

@Component({
  components:{
    BottomNav,
  },
})
export default class extends Vue{
  
}
</script>

<style lang="scss" src="./main.scss" scoped/>