<template>
  <div class="blog-card flex">
    <div class="blog-img"></div>
    <div class="blog-content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.blogHTML }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
