<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const router = useRouter()

// --- 状态定义 ---

const isRegister = ref(false)
const loading = ref(false)    // 按钮加载状态
const form = ref({
    username: '',
    password: ''
})

// --- 核心逻辑 ---

// 1. 切换 登录/注册
const toggleMode = () => {
    isRegister.value = !isRegister.value
    form.value = { username: '', password: '' } // 清空表单
}

// 2. 提交表单
const handleSubmit = async () => {
    // 简单校验
    if (!form.value.username || !form.value.password) {
        return ElMessage.warning('用户名和密码不能为空')
    }

    loading.value = true

    try {
        const url = isRegister.value ? '/api/register' : '/api/login'

        // 发送请求
        const res = await axios.post(url, form.value)

        if (isRegister.value) {
            // --- 注册成功 ---
            ElMessage.success('注册成功！请直接登录')
            toggleMode() // 自动切回登录模式
        } else {
            // --- 登录成功 ---
            const { token, user } = res.data

            // A. 存 Token (关键！)
            localStorage.setItem('token', token)
            localStorage.setItem('userInfo', JSON.stringify(user))

            ElMessage.success('登录成功，欢迎回来！')

            // B. 跳转首页
            router.push('/')
        }

    } catch (error) {
        // 错误处理
        const msg = error.response?.data?.message || '请求失败，请检查网络或后端'
        ElMessage.error(msg)
    } finally {
        loading.value = false
    }
}

// 标题文字
const titleText = computed(() => isRegister.value ? '创建新账号' : '个人知识库')
const btnText = computed(() => isRegister.value ? '立即注册' : '登录')
const linkText = computed(() => isRegister.value ? '已有账号？去登录' : '没有账号？去注册')
</script>

<template>
  <div class="login_Page">
    <div class="login_Container">
      <div class="login_Header">
        <h1 class="logo">
          😋
        </h1>
        <h2 class="title">
          {{ titleText }}
        </h2>
        <p class="subtitle">
          记录你的每一个灵感
        </p>
      </div>

      <el-form
        class="login_Form"
        label-position="top"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            size="large"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            size="large"
            @keyup.enter="handleSubmit"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_Button"
            size="large"
            :loading="loading"
            @click="handleSubmit"
          >
            {{ btnText }}
          </el-button>
        </el-form-item>
      </el-form>

      <div class="login_Footer">
        <a
          href="javascript:;"
          class="footer_Link"
          @click="toggleMode"
        >
          {{ linkText }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 样式保持原样，微调了一下背景色 */
.login_Page {
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
}

.subtitle {
    font-size: 15px;
    color: #787774;
    margin: 0;
}

.login_Button {
    width: 100%;
    margin-top: 8px;
    font-weight: 500;
    background: #2383e2;
    border: none;
}

.login_Button:hover {
    background: #1a6fc7;
}

.login_Footer {
    text-align: center;
    margin-top: 24px;
}

.footer_Link {
    font-size: 14px;
    color: #2383e2;
    text-decoration: none;
    cursor: pointer;
}

.footer_Link:hover {
    text-decoration: underline;
}
</style>