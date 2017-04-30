<template>
  <div class="ui basic modal" id="notify_modal">
    <div class="ui icon header">
      <slot name="header-icon"><i class="close icon"></i></slot>
      <slot name="header"></slot>
    </div>
    <div class="content">
      <p style="text-align: center">
        <slot name="message"></slot>
      </p>
    </div>
    <div class="actions">
      <slot name="actions">
        <div class="ui red basic cancel inverted button">
          <i class="remove icon"></i>
          Ok
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
  };
</script>
<style>
</style>
