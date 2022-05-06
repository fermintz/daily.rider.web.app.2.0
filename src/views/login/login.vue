<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/logo_w.png">
      <span>데일리세탁</span>
      <strong>라이더</strong>
    </div>
    <form>
      <div class="input-item">
        <label for="userId">
          <v-icon>mdi-account-outline</v-icon>
        </label>
        <input type="text" name="" id="userId" placeholder="아이디">
      </div>
      <div class="input-item">
        <label for="password">
          <v-icon>mdi-lock-outline</v-icon>
        </label>
        <input type="password" name="" id="password" placeholder="비밀번호">
      </div>
      <v-btn text @click="$router.push('/')">로그인</v-btn>
    </form>
    <div class="company">
      <span>Payot Coperation</span>
    </div>

    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
  </div>
</template>

<style lang="scss" src="./login.scss" scoped>

</style>