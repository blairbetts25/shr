<template>
  <div id="app">
     <div>
      <b-navbar id="mainNav" toggleable="lg" type="light">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Home</router-link>|
            <router-link to="/playersignup">Player Sign Up </router-link>|
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
  </div>
</template>
</<script>
export default {
  
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

html{
    background-color: rgb(255,0,0);
}
#nav-collapse {
  font-size: 60px;
}
#nav-collapse {
  padding: 30px;
}

a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#mainNav {
  background-color: rgb(255, 0, 0);
}

.newcustomer,
.newvendor,
.customer,
.vendor {
  border-color: black;
  border-width: 4px;
  border-style: solid;
  padding: 10px;
}

.home {
  background-color: rgb(255, 0, 0);
  color: white;
  margin-bottom: 600px;
}

a:hover {
  color: white;
  text-decoration: none;
}
</style>