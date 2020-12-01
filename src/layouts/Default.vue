<template>
  <div class="layout">
      <g-link class="nav-link" to="/new">最新动态</g-link>
      <g-link class="nav-link" to="/social">社交圈</g-link>
      <g-link class="nav-link" to="/blog">博客列表</g-link>
      <g-link class="nav-link" to="/project">开源项目</g-link>

      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-link {
    margin-left: 10px;
}
</style>