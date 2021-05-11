<template>
  <template v-for="(item, itemIdx) in navigation" :key="item">
    <template v-if="itemIdx === 0">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a
        href="#"
        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        >{{ item }}</a
      >
    </template>
    <a
      v-else
      href="#"
      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >{{ item }}</a
    >
  </template>
</template>

<script>
export default {
  name: "navigation",
  props: {
    navigation: Array,
  },
};
</script>