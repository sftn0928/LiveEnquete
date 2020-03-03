<template>
  <div class="loader">Loading...</div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.loader,
.loader:after {
  border-radius: 50%;
  width: 8em;
  height: 8em;
}
.loader {
  margin: 10vh auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1em solid $textColor;
  border-right: 1em solid $textColor;
  border-bottom: 1em solid $textColor;
  border-left: 1em solid #ffffff;
  transform: translateZ(0);
  animation: load 1s infinite linear;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
