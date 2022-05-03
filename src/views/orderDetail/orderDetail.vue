<template>
  <div class="orderDetail">
    <div class="detail-top">
      <div class="header">
        <div class="inBox">
          <v-btn icon @click="$router.back(-1)">
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>

          <h2>상세정보</h2>
        </div>
      </div>

      <KakaoMap height="350px" />

      <v-btn icon class="myLocation">
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>
    </div>

    <div class="order-info">
      <div class="order-number">A0A73E-<strong>0003</strong></div>
      <div class="order-state">주문접수</div>

      <div class="divider" />

      <dl>
        <dt>주문일시</dt>
        <dd>22.04.12(화) 15:24:34</dd>
      </dl>
      <dl class="pickup">
        <dt>수거예약일</dt>
        <dd>22.04.13(수) PM 09</dd>
      </dl>
    </div>

    <div class="section admin-btns">
      <v-btn text class="lock" @click.stop="lockBtnHandle">
        <v-icon>mdi-lock-outline</v-icon>
        <span>임시보관</span>
      </v-btn>
      <v-btn text @click="$refs.gateInfoList.show(true)">출입정보</v-btn>
      <v-btn text @click="$refs.userPostMessage.show(true)">수거지연안내</v-btn>
      <v-btn text @click="$refs.confrim.show(true)">패널티취소</v-btn>
    </div>

    <div class="section memo">
      <div class="head">
        <h4>주문메모</h4>
        <v-btn text @click="$refs.memosave.show(true)">저장</v-btn>
      </div>
      <div class="cont">
        <textarea placeholder="메모를 입력해주세요" />
      </div>
    </div>

    <div class="section userinfo">
      <div class="head">
        <h4>주문자정보</h4>
        '
        <v-btn text @click="$refs.copysnack.show(true)">주소복사</v-btn>
      </div>
      <div class="cont">
        <dl>
          <dt>주문자</dt>
          <dd>강보미</dd>
        </dl>
        <dl class="phone">
          <dt>전화번호</dt>
          <dd>010-5578-3137</dd>
        </dl>
        <dl>
          <dt>주소지</dt>
          <dd>부산 연제구 중앙대로 1076번길 43</dd>
        </dl>
        <dl>
          <dt>상세주소</dt>
          <dd>305호</dd>
        </dl>
        <dl>
          <dt>출입문정보</dt>
          <dd>종 2580</dd>
        </dl>
      </div>
    </div>

    <div class="section request">
      <div class="head">
        <h4>요청사항</h4>
      </div>
      <div class="cont">
        <dl class="delivery">
          <dd>안전하게 배송 부탁드립니다</dd>
        </dl>
      </div>
    </div>

    <div class="section delivery-photo dropdown">
      <div class="head">
        <h4>배송정보</h4>
        <v-icon>mdi-chevron-down</v-icon>
      </div>

      <div class="cont">
        <div class="no-item">
          <span>등록된 수거/배송 정보가 없습니다.</span>
        </div>

        <div class="images">
          <div
            class="image-box"
            v-ripple
            @click.stop="$refs.imageViewer.show(true)"
          >
            <span>수거</span>
            <strong>21.12.28 12:34</strong>
            <img src="https://picsum.photos/640/480" />
          </div>
          <div
            class="image-box"
            v-ripple
            @click.stop="$refs.imageViewer.show(true)"
          >
            <span>배송</span>
            <strong>21.12.28 12:34</strong>
            <img src="https://picsum.photos/480/640" />
          </div>
        </div>
      </div>
    </div>

    <div class="section product dropdown hidden">
      <div class="head">
        <h4>주문상품</h4>
        <v-icon> mdi-chevron-down </v-icon>
      </div>

      <div class="cont">
        <div class="item">
          <div class="item-info">
            <label>겨울 점퍼/자켓</label>
            <span>7,900</span>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
        <div class="item total">
          <div class="item-info">
            <label>합계</label>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
      </div>
    </div>
    <div class="section product checkout dropdown">
      <div class="head">
        <h4>검수 후 상품</h4>
        <v-icon> mdi-chevron-down </v-icon>
      </div>

      <div class="cont">
        <div class="item">
          <div class="item-info">
            <label>겨울 점퍼/자켓</label>
            <span>7,900</span>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
        <div class="item total">
          <div class="item-info">
            <label>합계</label>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
      </div>

      <div class="nextBtns">
        <v-btn text @click="$refs.endPickup.show(true)"> 수거완료 </v-btn>
      </div>
    </div>

    <ImageViewer ref="imageViewer" />
    <Confirm
      ref="confrim"
      title="검수상태 되돌리기"
      message="검수단계 이후 진행된 사항의 모든 데이터가 손실됩니다 진행하시겠습니까?"
    />
    <Snackbar ref="copysnack" text="주소를 복사하였습니다." />
    <Snackbar ref="memosave" text="메모를 저장하였습니다." />
    <PictureInModal ref="endPickup" />
    <GateInfoList ref="gateInfoList" />
    <Loading />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import ImageViewer from "@/components/imageViewer/imageViewer.vue";
import Confirm from "@/components/confirm/confirm.vue";
import KakaoMap from "@/components/kakaomap/kakaomap.vue";
import Snackbar from "@/components/snackbar/snackbar.vue";
import PictureInModal from "@/components/pictureInModal/pictureInModal.vue";
import GateInfoList from "@/components/gateInfoList/gateInfoList.vue";
import Loading from "@/components/loading/loading.vue";

@Component({
  components: {
    ImageViewer,
    Confirm,
    KakaoMap,
    Snackbar,
    PictureInModal,
    GateInfoList,
    Loading,
  },
})
export default class orderDetail extends Vue {
  @Ref("copysnack") copysnack!: HTMLElement;

  mounted() {
    this.dropdownHandle();
  }

  dropdownHandle(): void {
    const target = Array.from(document.querySelectorAll(".dropdown"));

    target.map((item, index) => {
      item.addEventListener("click", () => {
        target[index].classList.toggle("hidden");
      });
    });
  }

  lockBtnHandle() {
    const target = document.querySelector(".lock");
    target?.classList.toggle("active");
  }
}
</script>

<style lang="scss" src="./orderDetail.scss" scoped />
