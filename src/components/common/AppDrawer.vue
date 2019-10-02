<template>
  <v-navigation-drawer
    :value="getDrawer"
    app
  >
    <app-treeview/>
  </v-navigation-drawer>
</template>

<script>
import AppTreeview from './AppTreeview'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppTreeview
  },
  computed: {
    ...mapGetters(['getDrawer'])
  }
}
</script>