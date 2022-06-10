<script setup>
import NavBar from "../components/NavBar.vue";
import JournalShowcase from "../components/JournalShowcase.vue";
import PostFilters from "../components/PostFilters.vue";
import { onUpdated, ref } from "vue";

const display = ref('')
const sort = ref('')

/* const displayType = (a) => {
   display.value = a;
}

const sortType = (a) => {
   sort.value = a;
} */

const getArgs = (a, b) => {
   display.value = a;
   sort.value = b;
}

onUpdated(() => {
   console.log(display.value + ' ' + sort.value)
})
</script>

<template>
  <div class="journal">
    <NavBar site="journal" />
    <JournalShowcase />
    <!-- <PostFilters @displayChange="displayType" @sortChange="sortType" /> -->
    <!-- <PostFilters @displayChange="(a) => {display = a}" @sortChange="(a) => {sort = a}" /> -->
    <PostFilters @filterClick="getArgs" />
    <h1>{{display + ' ' + sort}}</h1>
  </div>
</template>

<style lang="scss" scoped>
.journal {
   
}
</style>
