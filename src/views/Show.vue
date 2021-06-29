<template>
  <div class="student-show">
    <!-- Student biography section -->
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <img :src="student.photo_url" alt="" />
    Email:
    <p>{{ student.email }}</p>
    Phone Number:
    <p>{{ student.phone_number }}</p>
    Biography:
    <p>{{ student.bio }}</p>
    <!-- links -->
    Linked In:
    <p>{{ student.linkedin_url }}</p>
    Twitter:
    <p>{{ student.twitter_handle }}</p>
    Website:
    <p>{{ student.personal_url }}</p>
    <!-- probably don't need resume URL in this format -->
    Resume:
    <p>{{ resume_url }}</p>
    Github:
    <p>{{ github_url }}</p>
    <!-- education may want to change formatting by removing headers depending on layout -->
    <div v-for="(education, index) in student.educations" v-bind:key="education.id">
      School:
      <p>{{ student.educations[index].university_name }}</p>
      Dates Attended:
      <p>{{ student.educations[index].start_date }} - {{ student.educations[index].end_date }}</p>
      Degree Earned:
      <p>{{ student.educations[index].degree }}</p>
      Details:
      <p>{{ student.educations[index].details }}</p>
    </div>
    <!-- experience may want to change formatting by removing headers depending on layout front end serializer not done may need to change-->
    <div v-for="(experince, index) in student.experinces" v-bind:key="experince.id">
      Company:
      {{ student.experinces[index].company_name }}
      Dates Worked:
      {{ student.experinces[index]. }}
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      student: { education: {}, experince: {} },
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log("Student Object", response.data);
      this.student = response.data;
    });
  },
  methods: {},
};
</script>
