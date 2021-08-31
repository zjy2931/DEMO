<template>
  <div class="about">
    关于我们
  </div>
</template>

<script>
const SCHEMA = {
  type: 'object',
  title: 'vue-json-editor demo',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
  },
};
export default {
  data: () => ({
    // init json schma file ( require('@/schema/newsletter') )
    schema: SCHEMA,
    // data
    model: {
      name: 'Yourtion',
    },
  }),

  methods: {
    submit() {
      alert(JSON.stringify(this.model));
    },
    reset() {
      this.$refs.JsonEditor.reset();
    },
  },
};
</script>
