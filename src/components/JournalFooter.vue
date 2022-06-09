<template>
  <footer>
    <div class="container flex">
      <img
        class="logo"
        src="../assets/Logos/prosperist-banner.png"
        alt="Banner of Prosperism"
      />
      <div class="footerContent flex">
        <div class="branding">
          <router-link class="headerTitle" :to="{ name: 'Journal' }"
            >/ prosperist journal</router-link
          >
        </div>
        <ul class="nav flex">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Journal' }"
            >Journal</router-link
          >
          <router-link class="link" to="#">About</router-link>
          <router-link v-if="user" class="link" to="#">Create Post</router-link>
          <router-link v-if="!user" class="link" to="#"
            >Login/Register</router-link
          >
        </ul>
        <ul class="social flex">
          <li>
            <a href="#"><YouTube class="svgIcon" /></a>
          </li>
          <li>
            <a href="#"><Twitter class="svgIcon" /></a>
          </li>
          <li>
            <a href="#"><Instagram class="svgIcon" /></a>
          </li>
          <li>
            <a href="#"><Linkedin class="svgIcon" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import YouTube from "../assets/Icons/youtube-brands.svg";
import Twitter from "../assets/Icons/twitter-brands.svg";
import Instagram from "../assets/Icons/instagram-brands.svg";
import Linkedin from "../assets/Icons/linkedin-brands.svg";
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 66, 74, 1) 100%
  );
  height: 200px;
  width: 100%;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    height: 180px;
  }

  @media (max-width: 500px) {
    height: auto;
    padding: 1rem;
    padding-top: 5rem;
  }

  .flex {
    height: auto;
  }

  & > .flex {
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 500px) {
      justify-content: center;
      align-items: center;
      padding: 0;
    }
  }

  .logo {
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: 230px;
    height: auto;

    @media (max-width: 700px) {
      bottom: 30px;
      left: 20px;
      width: 140px;
      height: auto;
    }

    @media (max-width: 500px) {
      bottom: 90%;
      left: 50%;
      transform: translateX(-50%);
      width: 140px;
      height: auto;
      margin: 0 auto;
    }
  }

  .footerContent.flex {
    flex-direction: column;
    padding-right: 2rem;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 500px) {
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    .branding .headerTitle {
      font-size: 2rem;

      @media (max-width: 700px) {
        font-size: 6vw;
      }
    }

    .nav {
      gap: 1rem;
      font-size: 1.2rem;

      @media (max-width: 700px) {
        gap: 0.5rem;
        font-size: 3vw;
      }
    }

    .social.flex {
      width: 100%;
      justify-content: space-between;
    }

    .social .svgIcon {
      height: 25px;
      width: auto;
    }
  }
}
</style>
