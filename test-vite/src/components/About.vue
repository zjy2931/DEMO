<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <div class="tips">
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent ,computed} from "vue";
import { useStore } from "vuex";
 import { key } from '../store'

export default defineComponent({
  name: "About",
  data() {
    return {
      msg: "Hello Vue 3.0 + Vite!",
    };
  },
  setup() {
    const store =  useStore(key)
    const count = computed(() => store.state.count)
    return {
      count
    }
  },
});
</script>
