<template>
  <div class="about">
    <NavBar site="home" />
    <section class="about-content flex">
      <div class="showcase flex">
        <div class="showcaseLogo">
          <img src="../assets/Logos/chivalore-logo.png" alt="Chivalore logo" />
        </div>
        <p class="showcaseText">chivalry, valor, lore.</p>
      </div>
      <div class="about-text home-bg">
        <div class="container flex">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga iure suscipit expedita corporis qui sequi magnam vel magni tempore quos nisi officia consectetur perspiciatis architecto dolorum pariatur, placeat dolor consequatur rem, distinctio tempora. Voluptatibus ipsum sunt tempora incidunt minus in consequuntur, mollitia expedita unde praesentium laudantium impedit, provident deserunt?</p>
           <p>Aut nulla sapiente quod voluptate esse quos unde officia deleniti ipsam voluptas amet natus eum tempore officiis dolorem, libero numquam, velit nesciunt. Odio quas nesciunt inventore quasi exercitationem repellendus assumenda vitae saepe, molestiae, nam maiores perspiciatis doloribus magnam error enim officiis doloremque, perferendis esse in. Itaque tempore unde perspiciatis corporis.</p>
           <p>Atque fuga hic eos, facere nam minima autem veritatis porro dignissimos rerum quos commodi reprehenderit. Sapiente dignissimos illo voluptate perferendis aliquam eos quia unde repudiandae debitis possimus corrupti, corporis quibusdam ab quae, repellendus sunt nam! Repellat velit modi, dignissimos atque accusamus quos odio officiis nihil rem laudantium earum numquam ratione!</p>
           <p>Voluptate sed in, velit, possimus dolore rerum alias nulla perferendis, commodi natus aperiam iusto! Provident assumenda fugit fuga laborum recusandae quod quam ipsa cum consequatur corrupti similique inventore, illum sunt sequi nesciunt placeat voluptatem reprehenderit! Beatae est laudantium odit porro tempora ea veritatis tenetur fuga iure. Laboriosam voluptates nobis nemo.</p>
           <p>Repudiandae eaque autem ducimus molestias fugit commodi sapiente sunt voluptates consectetur deserunt, exercitationem debitis voluptatum aliquam ullam alias tempora iure natus mollitia minus voluptatibus? Eum sed recusandae aperiam modi sapiente dolor blanditiis voluptatem porro, perspiciatis voluptatibus nihil saepe repellendus quisquam non exercitationem itaque dolorem quia! Suscipit modi atque placeat nihil!</p>
        </div>
      </div>
    </section>
    <HomeFooter />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import HomeFooter from "../components/HomeFooter.vue";
</script>

<style lang="scss" scoped>
.about {
  .showcase {
    width: 100%;
    height: auto;
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
    gap: 3vw;
    background: linear-gradient(
      0deg,
      rgba(227, 197, 172, 1) 0%,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 1) 80%,
      rgba(240, 226, 215, 1) 100%
    );
    z-index: 2;
    user-select: none;

    .showcaseText {
      font-family: "Cormorant Unicase";
      color: #4a0025;
      font-weight: 700;
      line-height: 0.6;
      letter-spacing: -0.3vw;
      font-size: 5vw;
    }

    .showcaseLogo {
      width: 20%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .about-content.flex {
     flex-direction: column;

     .about-text {
        padding: 2rem 0;
        color: #fff;
        font-size: 1.5rem;

        .flex {
           flex-wrap: wrap;
           justify-content: center;
           gap: 2rem;

           p {
              width: 33%;
           }
        }
     }
  }
}
</style>
