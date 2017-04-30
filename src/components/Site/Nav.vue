<template>
  <div>
    <div class="ui large inverted top fixed menu">
      <div class="ui container">
        <router-link to="/" class="item">Home</router-link>
        <div class="ui dropdown icon item">
          Categories
          <div class="menu">
            <router-link class="item" v-for="category in categories" :key="category.id"
                         :to="`/categories/${category.id}`">
              {{category.name}}
            </router-link>
          </div>
        </div>
        <router-link to="/books" class="item">Books</router-link>
        <router-link to="/authors" class="item">Authors</router-link>
        <div class="right menu">
          <a href="#" class="item"  v-show="isLogedIn">{{user.first_name + " " + user.last_name}}</a>
          <a @click="logout" class="item" href="#" v-show="isLogedIn">Logout</a>
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
        categories: {},
        isLogedIn: false,
      };
    },
    methods: {
      logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.isLogedIn = false;
        this.router.push('/');
      },
    },
    mounted() {
      if (Api.logedInUser()) {
        this.user = Api.logedInUser();
        this.isLogedIn = true;
      }
      Api.getCategories()
        .then((response) => {
          this.categories = response.data;
        });
    },
  };
</script>
<style>
</style>
