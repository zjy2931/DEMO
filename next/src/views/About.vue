<template>
  <div class="about">
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <div class="form">
      <VueForm v-model="formData" :ui-schema="uiSchema" :schema="schema" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import mitt from "mitt";
const emitter = mitt(); // inferred as Emitter<Events>

emitter.on("foo", (e) => {}); // 'e' has inferred type 'string'

emitter.emit("foo", 42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. (2345)

import VueForm from "@lljj/vue3-form-element";
const formData = reactive({});
const schema = reactive({
  type: "object",
  required: ["userName", "age"],
  properties: {
    userName: {
      type: "string",
      title: "用户名",
      default: "Liu.Jun",
      "err:required": "请输入用户名",
    },
    age: {
      type: "number",
      title: "年龄",
      maximum: 80,
      minimum: 16,
    },
    bio: {
      type: "string",
      title: "签名",
      minLength: 10,
      default: "知道的越多、就知道的越少",
    },
  },
});
const uiSchema = reactive({
  bio: {
    "ui:options": {
      placeholder: "请输入你的签名",
      type: "textarea",
      rows: 1,
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  margin: 0 auto;
}
</style>
