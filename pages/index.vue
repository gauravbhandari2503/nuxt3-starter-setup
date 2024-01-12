<script setup lang="ts">
    const {sayWelcome, sayGoodbye} = useUtils();
    sayWelcome();
    sayGoodbye();
</script>
<template>
    <h1>Default Page</h1>
</template>