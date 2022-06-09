<script setup>
import { onMounted, ref } from "vue";
const display = ref("");
const tiles = ref("");
const list = ref("");

const sort = ref("");
const ascending = ref("");
const descending = ref("");

onMounted(() => {
  sort.value = descending.value.innerText;
  display.value = tiles.value.innerText;
});
</script>

<template>
  <div class="transition journal-bg flex">
    <div class="display flex">
      <input type="radio" id="t" value="tiles" v-model="display" />
      <label
        ref="tiles"
        :class="{
          selected: display == tiles.innerText,
          link: display !== tiles.innerText,
        }"
        for="t"
        class="link"
        >tiles</label
      >
      <input type="radio" id="l" value="list" v-model="display" />
      <label
        ref="list"
        :class="{
          selected: display == list.innerText,
          link: display !== list.innerText,
        }"
        for="l"
        class="link"
        >list</label
      >
    </div>
    <div class="sort flex">
      <input type="radio" id="up" value="ascending" v-model="sort" />
      <label
        ref="ascending"
        :class="{
          selected: sort == ascending.innerText,
          link: sort !== ascending.innerText,
        }"
        for="up"
        >ascending</label
      >
      <input type="radio" id="down" value="descending" v-model="sort" />
      <label
        ref="descending"
        :class="{
          selected: sort == descending.innerText,
          link: sort !== descending.innerText,
        }"
        for="down"
        >descending</label
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transition {
  color: #fff;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  font-size: 1.3rem;

  .flex {
    height: auto;
    gap: 1rem;
    align-items: center;
  }

  .selected {
    background-color: #fff;
    padding: 0.5rem;
    color: #003d44;
    font-weight: 700;
  }

  input {
    display: none;
  }

  label {
    font-family: "Merriweather";
    font-weight: 300;
  }
}
</style>
