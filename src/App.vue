<template>
  <v-app id="inspire">
    <app-drawer/>
    <app-bar/>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppDrawer from './components/common/AppDrawer'
import AppBar from './components/common/AppBar'
import AppFooter from './components/common/AppFooter'
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    source: String,
  },
  data: () => ({
    // drawer: null,
  }),
  components: {
    AppDrawer,
    AppBar,
    AppFooter
  },
  computed: {
    ...mapGetters(['getDrawer'])
  },
  methods: {
    ...mapMutations(['onClickDrawer'])
  }
}
</script>