<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>{{ title }}</h1>
    <HomeComponent
      data="Aditya"
      v-bind:userlist="users"
      v-on:updateTitle="changeit($event)"
    />
    <!-- <EmployeeList/> -->
    <router-link to="/emp">Employee</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HomeComponent from "./components/HomeComponent.vue";
// import EmployeeList from "./components/EmployeeList.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    HomeComponent,
    // EmployeeList,
  },
  data() {
    return {
      users: [{ name: "aditya" }, { name: "aditya2" }, { name: "aditya3" }],
      title: "First title",
    };
  },
  methods: {
    changeit(data) {
      this.title = data;
    },
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
  margin-top: 60px;
}
</style>
