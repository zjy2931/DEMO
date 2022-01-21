<template>
  <div>
    <div>
      <div>Name</div>
      <input type="text" v-model="name" />
    </div>
    <div>
      <div>Sex</div>
      <input type="radio" name="sex" :checked="sex === Sex.male" @click="() => sex = Sex.male" />Male
      <input type="radio" name="sex" :checked="sex === Sex.female" @click="() => sex = Sex.female" />Female
    </div>
    <p>
      <button @click="handleSubmit">Submit</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Sex, fetchUserInfo, updateUserInfo } from "../services";
const name = ref("");
const sex = ref(Sex.male);

onMounted(() => {
  fetchUserInfo("id-xxx").then((res) => {
    name.value = res.name;
    sex.value = res.sex;
  });
});

const handleSubmit = () => {
  const params = { name: name.value, sex: sex.value };
  updateUserInfo(params).then((res) => {
    if (res) alert(JSON.stringify(params));
  });
};

</script>

