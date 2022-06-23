<script setup>
import NavBar from "../components/NavBar.vue";
import JournalShowcase from "../components/JournalShowcase.vue";
import PostFilters from "../components/PostFilters.vue";
import BlogPost from "../components/BlogPost.vue";
import { onUpdated, ref } from "vue";
import JournalFooter from "../components/JournalFooter.vue";

const display = ref("");
const sort = ref("");

const sampleBlogPost = [
  {
    title: "Prosperism - Awakening",
    date: "Monday, March 21, 2022",
    blogHTML:
      "A very essential truth I've realized since I have arrived at the “Domain of Paths” is that it's one thing to think beautiful, eloquent, meaningful, deep, and captivating thoughts, and almost completely another thing to live a beautiful life, to truly speak eloquently, actually do meaningful things, have deep conversations and to captive oneself with useful and good knowledge.",
    blogCoverPhoto: "book",
  },
  {
    title: "Prosperism - Improvement",
    date: "Wednesday, February 23, 2022",
    blogHTML:
      "This Path is a path of improvement. It's often funny and confusing to me how extremely deep concepts can be expressed using incredibly shallow-sounding words. That is precisely the reason I decided to define this Path and all its attributes to the greatest possible extent.",
    blogCoverPhoto: "smart",
  },
];

console.log(sampleBlogPost);

const getArgs = (a, b) => {
  display.value = a;
  sort.value = b;
};

onUpdated(() => {

})
</script>

<template>
  <div class="journal">
    <NavBar site="journal" />
    <JournalShowcase />
    <PostFilters @filterClick="getArgs" />
    <div id="post-list" class="blog-wrapper flex">
      <BlogPost
        :post="post"
        :display="display"
        v-for="(post, index) in sampleBlogPost"
        :key="index"
      />
    </div>
    <JournalFooter />
  </div>
</template>

<style lang="scss" scoped>
.journal {
   overflow: hidden;
  #post-list {
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    margin-bottom: 110px;
  }
}
</style>
