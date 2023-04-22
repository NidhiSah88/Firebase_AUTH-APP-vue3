<template>
  <div>
    <main class="py-4">
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <!-- <router-view></router-view> -->
      <!-- <NavbarCompo/> -->
      
      <nav class="navbar navbar-expand-md navbar-light navbar-laravel" >
        <div class="container">
          <router-link to="/" class="navbar-brand">Vue Firebase Auth</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto"></ul>
             <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <RouterLink to="/register">Register</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/login">Login</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/">Dashboard</RouterLink>
                  </li>
             </ul>
          </div>
        </div>

      </nav>

      <RouterView />

    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// project Reference
// https://blog.logrocket.com/authentication-vue-3-firebase/

// https://github.com/Dotunj/vue-firebase-auth/tree/master/src

// import NavbarCompo from "./components/NavbarCompo";
export default {
  name: 'App',
  components: {
    // NavbarCompo,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
