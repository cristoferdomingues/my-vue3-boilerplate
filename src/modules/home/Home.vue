<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <router-link to="/home/page1"> Page 1</router-link>
      </li>
      <li>
        <router-link to="/home/page2"> Page 2 </router-link>
      </li>
      <li>
        <router-link to="/home/page3"> Page 3 </router-link>
      </li>
      <li>
        <router-link to="/home/page4"> Page 4 </router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  beforeMount() {
    setTimeout(() => {
      this.setTitle("Altered Home Title");
    }, 5000);
  },
  methods: {
    ...mapActions("home", ["setTitle"]),
  },
  computed: {
    ...mapGetters("home", ["title"]),
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
