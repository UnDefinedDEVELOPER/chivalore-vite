<template>
  <footer>
    <div class="container flex">
      <div class="left flex">
        <div class="col-1">
          <ul class="flex">
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Journal' }"
              >Journal</router-link
            >
            <router-link class="link" to="#">About</router-link>
            <router-link v-if="user" class="link" to="#"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" to="#"
              >Login/Register</router-link
            >
          </ul>
        </div>
        <div class="col-2 flex">
          <div class="branding">
            <router-link class="headerTitle" :to="{ name: 'Home' }"
              >chivalore.com</router-link
            >
          </div>
          <ul class="flex">
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
      <div class="right flex">
        <img
          class="logo"
          src="../assets/Logos/chivalore-logo.png"
          alt="Chivalore logo"
        />
        <p>Copyright 2022 | All Rights Reserved</p>
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
  top: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(74, 0, 37, 1) 100%
  );
  height: 200px;
  width: 100%;
  justify-content: center;
  align-content: center;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    height: auto;
  }

  & > .flex {
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;
    padding: 1rem;

    @media (max-width: 800px) {
      width: 100%;
      height: auto;
    }
  }

  .left {
    font-size: 1rem;

    @media (max-width: 800px) {
      padding: 1.5rem;
    }

    .col-1 {
      width: 35%;

      ul.flex {
        flex-direction: column;
        justify-content: center;
        gap: 0.3rem;
      }

      @media (max-width: 360px) {
        font-size: 0.5rem;
      }
    }

    .col-2 {
      width: 65%;

      &.flex {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        @media (max-width: 360px) {
          height: 100%;
          gap: 0rem;
          justify-content: center;
          align-items: center;
        }
      }

      .branding .headerTitle {
        font-size: 2rem;

        @media (max-width: 360px) {
          font-size: 1rem;
        }
      }

      ul.flex {
        width: 100%;
        justify-content: space-evenly;
        height: auto;
        gap: 1.5rem;

        @media (max-width: 360px) {
          width: 100%;
          justify-content: center;
          gap: 0.2rem;
        }
      }

      .svgIcon {
        @media (max-width: 360px) {
          height: 10px;
        }
      }
    }

    .svgIcon {
      height: 30px;
      width: auto;
    }
  }

  .right {
    background: #fff;

    &.flex {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      @media (max-width: 800px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0rem;
      }
    }

    p {
      color: #4a0025;
      font-weight: 700;
    }

    .logo {
      max-width: 350px;
      height: auto;

      @media (max-width: 800px) {
        width: 50%;
        height: auto;
      }
    }
  }
}
</style>
