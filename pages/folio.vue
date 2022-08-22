<template>
  <main class="w-screen h-screen m-0 p-0 relative overflow-x-hidden">
    <Nav />
    <Name name="Ian" />
    <Space />
    <section class="w-full flex flex-wrap gap-5 px-5">
        <div class="h-36 w-36 bg-orange-500" v-for="image in images">
            <img :src="image" class="w-full h-full object-fill" alt="">
        </div>
    </section>
  </main>
</template>

<script>
import getPictures from '~/utils';
// import { ref, onMounted, onUnmounted } from 'vue';

export default {
    data() {
        return {
            images: ["/plum-3.jpg", "/plum-2.jpg", "/plum-4.jpg", "/plum-1.jpg"]
        };
    },
}
</script>