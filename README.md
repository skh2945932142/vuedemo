# Vue 3 + Vite

Markdown
# 🦁 我的知识库 - 前端

这是一个基于 Vue 3 + Vite + Element Plus 构建的 Notion 风格 Markdown 笔记应用。

## 🛠️ 环境准备
- Node.js (建议 v18.0.0 或更高版本)
- npm 或 yarn

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone [你的前端仓库地址]
   cd vuedemo
安装依赖

Bash
npm install
配置代理
项目已在 vite.config.js 中配置开发服务器代理，默认指向 http://localhost:3000。

运行开发服务器

Bash
npm run dev
访问地址：http://localhost:5173

✨ 主要功能
Notion 极简风格布局

实时保存的 Markdown 编辑器

响应式侧边栏笔记列表

自动保存机制 (Debounce 1s)


---

### 2. 后端仓库 (`Knowledge-Base-server`)
**建议文件名：** `README.md`

```markdown
# 🦁 我的知识库 - 后端接口

这是知识库项目的后端服务，基于 Node.js、Express 和 MongoDB 构建。

## 🛠️ 环境准备
- Node.js
- **MongoDB** (必须确保本地 27017 端口有正在运行的数据库实例)

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone [你的后端仓库地址]
   cd server
安装依赖

Bash
npm install
启动数据库
请确保你的本地 MongoDB 服务已启动。如果未启动，后端连接将会失败。

启动服务

Bash
node app.js
默认运行端口：http://localhost:3000

🔐 接口说明
POST /api/login: 用户登录

GET /api/notes: 获取笔记列表 (需 Bearer Token)

POST /api/notes: 创建新笔记

PUT /api/notes/:id: 更新笔记内容
