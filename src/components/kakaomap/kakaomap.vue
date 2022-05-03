<template>
  <div id="map" :style="{width:'100%',height:height}"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

declare var kakao: any;

@Component({})
export default class extends Vue {
  @Prop() height? : string;

  map: any = {};
  nowPosision: number[] = [0, 0];

  mounted(): void {
    kakao.maps.load(this.initMap.bind(this));
    this.onPositionChange();
  }

  // 1회성 좌표조회
  getNowPosision(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 1000,
        maximumAge: 1000 * 60 * 60,
      });
    });
  }

  onPositionChange() {
    navigator.geolocation.watchPosition(
      (result) => {
        const { coords } = result;
        this.nowPosision = [coords.latitude, coords.longitude];
        console.log(this.nowPosision);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // @Watch("nowPosition", { immediate: false })
  moveCameraNowPosition() {
    const [x, y] = this.nowPosision;
    this.map?.setCenter(new kakao.maps.LatLng(x, y));
  }

  async initMap(): Promise<void> {
    const { coords } = await this.getNowPosision();
    const [x, y] = [coords.latitude, coords.longitude];
    this.nowPosision = [x, y];
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(x, y), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }
}
</script>

<style lang="scss" scoped>
#map {
  position: relative;
  z-index: 1;
}
</style>
