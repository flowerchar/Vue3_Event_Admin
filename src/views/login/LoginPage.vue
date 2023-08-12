<script setup>
import { Lock, User } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isRegister = ref(true)
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :offset="3" :span="6" class="form">
      <el-form v-if="isRegister" ref="form" autocomplete="off" size="large">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            placeholder="请输入再次密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button auto-insert-space class="button" type="primary">
            注册</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isRegister = false">
            ← 返回</el-link
          >
        </el-form-item>
      </el-form>
      <el-form v-else ref="form" autocomplete="off" size="large">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            name="password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link :underline="false" type="primary">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button auto-insert-space class="button" type="primary"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isRegister = true">
            注册 →</el-link
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;

  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
