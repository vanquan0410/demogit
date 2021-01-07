<template>
    <v-app class="layout-style-guideline">
        <v-main>
            <router-view></router-view>
                    </v-main>

    </v-app>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.layout-style-guideline{
    background-color: $Gray;
}

</style>