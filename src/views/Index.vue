<template>
  <div class="index">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here is a list of all students!",
      students: [],
    };
  },
  created: function () {
    axios.get("/students").then((response) => {
      console.log("All students:", response.data);
      this.students = response.data;
    });
  },
  methods: {},
};
</script>
