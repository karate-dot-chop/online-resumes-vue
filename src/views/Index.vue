<template>
  <div class="index">
    <div class="inner">
      <h1>{{ message }}</h1>
      <section class="tiles">
        <article
          class="style7"
          v-for="student in students"
          v-bind:key="student.id"
        >
          <span class="image">
            <img :src="student.photo_url" alt="" />
          </span>
          <!-- <router-link> -->
          <!-- ADD LINK TO SHOW PAGE IN ROUTER-LINK - USE STUDENT.ID -->
          <a>
            <h2>
              {{ student.first_name }} <br />
              {{ student.last_name }}
            </h2>
            <div class="content">
              <p>
                {{ student.email }} <br />
                <i>{{ student.bio }}</i>
              </p>
            </div>
          </a>
          <!-- </router-link> -->
        </article>
      </section>
    </div>
    <br />
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
