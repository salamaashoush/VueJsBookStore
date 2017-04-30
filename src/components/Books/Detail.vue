<template>
  <div>
    <div>
      <div class="ui horizontal divider">
        {{book.title}}
      </div>
      <div style="text-align: center">
        <img :src="`https://djangobooks.herokuapp.com/${book.cover}`" alt="" style="width: 20%">
      </div>
      <p><strong>Author: </strong>
        <router-link :to="`/authors/${book.author.id}`">{{book.author.name}}</router-link>
      </p>
      <p><strong>Category: </strong>
        <router-link :to="`/categories/${book.category.id}`">{{book.category.name}}</router-link>
      </p>
      <p><strong>Published Date </strong> <span class="date">{{book.publish_date}}</span></p>
      <div class="ui horizontal divider">
        Description
      </div>
      <p>{{book.description}}</p>
      <button class="ui basic blue button" @click="read">Add To Your Books</button>
      <div class="ui horizontal divider">
        Readers
      </div>
      <div class="ui cards">
        <user v-for="user in book.readers" :key="user.email" :user="user"></user>
      </div>
    </div>
    <error>
      <template slot="header">Error</template>
      <template slot="message">Something wrong happened Please try again !!</template>
    </error>
    <notify>
      <template slot="header-icon"><i class="check icon"></i></template>
      <template slot="header">Success</template>
      <template slot="message">Added to your books successfully</template>
    </notify>
  </div>

</template>
<script>
  import Api from '../../api/api';
  import Error from '../Site/ErrorModal';
  import Notify from '../Site/NotifyModal';
  import User from '../Profile/User';


  export default {
    data() {
      return {
        book: {},
      };
    },
    methods: {
      read() {
        Api.readBook(this.book.id)
          .then(() => {
            window.$('#notify_modal').modal('show');
          })
          .catch(() => {
            window.$('#error_modal').modal('show');
          });
      },
    },
    components: { Error, Notify, User },
    mounted() {
      Api.getBook(this.$route.params.id)
        .then((response) => {
          this.book = response.data;
        })
        .catch(() => {
          window.$('#error_modal').modal('show');
        });
    },
  };
</script>
<style>
</style>
