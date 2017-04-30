<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column" style="width: 50%; margin-top: 10%;">
      <h2 class="ui teal image header">
        <img src="../../assets/logo.png" class="image">
        <div class="content">
          Register new  account
        </div>
      </h2>
      <form class="ui large form"  @submit.prevent="userRegister">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="firstName" v-model="user.first_name" placeholder="First Name">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="lastName" v-model="user.last_name" placeholder="Last Name">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" v-model="user.email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="user.password" placeholder="Password">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="confirm" v-model="user.confirm_password" placeholder="Confirm Password">
            </div>
          </div>
          <input type="submit" class="ui fluid large teal submit button" value="Login">
        </div>

        <div class="ui error message">

        </div>
      </form>
    </div>
    <error>
      <template slot="header">Error</template>
      <template slot="message">Please Try Again with a valid data</template>
    </error>
    <notify>
      <template slot="header-icon"><i class="check icon"></i></template>
      <template slot="header">Success</template>
      <template slot="message">User Created Successfully</template>
      <template slot="action">
        <div class="ui red basic cancel inverted button">
          <i class="remove icon"></i>
          Ok
        </div>
        <div class="ui red basic ok inverted button">
          <i class="login icon"></i>
          Login
        </div>
      </template>
    </notify>
  </div>
</template>
<script>
  import Notify from '@/components/Site/NotifyModal';
  import Error from '@/components/Site/ErrorModal';

  import Api from '../../api/api';

  export default {
    components: { Notify, Error },
    data() {
      return {
        user: {},
        hasErrors: false,
      };
    },
    methods: {
      userRegister() {
        Api.register(this.user)
          .then(() => {
            window.$('#notify_modal').modal('show');
          })
          .catch(() => {
            this.hasErrors = true;
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
              confirm: ['minLength[6]', 'empty'],
              firstName: 'empty',
              lastName: 'empty',
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
              email: 'empty',
              password: ['minLength[6]', 'empty'],
              confirm: ['minLength[6]', 'empty'],
              firstName: 'empty',
              lastName: 'empty',
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
