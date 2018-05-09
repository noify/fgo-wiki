<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      width="180"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <template 
          value="true"
          v-for="(item, i) in items"
          >
        <v-list-tile :key="i" avatar @click="go(item.path)">
          <v-list-tile-avatar>
              <img :src="$assetsBaseUrl + item.icon">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {icon: 'common/images/icon/items/8008.png', title: '英灵图鉴', path: '/servantList'},
        {icon: 'common/images/icon/items/8009.png', title: '礼装图鉴', path: '/'},
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FGOWiki'
    }
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  }
}
</script>
