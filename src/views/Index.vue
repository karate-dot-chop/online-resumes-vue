<template>
  <div class="students-index">
    <div class="inner">
      <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <input type="text" placeholder="Search Name" v-model="nameFilter" />
          </div>
          <div class="col-6 col-12-xsmall">
            <input
              type="email"
              placeholder="Search Skills"
              v-model="skillFilter"
            />
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <input type="reset" value="Reset" @click="resetFilter()" />
              </li>
            </ul>
          </div>
        </div>
      </form>
      <section class="tiles">
        <article
          class="style7"
          v-for="student in filterBy(
            students,
            nameFilter,
            'first_name',
            'last_name'
          )"
          v-bind:key="student.id"
        >
          <span class="image">
            <!-- <router-link :to="/students/${student.id}"> -->
            <img :src="student.photo_url" alt="" />
            <!-- </router-link> -->
          </span>
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
        </article>
      </section>
    </div>
    <br />
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      students: [],
      nameFilter: "",
      skillFilter: "",
    };
  },
  created: function () {
    axios.get("/students").then((response) => {
      console.log("All students:", response.data);
      this.students = response.data;
    });
  },
  methods: {
    resetFilter: function () {
      this.nameFilter = "";
      this.skillFilter = "";
    },
  },
};
</script>
