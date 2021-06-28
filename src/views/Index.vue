<template>
  <div class="index">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here is a list of all students!",
      students: [],
    };
  },
  created: function () {},
  methods: {},
};
</script>
