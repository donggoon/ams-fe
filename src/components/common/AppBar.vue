<template>
  <v-app-bar
    app
    color="white"
    dark
  >
    <v-app-bar-nav-icon @click.stop="onClickDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['onClickDrawer'])
  }
}
</script>