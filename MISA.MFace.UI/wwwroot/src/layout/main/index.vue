<template>
  <v-app id="app-main">
    <v-navigation-drawer
      app
      clipped
      fixed
      class="app-navigation"
      width="200"
      permanent
    >
      <v-list dense nav>
        <v-list-item v-for="(item, index) in itemsMenu" :key="index" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app absolute height="56" clipped-left class="app-header">
      <div class="logo">
        <v-img
          class="img-menu"
          src="@/assets/images/Union 28@2x.png"
          width="24"
          height="24"
        />
        <v-img
          class="img-logo"
          src="@/assets/images/Group 17877@2x.png"
          height="32"
          width="108"
        />
      </div>
    </v-app-bar>

    <v-main class="misa-app-main pa-0 ma-0">
      <v-container fluid class="misa-container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      itemsMenu: [
        {
          icon: "ico-g-file",
          title: "Kê khai thuế",
          link: "",
        },
        {
          icon: "ico-g-box",
          title: "Kê khai thuế",
          link: "",
        },
        {
          icon: "ico-g-person-profile",
          title: "Kê khai thuế",
          link: "",
        },
        {
          icon: "ico-g-family",
          title: "Kê khai thuế",
          link: "",
        },
        {
          icon: "ico-g-person-file",
          title: "Kê khai thuế",
          link: "ico-g-setting",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#app-main {
  background-color: $BG-Light;

  .misa-container {
    padding: 0 24px;
    height: 100%;
  }

  .app-header {
    background-color: $BG-White;
    box-shadow: 0px 1px 2px $B-Shadow;
    z-index: 10;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      .img-menu {
        cursor: pointer;
      }

      .img-logo {
        margin-left: 16px;
        cursor: pointer;
      }
    }
  }

  .misa-app-main{
    position: absolute;
    top: 56px;
    left: 200px;
    right: 0;
    bottom: 0;
  }
}
</style>