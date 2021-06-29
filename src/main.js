import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
