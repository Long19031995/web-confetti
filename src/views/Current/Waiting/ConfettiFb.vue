<template>
  <a href="https://www.facebook.com/ConfettiVietnam/" target="_blank">
    <div class="confetti-fb">
      <img src="@/assets/facebook.svg" alt="facebook">
      Open “Confetti Vietnam” now
      <img src="@/assets/arrow-right.svg" alt="arrow-right">
    </div>
  </a>
</template>

<script>
export default {
  name: 'ConfettiFb'
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
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
    opacity: 0.9;
    cursor: pointer;
  }
}
</style>