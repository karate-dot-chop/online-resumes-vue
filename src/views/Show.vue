<template>
  <div class="student-show">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <img :src="student.image_url" alt="" />
    <img :src="student.photo_url" alt="" />
    <br />
    Email:
    <a :href="`mailto:${student.email}`">{{ student.email }}</a>
    <br />
    <br />
    Phone Number:
    <p>{{ student.phone_number }}</p>
    Biography:
    <p>{{ student.bio }}</p>
    <!-- links -->
    Linked In:
    <a :href="`${student.linkedin_url}`">{{ student.linkedin_url }}</a>
    <br />
    Twitter:
    <a :href="`http://twitter.com/${student.twitter_handle}`">{{
      student.twitter_handle
    }}</a>
    <br />
    Website:
    <a :href="`${student.personal_url}`">{{ student.personal_url }}</a>
    <br />
    Github:
    <a :href="`${student.github_url}`">{{ student.github_url }}</a>
    <!-- education may want to change formatting by removing headers depending on layout -->
    <div
      v-for="(education, index) in student.educations"
      v-bind:key="education.id"
    >
      School:
      <p>{{ student.educations[index].university_name }}</p>
      Dates Attended:
      <p>
        {{ student.educations[index].start_date }} -
        {{ student.educations[index].end_date }}
      </p>
      Degree Earned:
      <p>{{ student.educations[index].degree }}</p>
      Details:
      <p>{{ student.educations[index].details }}</p>
    </div>
    <!-- experience may want to change formatting by removing headers depending on layout front end serializer not done may need to change-->
    <div
      v-for="(experience, index) in student.experiences"
      v-bind:key="experience.id"
    >
      Company:
      <p>{{ student.experiences[index].company_name }}</p>
      Title:
      <p>{{ student.experiences[index].job_title }}</p>
      Dates Worked:
      <p>
        {{ student.experiences[index].start_date }} -
        {{ student.experiences[index].end_date }}
      </p>
      Details:
      <p>{{ student.experiences[index].details }}</p>
    </div>
    <!-- skills may want to change formatting by removing headers depending on layout-->
    Skills:
    <div v-for="(skill, index) in student.skills" v-bind:key="skill.id">
      <p>{{ student.skills[index].name }}</p>
    </div>
    <!-- capstones may want to change formatting on headers depending on layout -->
    Projects:
    <div
      v-for="(capstone, index) in student.capstones"
      v-bind:key="capstone.id"
    >
      Name:
      <p>{{ student.capstones[index].name }}</p>
      Description:
      <p>{{ student.capstones[index].description }}</p>
      Website:
      <a :href="`${student.capstones[index].url}`">{{
        student.capstones[index].url
      }}</a>
      <br />
      Screenshot:
      <br />
      <img :src="`${student.capstones[index].screenshot}`" alt="" />
    </div>
    <!-- Twitterer -->

    <template>
      <div>
        <TwitterFeed
          :src="`https://twitter.com/${student.twitter_handle}`"
          data-width="300"
          data-height="400"
        ></TwitterFeed>
      </div>
    </template>

    <!-- Footer -->
    <footer id="footer">
      <section>
        <h2>Connect</h2>
        <ul class="icons">
          <li>
            <a
              href="https://www.github.com/karate-dot-chop"
              target="_blank"
              class="icon brands style2 fa-github"
            >
              <span class="label">Github</span>
            </a>
          </li>
          <li>
            <a
              :href="`${student.linkedin_url}`"
              target="_blank"
              class="icon brands style2 fa-linkedin"
            >
              <span class="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              :href="`${student.personal_url}`"
              target="_blank"
              class="icon solid style2 fa-laptop"
            >
              <span class="label">Website</span>
            </a>
          </li>
          <li>
            <a
              :href="`mailto:${student.email}`"
              target="_blank"
              class="icon solid style2 fa-envelope"
            >
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
      </section>
      <ul class="copyright">
        <li>&copy; karate(dot)chop</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
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
