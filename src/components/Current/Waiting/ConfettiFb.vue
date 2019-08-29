<template>
  <div class="confetti-fb">
    <img src="@/assets/facebook.svg" alt="facebook">
    Open “Confetti Vietnam” now
    <img src="@/assets/arrow-right.svg" alt="arrow-right">
  </div>
</template>

<script>
export default {
  name: 'ConfettiFb'
}
</script>

<style lang="scss">
.confetti-fb {
  width: 100%;
  @media (min-width: 768px) {
    max-width: 510px;
  }
  margin: auto;
  border-radius: 16px;
  background-color: #0093ED;
  position: relative;
  z-index: 1;
  padding: 16px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>