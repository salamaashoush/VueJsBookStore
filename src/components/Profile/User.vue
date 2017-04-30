<template>
  <div class="card">
    <div class="content">
      <div class="header">
        {{`${user.first_name} ${user.last_name}`}}
      </div>
      <div class="meta">
        {{user.email}}
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    props: ['user'],
  };
</script>
<style>

</style>
