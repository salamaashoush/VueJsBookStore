<template>
  <div>
    <div class="ui large inverted top fixed menu">
      <div class="ui container">
        <router-link to="/" class="item">Home</router-link>
        <router-link to="/categories" class="item">Categories</router-link>
        <router-link to="/books" class="item">Books</router-link>
        <router-link to="/authors" class="item">Authors</router-link>
        <div class="right menu">
          <router-link to="/profile" class="item" v-show="isLogedIn">{{user.first_name+" "+user.last_name}}</router-link>
          <router-link to="/logout" class="item" v-show="isLogedIn">Logout</router-link>
          <router-link to="/login" class="item" v-show="!isLogedIn">Login</router-link>
          <router-link to="/register" class="item" v-show="!isLogedIn">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Api from '../../api/api';

  export default {
    data() {
      return {
        user: {},
        isLogedIn: false,
      };
    },
    mounted() {
      if (Api.logedInUser()) {
        this.user = Api.logedInUser();
        this.isLogedIn = true;
      }
    },
  };
</script>
<style>
</style>
