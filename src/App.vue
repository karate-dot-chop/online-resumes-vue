<template>
  <div id="app">
    <div id="wrapper">
      <!-- Header -->
      <header id="header">
        <div class="inner">
          <!-- Logo -->
          <router-link to="/students" class="logo">
            <span class="symbol"
              ><img src="images/karate-chop.jpeg" alt="" /></span
            ><span class="title">Students</span>
          </router-link>
        </div>
      </header>

      <router-view />
    </div>
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
