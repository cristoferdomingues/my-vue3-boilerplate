<template>
  <div>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <MainMenu :menu-items="navigation" />
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <ProfileMenu :menu-items="profile" />
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <MobileMainMenu class="md:hidden" :menu-items="navigation" :profile-menu-items="profile" />
    </Disclosure>

    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <router-view />
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
import { Home } from "./modules";
import { ProfileMenu, MainMenu, MobileMainMenu } from "./components";
import { ref } from "vue";
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];
const profile = ["Your Profile", "Settings", "Sign out"];

export default {
  name: "App",
  components: {
    Home,
    MainMenu,
    MobileMainMenu,
    Disclosure,
    DisclosureButton,
    ProfileMenu,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    const open = ref(false);
    return {
      navigation,
      profile,
      open,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
