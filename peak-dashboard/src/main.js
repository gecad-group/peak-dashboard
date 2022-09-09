import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/windzo.css";
import ECharts from 'vue-echarts'
import "echarts"

const app = createApp(App);
app.use(router, Icon);
app.use(VueApexCharts);
app.component('v-chart', ECharts)
app.mount("#app");

router.beforeEach((to, from, next) => {
  document.querySelector(".flex-sidebar").classList.add("hidden");
  next();
});
