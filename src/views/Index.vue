<template>
  <div class="students-index">
    <div class="inner">
      <form method="post" action="#">
        <datalist id="first_names">
          <option v-for="student in students" v-bind:key="student.id">
            {{ student.first_name }}
          </option>
        </datalist>
        <datalist id="last_names">
          <option v-for="student in students" v-bind:key="student.id">
            {{ student.last_name }}
          </option>
        </datalist>
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <input
              type="text"
              placeholder="First name"
              v-model="firstNameFilter"
              list="first_names"
            />
          </div>
          <div class="col-6 col-12-xsmall">
            <input
              type="email"
              placeholder="Last name"
              v-model="lastNameFilter"
              list="last_names"
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
            filterBy(students, lastNameFilter, 'last_name'),
            firstNameFilter,
            'first_name'
          )"
          v-bind:key="student.id"
        >
          <span class="image">
            <img :src="student.photo_url" alt="" />
          </span>
          <!-- ADD LINK TO SHOW PAGE IN ROUTER-LINK - USE STUDENT.ID -->
          <a>
            <router-link :to="`/students/${student.id}`">
              <h2>
                {{ student.first_name }} <br />
                {{ student.last_name }}
              </h2>
            </router-link>
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
      firstNameFilter: "",
      lastNameFilter: "",
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
      this.firstNameFilter = "";
      this.lastNameFilter = "";
    },
  },
};
</script>
