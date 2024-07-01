import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import EmployeeList from './components/EmployeeList'
import HomeComponent from './components/HomeComponent'

// const app = createApp(App);

// app.config.globalProperties.$filters = {
//   capitalize(value) {
//     if (!value) return '';
//     return value.toUpperCase();
//   } 
// };

// app.mount('#app');

// routers code

const router = createRouter({
  history:createWebHistory(),
  routes:[{ path: "/", component: HomeComponent },
    { path: "/emp", component: EmployeeList }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
