<template>
  <v-app id="inspire">
    <app-drawer/>
    <app-bar/>
    <v-content>
      <asset-status/>
      <!-- <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container> -->
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppDrawer from './components/common/AppDrawer'
import AppBar from './components/common/AppBar'
import AppFooter from './components/common/AppFooter'
import AssetStatus from './components/AssetStatus'
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
    AppFooter,
    AssetStatus
  },
  computed: {
    ...mapGetters(['getDrawer'])
  },
  methods: {
    ...mapMutations(['onClickDrawer'])
  }
}
</script>