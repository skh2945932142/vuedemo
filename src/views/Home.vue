<script setup>

import NoteList from '../components/NoteList.vue';
import Editor from '../components/Editor.vue';
import { ref } from 'vue';

const notes = ref([
    { id: 1, title: '笔记 1', content: '这是笔记 1 的内容' },
    { id: 2, title: '笔记 2', content: '这是笔记 2 的内容' },
    { id: 3, title: '笔记 3', content: '这是笔记 3 的内容' },
]);
// 当前选中的笔记
const currentNote = ref(notes.value[0]);
// 设置当前选中的笔记
const setCurrentNote = (note) => {
    currentNote.value = note;
};
const addNote = (note) => {
    const newNote = {
        id: notes.value.length + 1,
        title: note.title,
        content: note.content,
    };
    notes.value.push(newNote);
    setCurrentNote(newNote);
};
</script>

<template>
  <el-container class="layout-container">
    <el-aside
      width="260px"
      class="aside-box"
    >
      <NoteList
        :notes="notes"
        :current-note="currentNote"
        @set-current-note="setCurrentNote"
        @add-note="addNote"
      />
    </el-aside>

    <el-main class="main-box">
      <Editor
        v-if="currentNote"
        :model-value="currentNote.content"
        @update:model-value="currentNote.content = $event"
      />
      <el-empty
        v-else
        description="请选择或创建一个笔记"
      />
    </el-main>
  </el-container>
</template>

<style scoped>
/*容器*/
.layout-container {
    height: 100vh;
}

/*左边背景*/
.aside-box {
    background-color: #f7f9fc;
    border-right: 1px solid #dcdfe6;
}

/*右边背景*/
.main-box {
    background-color: white;
    padding: 0;
    overflow: hidden;
}
</style>