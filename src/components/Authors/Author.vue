<template>
  <div class="card">
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <p><strong>Born at: </strong><span class="date">{{author.born_at}}</span></p>
            <p><strong>Died at: </strong><span class="date">{{author.died_at}}</span></p>
            <p><strong>Website: </strong><span class="date">{{author.website}}</span></p>
          </div>
        </div>
      </div>
      <img :src="`https://djangobooks.herokuapp.com/${author.image}`" class="visible content">
    </div>
    <div class="content">
      <a class="header">{{author.name}}</a>
      <div class="description">
        {{author.bio}}
      </div>
      <div class="meta">
        {{author.books.length}} Books
      </div>
    </div>
    <div class="extra content">
        <router-link :to="`/authors/${author.id}`" class="ui basic blue button">View</router-link>
    </div>
  </div>
</template>
<script>

  export default {
    props: ['author'],
    mounted() {
      window.$(document).ready(() => {
        window.$('.special.cards .image').dimmer({
          on: 'hover',
        });
      });
    },
    updated() {
      window.$(document).ready(() => {
        window.$('.special.cards .image').dimmer({
          on: 'hover',
        });
      });
    },
  };
</script>
<style>

</style>
