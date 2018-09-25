<style>

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

</style>

<template>

<div id="app">
    <div id="nav">
        <router-link to="/automobiles/1">Automobile Insurance</router-link> |
        <router-link to="/prizes/2">Prizes Insurance</router-link> |
        <router-link to="/houses/3">Houses Insurance</router-link> |
        <router-link to="/other/4">Other Insurance</router-link>
    </div>
    <router-view/>
</div>

</template>
