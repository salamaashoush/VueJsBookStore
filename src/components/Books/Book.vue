<template>
  <div class="card">
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <div class="ui inverted button" @click="viewBook">View</div>
          </div>
        </div>
      </div>
      <img :src="'http://localhost:8000/'+book.cover">
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
      <a>
        <div class="ui star rating" data-rating="3" data-max-rating="5"></div>
      </a>
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
    methods: {
      viewBook() {
      },
    },
  };
</script>
<style>

</style>
