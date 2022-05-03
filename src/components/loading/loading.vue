<template>
  <div class="loading" v-show="visible">
    <div class="progress">
      <v-progress-circular
        indeterminate
        size="36"
        width="3"
        color="#0007EE"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({

})
export default class extends Vue{
  visible:boolean = true;

  mounted(){
    setTimeout(() => {
      this.visible = false
    }, 2000);
  }
}
</script>

<style lang="scss" scoped src="./loading.scss"> 

</style>