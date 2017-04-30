<template>
  <div>
    <navbar></navbar>
    <div id="app" class="ui container" style="margin-bottom: 100px">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Navbar from '@/components/Site/Nav';

  export default {
    name: 'app',
    components: { Navbar },
    data() {
      return {
        baseUrl: 'http://localhost:8000',
      };
    },
    mounted() {
      window.$(document).ready(() => {
        window.$('.ui.dropdown').dropdown();
      });
    },
    updated() {
      window.$(document).ready(() => {
        window.$('.ui.dropdown').dropdown();
      });
    },
  };
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
