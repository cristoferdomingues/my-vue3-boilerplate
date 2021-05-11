<template>
  <DisclosurePanel>
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <Navigation :navigation="menuItems" />
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium leading-none text-white">
            Tom Cook
          </div>
          <div class="text-sm font-medium leading-none text-gray-400">
            tom@example.com
          </div>
        </div>
        <button
          class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-3 px-2 space-y-1">
        <a
          v-for="item in profileMenuItems"
          :key="item"
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >{{ item }}</a
        >
      </div>
    </div>
  </DisclosurePanel>
</template>
<script>
import Navigation from "./Navigation";
import { DisclosurePanel } from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Navigation,
    BellIcon,
    DisclosurePanel,
  },
  props: {
    menuItems: Array,
    profileMenuItems: Array,
  },
};
</script>