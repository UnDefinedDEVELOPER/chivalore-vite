<script setup>

const props = defineProps({
    site: {
        type: String,
        default: 'home'
    }
})

const isHome = function() {
    return props.site == 'home' ? true : false;
}

const isJournal = function() {
    return props.site == 'journal' ? true : false;
}

console.log(props.site);
console.log(isHome());
console.log(isJournal());
</script>
<template>
    <header :class="{ 'home-bg': isHome(), 'journal-bg': isJournal() }">
        <nav class="container flex">
            <div class="branding">
                <router-link v-if="isHome()" class="headerTitle" :to="{ name: 'Home' }">chivalore.com
                </router-link>
                <router-link v-if="isJournal()"  class="headerTitle" to="#">/ prosperist journal
                </router-link>
            </div>
            <div class="navLinks">
                <ul v-show="!mobile">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Journal</router-link>
                    <router-link class="link" to="#">About</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <!-- <menuIco @click="toggleMobileNav" class="menuIco" v-show="mobile" />
     <transition name="mobileNav">
          <ul :class="{ 'home-bg': home, 'journal-bg': journal }" class="flex mobileNav" v-show="mobileNav">
               <router-link class="link" to="#">Home</router-link>
               <router-link class="link" to="#">Journal</router-link>
               <router-link class="link" to="#">About</router-link>
               <router-link class="link" to="#">Create Post</router-link>
               <router-link class="link" to="#">Login/Register</router-link>
          </ul>
     </transition> -->
    </header>
</template>

<style lang="scss" scoped>
header {
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

    header .navLinks {
        display: flex;
        height: 100%;
        align-items: center;

        ul {
            display: flex;
            height: 100%;
            align-items: center;
            gap: 1rem;
        }
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
        box-shadow: 10px 5px 10px 3px rgba(0, 0, 0, 0.1);
        z-index: 99;

        .link {
            font-size: 1.2rem;
        }

        &-enter-active,
        &-leave-active {
            transition: all 0.2s ease;
        }

        &-enter {
            transform: translateX(-250px);
        }

        &-enter-to {
            transform: translateX(0);
        }

        &-leave-to {
            transform: translateX(-250px);
        }
    }

    @media (max-width: 400px) {
        height: 70px;
    }
}
</style>