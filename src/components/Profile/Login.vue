<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal image header">
        <img src="../../assets/logo.png" class="image">
        <div class="content">
          Log-in to your account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" v-model="user.username" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="user.password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large teal submit button" @click="userLogin">Login</div>
        </div>

        <div class="ui error message">

        </div>
        <error>
          <template slot="header">Validation Errors</template>
          <template slot="message">Please Try Again with a valid data</template>
        </error>
      </form>

      <div class="ui message">
        New to us? <a href="#">Sign Up</a>
      </div>
    </div>
  </div>
</template>
<script>
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
          .catch(() => {
            window.$('#error_modal').modal('show');
          });
      },
    },
    mounted() {
      window.$(document).ready(() => {
        window.$('.ui.form')
          .form({
            fields: {
              email: 'empty',
              password: ['minLength[6]', 'empty'],
            },
          });
      });
    },
    updated() {
      window.$(document).ready(() => {
        window.$('.ui.form')
          .form({
            fields: {
              email: 'empty',
              password: ['minLength[6]', 'empty'],
            },
          });
      });
    },
  };
</script>
<style>
</style>
