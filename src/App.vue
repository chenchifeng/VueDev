<template>
  <div id="app">
    <ul class="sider">
      <template v-for="(route, index) of routes">
        <li :key="index" v-if="!route.hidden">
          <router-link :to="route.path">{{ route.meta.title }}</router-link>
        </li>
      </template>
    </ul>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>



<script>
import { routes } from "@/router";
export default {
  name: "App",
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
</style>
