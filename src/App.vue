<template>
  <div id="app">
    <div id="wrapper"></div>
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <!-- Logo -->
        <a href="index.html" class="logo">
          <span class="symbol"><img src="images/logo.svg" alt="" /></span
          ><span class="title">Phantom</span>
        </a>

        <!-- Nav -->
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Menu -->
    <nav id="menu">
      <div class="inner">
        <h2>Menu</h2>
        <ul>
          <!-- Add Router Link elements to link to .vue pages -->
          <li>Home</li>
          <li>Ipsum veroeros</li>
          <li>Tempus etiam</li>
          <li>Consequat dolor</li>
          <li>Elements</li>
        </ul>
      </div>
    </nav>

    <router-view />

    <!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <section>
          <h2>Get in touch</h2>
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send" class="primary" /></li>
            </ul>
          </form>
        </section>
        <section>
          <h2>Follow</h2>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands style2 fa-twitter"
                ><span class="label">Twitter</span></a
              >
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-facebook-f"
                ><span class="label">Facebook</span></a
              >
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-instagram"
                ><span class="label">Instagram</span></a
              >
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-dribbble"
                ><span class="label">Dribbble</span></a
              >
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-github"
                ><span class="label">GitHub</span></a
              >
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-500px"
                ><span class="label">500px</span></a
              >
            </li>
            <li>
              <a href="#" class="icon solid style2 fa-phone"
                ><span class="label">Phone</span></a
              >
            </li>
            <li>
              <a href="#" class="icon solid style2 fa-envelope"
                ><span class="label">Email</span></a
              >
            </li>
          </ul>
        </section>
        <ul class="copyright">
          <li>&copy; Untitled. All rights reserved</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style>
/* #app {
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
} */
</style>
