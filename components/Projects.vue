<template>
    <section class="w-full" ref="scrollElement">
      <div class="w-full flex item" v-for="(image, index) in images">
        <Item :image="image" link="/folio" :key="index" />
      </div>
    </section>
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