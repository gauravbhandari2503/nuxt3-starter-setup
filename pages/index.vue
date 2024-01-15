<script setup lang="ts">
    const {sayWelcome, sayGoodbye} = useUtils();
    sayWelcome();
    sayGoodbye();
    const resp = await $fetch('/api/hello');
    // useFetch can be used to fetch data during the server-side rendering (SSR) process.
    // It will return the data immediately if it is already available, otherwise it will wait for the data to be fetched before rendering the page.

    // useLazyFetch is similar to useFetch, but it is used to fetch data during the client-side rendering (CSR) process.
    // It will only fetch the data when the component is mounted and will not block the rendering of the page.
    const {data: resp1} = await useFetch('/api/hello');
    console.log(resp1.value);
    const runTimeConfig = useRuntimeConfig();
    console.log(runTimeConfig.public.API_ROOT);
</script>
<template>
    <pre><code>{{ resp }}</code></pre>
    <h1>Default Page</h1>
</template>