<template>
    <h1 class="text-[12ch] md:text-[16ch] m-0 p-0 lg:text-[18vw] xl:text-[20vw] whitespace-nowrap letter-space bottom-0 left-0 fixed z-[999]">
      <span class="absolute top-full -translate-y-3/4 pl-5">{{ name }}*</span>
    </h1>
</template>

<script>
export default {
    props: {
        name: String,
    }
}
</script>