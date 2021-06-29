<template>
  <div id="app">
    <div id="wrapper"></div>
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <span class="symbol"><img src="images/karate-chop.jpeg" alt="" /></span>
          <span class="title">Students</span>
        </router-link>
      </div>
    </header>

    <router-view />

    <!-- Footer -->
    <footer id="footer">
      <section>
        <h2>Connect</h2>
        <ul class="icons">
          <li>
            <a href="https://www.github.com/NAME" target="_blank" class="icon brands style2 fa-github">
              <span class="label">Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/NAME" target="_blank" class="icon brands style2 fa-linkedin">
              <span class="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/in/NAME" target="_blank" class="icon brands style2 fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.NAME.com" target="_blank" class="icon solid style2 fa-laptop">
              <span class="label">Website</span>
            </a>
          </li>
          <li>
            <a href="mailto:NAME@gmail.com" class="icon solid style2 fa-envelope"><span class="label">Email</span></a>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
