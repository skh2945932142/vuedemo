<script setup>
import { Plus, Document } from '@element-plus/icons-vue'

defineProps({
  notes: {
    type: Array,
    required: true,
    default: () => []
  },
  currentNote: {
    type: Object,
    required: false,
    default: () => null
  }
})

const emit = defineEmits(['set-current-note', 'add-note'])

const handleNoteClick = (note) => {
  emit('set-current-note', note)
}

const handleAdd = () => {
  emit('add-note')
}
</script>

<template>
  <div class="note-list-container">
    <div class="list-section">
      <div class="section-title">
        私人页面
      </div>

      <div
        v-for="note in notes"
        :key="note._id"
        class="note-item"
        :class="{ active: currentNote && currentNote._id === note._id }"
        @click="handleNoteClick(note)"
      >
        <el-icon class="item-icon">
          <Document />
        </el-icon>
        <span class="item-title">{{ note.title || '无标题' }}</span>
      </div>

      <div
        class="add-btn"
        @click="handleAdd"
      >
        <el-icon>
          <Plus />
        </el-icon> 新建页面
      </div>
    </div>
  </div>
</template>

<style scoped>
.note-list-container {
  height: 100%;
  padding: 12px 8px;
  color: rgba(25, 23, 17, 0.6);
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
  padding-left: 12px;
  color: rgba(55, 53, 47, 0.5);
}

.note-item {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  color: rgb(25, 23, 17);
  margin-bottom: 1px;
  transition: background 0.1s;
}

.note-item:hover {
  background: rgba(55, 53, 47, 0.08);
  /* 极淡的灰色悬停 */
}

.note-item.active {
  background: rgba(55, 53, 47, 0.08);
  /* 选中态也用极淡灰 */
  font-weight: 600;
}

.item-icon {
  margin-right: 8px;
  font-size: 16px;
  color: #999;
}

.item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-btn {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  margin-top: 4px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  color: rgba(55, 53, 47, 0.5);
}

.add-btn:hover {
  background: rgba(55, 53, 47, 0.08);
}

.add-btn .el-icon {
  margin-right: 8px;
}
</style>