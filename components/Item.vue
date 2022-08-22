<template>
    <a :href="link">
        <img :src="image" alt="" />
    </a>
</template>

<script>
export default {
    props: {
        image: String,
        link: String,
    }
}
</script>