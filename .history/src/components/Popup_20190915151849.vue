<template>
  <div class="popup">
    <div class="popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup'
}
</script>

<style lang="scss">
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  &__content {
    max-height: 90%;
    background: white;
  }
}
</style>