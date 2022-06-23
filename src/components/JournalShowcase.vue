<script setup></script>
<template>
  <div class="showcase">
    <div class="card">
      <div v-if="user">
        <div class="flex">
          <p>
            Welcome back, oh Prosperist! Peace and blessings be upon the seekers
            of truth!
          </p>
        </div>
      </div>
      <div v-else>
        <div class="flex">
          <p>
            Peace be upon you! Embark on the voyage of wisdom and eloquence -
            become a Prosperist!
          </p>
          <div class="flex">
            <img
              src="../assets/Logos/journal-logo.png"
              alt="Prosperist Journal Logo"
            />
            <router-link class="link journal-bg" to="#"
              >LOGIN/REGISTER</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showcase {
  height: 600px;
  width: 100%;
  background-image: url("../assets/Images/shore.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    height: 50vh;
    justify-content: center;

    /* @media (min-width: 700px) {
      padding: ;
    } */
  }

  .card {
    padding: 2rem;
    width: 700px;
    background-color: #fff;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

    @media (max-width: 800px) {
      width: 70%;
      border-radius: 20px;
      padding: 1rem;
    }

    & > div {
      height: 100%;
    }

    & > div > .flex {
      flex-direction: column;
      gap: 1rem;

      .flex {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;

        @media (max-width: 800px) {
          flex-direction: column;
          gap: 1rem;
        }

        img {
          width: 50%;
          height: auto;

          @media (max-width: 800px) {
            width: 50%;
            max-width: 250px;
          }
        }

        .link {
          width: 50%;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 800px) {
            width: 100%;
            font-size: 0.7rem;
            letter-spacing: 1px;
            border-radius: 20px;
          }
        }
      }
    }

    p {
      font-size: 2rem;
      text-align: center;
      line-height: 1;
      letter-spacing: -1px;

      @media (max-width: 800px) {
        font-size: 1.2rem;
        line-height: 1.3;
      }
    }
  }
}
</style>
