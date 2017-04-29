<template>
  <div>
    <div class="ui large inverted top fixed menu">
      <div class="ui container">
        <a class="active item">Home</a>
        <a class="item">Categories</a>
        <a class="item" href="/books">Books</a>
        <a class="item">Careers</a>
        <div class="right menu">
          <a class="item" v-show="isLogedIn">{{user.first_name+" "+user.last_name}}</a>
          <a class="item" v-show="isLogedIn">Edit Profile</a>
          <div class="item" v-show="isLogedIn">
            <a class="ui red button">Log out</a>
          </div>
          <div class="item" v-show="!isLogedIn">
            <a class="ui button">Log in</a>
          </div>
          <div class="item" v-show="!isLogedIn">
            <a class="ui primary button">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ui vertical inverted sidebar menu left">
      <a class="active item">Home</a>
      <a class="item">Work</a>
      <a class="item">Company</a>
      <a class="item">Careers</a>
      <a class="item">Login</a>
      <a class="item">Signup</a>
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
