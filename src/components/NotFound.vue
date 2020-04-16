<template>
    <div id="notFoundContainer" class="container">
        <h1>The page you're looking for does not exist.</h1>
    </div>
</template>

<script>
export default {
    name: 'not-found',
    beforeCreate: function() {
        // reload the page so we can tell the web server to server a 404 at URI
        if (this.$route.redirectedFrom) {
            this.$router.go();
        }
    }
}
</script>

<style scoped>
#notFoundContainer {
    text-align: center;
}

h1 {
    margin-top: 2em;
}
</style>
