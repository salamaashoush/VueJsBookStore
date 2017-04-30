/**
* Created by salamaashoush on 28/04/17.
*/
<template>
  <div>
    <div class="ui header">All Books</div>
    <div class="ui special cards">
      <author v-for="author in authors " :key="author.id" :author="author"></author>
    </div>
  </div>

</template>
<script>
  import Api from '../../api/api';
  import Author from './Author';

  export default {
    components: { Author },
    data() {
      return {
        authors: [],
      };
    },
    methods: {},
    mounted() {
      Api.getAuthors().then((response) => {
        this.authors = response.data;
      });
    },
  };
</script>
<style>

</style>
