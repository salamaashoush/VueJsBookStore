<template>
  <div>
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment" style="padding: 200px">
        <div class="ui text container">
          <h1 class="ui inverted header">
            Welcome to our Book Store
          </h1>
          <h2>Read whatever you want when you want to.</h2>
          <router-link v-if="!isLogedIn" class="ui huge primary button" to="/login">Get Started <i
            class="right arrow icon"></i>
          </router-link>
        </div>

        </div>
      </div>
    <div v-if="isLogedIn">
      <div class="ui horizontal divider">
        Latest Books
      </div>
      <div class="ui special cards">
        <book v-for="book in books " :key="book.id" :book="book"></book>
      </div>
    </div>
  </div>

</template>

<script>
  import Api from '../api/api';
  import Book from './Books/Book';

  export default {
    name: 'hello',
    components: { Book },
    data() {
      return {
        isLogedIn: false,
        books: [],
      };
    },
    mounted() {
      if (Api.logedInUser()) {
        Api.getBooks().then((response) => {
          this.books = response.data;
        });
        this.isLogedIn = true;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
