<template>
<div>
    <b-button v-b-toggle.sidebar-custom>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-custom" title="Sidebar" bg-variant="white" backdrop shadow>
        <div class="px-3 py-2">
            <b-form-group>
                <b-input placeholder="Cari..."></b-input>
            </b-form-group>
        </div>
        <nav class="mb-3">
            <b-nav vertical>
                <b-nav-item href="#link-1">
                    <router-link to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item href="#link-2">
                    <router-link to="/pesan">Pesan</router-link>
                </b-nav-item>
            </b-nav>
        </nav>
    </b-sidebar>
    <div id="app" class="container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    name: "App",
    components: {

    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
