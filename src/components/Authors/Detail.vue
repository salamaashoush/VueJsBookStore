<template>
  <div>
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment" style="padding: 200px">
        <div class="ui text container">
          <div class="ui small circular rotate reveal image" style="margin-left: 40%">
            <img :src="`https://djangobooks.herokuapp.com/${author.image}`" alt="" class="visible content">
            <img :src="`https://djangobooks.herokuapp.com/${author.image}`" alt="" class="hidden content">
          </div>
          <h1 class="ui inverted header">
            {{author.name}}
          </h1>
          <p>{{author.bio}}</p>
          <button class="ui primary button" @click="follow">Follow</button>
        </div>
      </div>
    </div>

    <div class="ui container">
      <div class="ui two column grid">
        <div class="column">
          <div class="ui horizontal divider">
            Books
          </div>
          <div class="ui special cards">
            <book v-for="book in author.books " :key="book.id" :book="book"></book>
          </div>
        </div>
        <div class="column">
          <div class="ui horizontal divider">
            Subscribers
          </div>
          <div class="ui cards">
            <user v-for="user in author.followers" :key="user.id" :user="user"></user>
            <p v-if="author.followers.length==0">No Followers</p>
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
      <template slot="message">Followed Successfully</template>
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
        author: {},
      };
    },
    components: { Book, Error, User, Notify },
    methods: {
      follow() {
        Api.followAuthor(this.author.id)
          .then(() => {
            window.$('#notify_modal').modal('show');
          })
          .catch(() => {
            window.$('#error_modal').modal('show');
          });
      },
    },
    mounted() {
      Api.getAuthor(this.$route.params.id)
        .then((response) => {
          this.author = response.data;
        })
        .catch(() => {
          window.$('#error_modal').modal('show');
        });
    },
  };
</script>
<style>
</style>
