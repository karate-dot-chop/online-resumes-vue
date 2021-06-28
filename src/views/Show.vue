<template>
  <div class="student-show">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <img :src="student.image_url" alt="" />
    Email:
    <p>{{ student.email }}</p>
    Phone Number:
    <p>{{ student.phone_number }}</p>
    Biography:
    <p>{{ student.bio }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
    axios.get(`${this.$route.params.id}`).then((response) => {
      console.log("Student Object", response.data);
      this.recipe = response.data;
    });
  },
  methods: {},
};
</script>
