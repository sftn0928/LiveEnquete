<template>
  <div>
    <header>
      <div class="header-wrapper">
        <h1 class="header-title">YouTubeライブアンケート</h1>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">
.header-wrapper {
  height: $headerHeight;
  background-color: #707070;
}

.header-title {
  color: white;
  line-height: $headerHeight;
  margin-left: 20px;
}

</style>
