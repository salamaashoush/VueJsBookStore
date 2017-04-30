<template>
  <div class="card">
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <router-link class="ui inverted button" :to="`/books/${book.id}`">View</router-link>
          </div>
        </div>
      </div>
      <img :src="`https://djangobooks.herokuapp.com/${book.cover}`">
    </div>
    <div class="content">
      <a class="header">{{book.title}}</a>
      <div class="meta">
        <span class="date">{{book.publish_date}}</span>
      </div>
      <div class="description">
        {{book.description}}
      </div>
    </div>
    <div class="extra content">
      <div class="two buttons">
        <router-link class="ui basic blue button" :to="`/authors/${book.author.id}`">Author</router-link>
        <router-link class="ui basic blue button" :to="`/categories/${book.category.id}`">Category</router-link>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    props: ['book'],
    data() {
      return {
        rating: 0,
      };
    },
    mounted() {
      window.$(document).ready(() => {
        window.$('.special.cards .image').dimmer({
          on: 'hover',
        });
        window.$('.ui.rating').rating();
      });
    },
    updated() {
      window.$(document).ready(() => {
        window.$('.special.cards .image').dimmer({
          on: 'hover',
        });
        window.$('.ui.rating').rating();
      });
    },
  };
</script>
<style>

</style>
