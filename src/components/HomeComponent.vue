<template>
  <div>
    <!-- <h1>
      Hello {{ $filters.capitalize(data) }} this is first vue js components
    </h1> -->
    <button v-on:click="click_btn(data)">Click here</button>
    <h2 v-if="show">Data function enabled</h2>
    <h2 v-else>Data function disabled</h2>
    <button v-on:click="change()">change here</button><br /><br />
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
    <table>
      <tr>
        <td>id</td>
        <td>name</td>
      </tr>

      <tr v-for="user in name_arr" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
      </tr>
    </table>
    <h2 v-for="user in userlist" :key="user.name">{{ user.name }}</h2>
    <button v-on:click="changeTitle">update title</button>

    <table border="1px">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>salary</th>
      </tr>

      <tr v-for="emp in result" :key='emp.id'>
        <td>{{emp.id}}</td>
        <td>{{emp.employee_name}}</td>
        <td>{{emp.employee_salary}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
// import Vue from "vue";
// import VueAxios from "vue-axios";
// import axios from "axios";

// Vue.use(VueAxios,axios)
export default {
  name: "HomeComponent",
  props: {
    data: String,
    userlist: Array,
  },
  data() {
    return {
      show: false,
      result:[],
      name_arr: [
        {
          id: 1,
          name: "aditya",
        },

        {
          id: 2,
          name: "aditya2",
        },

        {
          id: 1,
          name: "aditya3",
        },
      ],
      message: "hi",
    };
  },
  methods: {
    click_btn(data) {
      console.log("Working", data);
    },
    change() {
      this.show = !this.show;
    },
    changeTitle() {
      this.$emit("updateTitle", "Title changed");
    },
  },
  // mounted() {
  //   axios.get("https://dummy.restapiexample.com/api/v1/employees")
  //     .then((resp) => {
  //       console.log(resp.data.data);
  //       this.result = resp.data.data
  //     });
  // },
};
</script>
