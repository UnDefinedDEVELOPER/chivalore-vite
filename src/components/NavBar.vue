<script>
import menuIco from "../assets/Icons/bars-regular.svg";
import { onMounted, ref } from "vue";

export default {
  name: "NavigationMenu",
  components: { menuIco },
  props: {
    site: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const mobile = ref(null);
    const mobileNav = ref(null);
    const windowWidth = ref(null);

    const checkWidth = () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value <= 800) {
        mobile.value = true;
        return;
      } else {
        mobile.value = false;
        mobileNav.value = false;
      }
    };

    onMounted(() => {
      checkWidth();
      window.addEventListener("resize", () => {
        checkWidth();
      });
    });

    return { mobile, mobileNav, windowWidth, props };
  },
};
</script>
<template>
  <header
    :class="{
      'home-bg': props.site == 'home',
      'journal-bg': props.site == 'journal',
    }"
  >
    <nav class="container flex">
      <div class="branding">
        <router-link
          v-if="props.site == 'home'"
          class="headerTitle"
          :to="{ name: 'Home' }"
          >chivalore.com
        </router-link>
        <router-link v-if="props.site == 'journal'" class="headerTitle" to="#"
          >/ prosperist journal
        </router-link>
      </div>
      <ul v-show="!mobile" class="navLinks">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Journal' }"
          >Journal</router-link
        >
        <router-link class="link" :to="{ name: 'About' }">About</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </nav>
    <menuIco v-if="mobile" class="menuIco" @click="mobileNav = !mobileNav" />
    <Transition name="mobileNav">
      <ul
        v-show="mobileNav"
        :class="{
          'home-bg': props.site == 'home',
          'journal-bg': props.site == 'journal',
        }"
        class="flex mobileNav"
      >
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Journal</router-link>
        <router-link class="link" to="#">About</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
header {
  user-select: none;
  height: 100px;
  width: 100%;
  box-shadow: 0 5px 5px -1px rgba(0, 0, 0, 0.2);
  color: #fff;
  position: relative;

  .flex {
    justify-content: space-between;
    align-items: center;
  }

  .container {
    padding: 0 1.5rem;
  }

  .branding .headerTitle {
    font-size: 32px;
    color: #fff;
    text-decoration: none;

    @media (max-width: 400px) {
      font-size: 20px;
    }
  }

  .navLinks {
    display: flex;
    gap: 1rem;
  }

  .menuIco {
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 25px;
    height: 25px;
    width: auto;
    fill: #fff;

    @media (max-width: 400px) {
      top: 23px;
      right: 25px;
    }
  }

  .mobileNav {
    &-enter-active,
    &-leave-active {
      transition: all 0.2s ease;
    }

    &-enter-from {
      transform: translateX(-250px);
    }

    &-enter-to {
      transform: translateX(0px);
    }

    &-leave-to {
      transform: translateX(-250px);
    }

    padding: 50px 20px;
    width: 70%;
    max-width: 250px;
    flex-direction: column;
    position: fixed;
    height: 100%;
    color: #fff;
    top: 0;
    left: 0;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    box-shadow: 10px 5px 10px 3px #0000001a;
    z-index: 99;

    .link {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 400px) {
    height: 70px;
  }
}
</style>
