<template>
  <div v-if="display == 'tiles'" class="blog-tile flex journal-bg">
    <div class="blog-img" :style="backgroundImg">
      <!-- <img :src="getBlogPhoto(post.blogCoverPhoto)" alt="" /> -->
    </div>
    <div class="blog-content flex">
      <div class="blog-text flex">
        <div class="blog-title">
          <router-link to="#">
            <h1>{{ post.title }}</h1>
          </router-link>
          <h4>{{ post.date }}</h4>
        </div>
        <p>{{ post.blogHTML }}</p>
      </div>
      <div class="blog-link flex">
        <router-link class="link" to="#">>&nbsp;read</router-link>
      </div>
    </div>
  </div>
  <div v-else class="blog-li flex">
    <div class="blog-date">
      <h3>{{ post.date }}:</h3>
    </div>
    <div class="journal-bg flex">
      <div class="blog-title">
        <router-link to="#">
          <h1>{{ post.title }}</h1>
        </router-link>
      </div>
      <div class="blog-link flex">
        <router-link class="link" to="#">>&nbsp;read</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, reactive } from "vue";

const props = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
  display: {
    type: String,
    default: "tiles",
  },
});

onMounted(() => {
  console.log(props.display);
});

onUpdated(() => {
  console.log(props.display);
});

const getBlogPhoto = (name) => {
  return new URL(`../assets/journal-img/${name}.png`, import.meta.url).href;
};

const backgroundImg = reactive({
  "background-image": `url(${getBlogPhoto(props.post.blogCoverPhoto)})`,
});
</script>

<style lang="scss" scoped>
.blog-tile {
  color: #fff;
  height: 300px;
  overflow: hidden;
  border-bottom-right-radius: 150px;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.65);
  .blog-img {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    img {
      width: 100%;
      height: auto;
    }
  }
  .blog-content {
    padding: 2rem;
    gap: 2rem;
    width: 60%;

    .blog-text.flex {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      .blog-title {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        h1 {
          font-family: "Georgia";
          font-size: 2.6rem;
          @media (max-width: 1500px) {
            font-size: 2.5vw;
          }
        }

        h4 {
          font-family: "Georgia";
          font-style: italic;
          font-weight: 300;
        }
      }
    }
  }
  .blog-link.flex {
    height: auto;
    justify-content: center;
    align-items: center;

    .link {
      font-family: "Spectral";
      font-size: 2rem;
      font-weight: 700;
    }
  }
}

.blog-li.flex {
  width: 100%;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  border-bottom-right-radius: 50px;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.65);

  .blog-date {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    h3 {
      display: inline;
      width: auto;
    }
  }

  .journal-bg.flex {
    width: 80%;
    padding: 1rem;
    padding-right: 3rem;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    border-bottom-right-radius: 50px;

    .blog-link.flex {
      height: auto;
      justify-content: center;
      align-items: center;

      .link {
        font-family: "Spectral";
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }
}
</style>
