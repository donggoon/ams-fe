<template>
  <v-treeview
    v-model="tree"
    :open="open"
    :items="items"
    activatable
    item-key="id"
    item-text="name"
    open-on-click
    :active.sync="active"
    @update:active="onClickMenu"
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    active: [],
    open: ['OA'],
    files: {
      // html: 'mdi-language-html5',
      // js: 'mdi-nodejs',
      // json: 'mdi-json',
      // md: 'mdi-markdown',
      // pdf: 'mdi-file-pdf',
      // png: 'mdi-file-image',
      // txt: 'mdi-file-document-outline',
      // xls: 'mdi-file-excel',
      // vue: 'mdi-vuejs'
    },
    tree: [],
    items: [
      {
        id: 'OA',
        name: 'OA',
        children: [
          {
            id: 'HW',
            name: 'HW',
            children: [
              {
                id: 'AssetStatus',
                name: '현황'
                // file: 'vue',
              }
            ],
          }
        ]
      },
      {
        id: 'IP',
        name: 'IP'
        // file: 'vue',
      }
    ]
  }),
  computed: {
    ...mapGetters(['getMenu'])
  },
  methods: {
    onClickMenu (active) {
      try {
        // eslint-disable-next-line
        if (this.$route.name != active[0]) {
          this.$router.push({
            name: active[0]
          })
        }
      } catch (e) {
        // eslint-disable-next-line
        console.error(e)
      }
    }
  }
}
</script>
