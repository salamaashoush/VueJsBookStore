/**
* Created by salamaashoush on 28/04/17.
*/
<template>
  <div>
    <div class="ui header">All Books</div>
    <div class="ui special cards">
      <book v-for="book in books " :key="book.id" :book="book"></book>
    </div>
  </div>

</template>
<script>
  import Api from '../../api/api';
  import Book from './Book';

  export default {
    components: { Book },
    data() {
      return {
        books: [],
      };
    },
    methods: {},
    mounted() {
      Api.getBooks().then((response) => {
        this.books = response.data;
      });
      window.$(document).ready(() => {
        window.$('.special.cards .image').dimmer({
          on: 'hover',
        });
        window.$('.ui.rating').rating();
      });
    },
    updated() {
      window.$(document).ready(() => {
        window.$('.special.cards .image').dimmer({
          on: 'hover',
        });
        window.$('.ui.rating').rating();
      });
    },
  }
  ;
</script>
<style>

</style>
