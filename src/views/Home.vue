<template>
  <p>Hello, {{ name }}</p>
  <button @click="doThing()">Become Doug</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    doThing() {
      this.$store.dispatch('changeName', { name: 'doug' });
    }
  }
});
</script>
