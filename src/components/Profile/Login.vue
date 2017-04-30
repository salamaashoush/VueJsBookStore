<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column" style="width: 50%; margin-top: 10%;">
      <h2 class="ui teal image header">
        <img src="../../assets/logo.png" class="image">
        <div class="content">
          Log-in to your account
        </div>
      </h2>
      <form class="ui large form" @submit.prevent="userLogin">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" v-model="user.username" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="user.password" placeholder="Password">
            </div>
          </div>
          <input type="submit" class="ui fluid large teal submit button" value="Login">
        </div>

        <div class="ui error message">

        </div>

      </form>

      <div class="ui message">
        New to us?
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <error>
      <template slot="header">Error</template>
      <template slot="message">Wrong username or password!</template>
    </error>
  </div>
</template>
<script>
  /* eslint-disable dot-notation */
  import axios from 'axios';
  import Error from '@/components/Site/ErrorModal';
  import Api from '../../api/api';


  export default {
    components: { Error },
    data() {
      return {
        user: {},
      };
    },
    methods: {
      userLogin() {
        Api.login(this.user.username, this.user.password)
          .then((response) => {
            axios.defaults.headers.common['Authorization'] = response.data.token;
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
            window.location = '/';
          }).catch(() => {
            window.$('#error_modal').modal('show');
          });
      },
    },
    mounted() {
      window.$(document).ready(() => {
        window.$('.ui.form')
          .form({
            fields: {
              username: 'email',
              password: ['minLength[6]', 'empty'],
            },
            inline: true,
            on: 'blur',
          });
      });
    },
    updated() {
      window.$(document).ready(() => {
        window.$('.ui.form')
          .form({
            fields: {
              username: 'email',
              password: ['minLength[6]', 'empty'],
            },
            inline: true,
            on: 'blur',
          });
      });
    },
  };
</script>
<style>
</style>
