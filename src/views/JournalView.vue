<script setup>
import NavBar from "../components/NavBar.vue";
import JournalShowcase from "../components/JournalShowcase.vue";
import PostFilters from "../components/PostFilters.vue";
</script>

<template>
  <div class="journal">
    <NavBar site="journal" />
    <JournalShowcase />
    <PostFilters />
  </div>
</template>

<style lang="scss" scoped>
.journal {
   
}
</style>
