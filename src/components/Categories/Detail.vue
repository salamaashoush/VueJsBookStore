<template>
  <div>
    <div class="ui container">
      <div class="ui horizontal divider">
        {{category.name}}
      </div>
      <div class="ui text">
        <p>{{category.description}}</p>
        <button href="" class="ui primary button" @click="subscribe">Subscribe</button>
      </div>

      <div class="ui two column grid">
        <div class="column">
          <div class="ui horizontal divider">
            Books
          </div>
          <div class="ui special cards">
            <book v-for="book in category.books " :key="book.id" :book="book"></book>
          </div>
        </div>
        <div class="column">
          <div class="ui horizontal divider">
            Subscribers
          </div>
          <div class="ui cards">
            <user v-for="user in category.subscribers" :key="user.id" :user="user"></user>
          </div>
        </div>

      </div>

    </div>
    <error>
      <template slot="header">Error</template>
      <template slot="message">Something wrong happened Please try again !!</template>
    </error>
    <notify>
      <template slot="header-icon"><i class="check icon"></i></template>
      <template slot="header">Success</template>
      <template slot="message">Subscribed Successfully</template>
    </notify>
  </div>

</template>
<script>
  import Api from '../../api/api';
  import Book from '../Books/Book';
  import User from '../Profile/User';
  import Error from '../Site/ErrorModal';
  import Notify from '../Site/NotifyModal';

  export default {
    data() {
      return {
        category: {},
      };
    },
    components: { Book, Error, User, Notify },
    methods: {
      subscribe() {
        Api.subscribeCategory(this.category.id)
          .then(() => {
            window.$('#notify_modal').modal('show');
          })
          .catch(() => {
            window.$('#error_modal').modal('show');
          });
      },
    },
    mounted() {
      Api.getCategory(this.$route.params.id)
        .then((response) => {
          this.category = response.data;
        })
        .catch(() => {
          window.$('#error_modal').modal('show');
        });
    },
  };
</script>
<style>
</style>
