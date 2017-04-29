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
import Books from '@/components/Books/List';
import Login from '@/components/Profile/Login';
import Register from '@/components/Profile/Register';

export default {
  name: 'app',
  components: { Navbar, Books, Login, Register },
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
