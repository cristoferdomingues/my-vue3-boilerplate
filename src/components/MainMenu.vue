<template>
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <img
        class="h-8 w-8"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
    </div>
    <div class="hidden md:block">
      <div class="ml-10 flex items-baseline space-x-4">
        <Navigation :navigation="menuItems" />
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./Navigation";
export default {
  components: { Navigation },
  props: {
    menuItems: Array,
  },
};
</script>