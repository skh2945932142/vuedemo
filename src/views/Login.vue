<script setup>
//登录界面
import { ref } from 'vue'
const userName = ref('')
const password = ref('')
const login = () => {
    console.log('已点击登录')
}
</script>
<template>
  <div class="login_Page">
    <div class="login_Container">
      <div class="login_Header">
        <h1 class="logo">
          😋
        </h1>
        <h2 class="title">
          个人知识库
        </h2>
        <p class="subtitle">
          继续使用您的账号
        </p>
      </div>

      <el-form
        class="login_Form"
        label-position="top"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="userName"
            placeholder="请输入用户名"
            size="large"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_Button"
            size="large"
            @click="login"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>


      <div class="login_Footer">
        <a
          href="#"
          class="footer_Link"
        >忘记密码？</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login_Page {
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
}

.login_Container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    padding: 48px 40px;
    width: 100%;
    max-width: 400px;
    transition: box-shadow 0.3s ease;
}

.login_Container:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.login_Header {
    text-align: center;
    margin-bottom: 40px;
}

.logo {
    font-size: 48px;
    margin: 0 0 16px 0;
}

.title {
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 8px 0;
    letter-spacing: -0.5px;
}

.subtitle {
    font-size: 15px;
    color: #787774;
    margin: 0;
    font-weight: 400;
}

.login_Form {
    margin-top: 32px;
}

.login_Form :deep(.el-form-item__label) {
    font-size: 14px;
    font-weight: 500;
    color: #37352f;
    margin-bottom: 8px;
}

.login_Form :deep(.el-input__wrapper) {
    border-radius: 8px;
    box-shadow: none;
    border: 1.5px solid #e3e3e0;
    transition: all 0.2s ease;
    padding: 8px 12px;
}

.login_Form :deep(.el-input__wrapper:hover) {
    border-color: #d1d1ce;
}

.login_Form :deep(.el-input__wrapper.is-focus) {
    border-color: #2383e2;
    box-shadow: 0 0 0 3px rgba(35, 131, 226, 0.08);
}

.login_Form :deep(.el-input__inner) {
    font-size: 15px;
    color: #37352f;
}

.login_Button {
    width: 100%;
    margin-top: 8px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    height: 44px;
    background: #2383e2;
    border: none;
    transition: all 0.2s ease;
}

.login_Button:hover {
    background: #1a6fc7;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(35, 131, 226, 0.3);
}

.login_Button:active {
    transform: translateY(0);
}

.login_Footer {
    text-align: center;
    margin-top: 24px;
}

.footer_Link {
    font-size: 14px;
    color: #2383e2;
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer_Link:hover {
    color: #1a6fc7;
    text-decoration: underline;
}
</style>