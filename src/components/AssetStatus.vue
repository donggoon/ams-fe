<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="assets"
      class="elevation-1"
      :search="search"
      :items-per-page="500"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>자산관리</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-text-field
            v-model="search"
            append-icon="mdi-find"
            label="검색어"
            single-line
            hide-details
          ></v-text-field>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">신규</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.asst_id" label="아이디"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.asst_no" label="자산번호"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.type_cd" label="자산종류"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.cls_id" label="구분"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.asst_nm" label="자산명"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.mfg_co" label="제조사"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.use_cd" label="사용여부"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.stat_cd" label="상태"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.user_nm" label="사용자"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.dept_nm" label="부서"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.loca_cd" label="자산위치명"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.tran_dt" label="도입일"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          수정
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          삭제
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">초기화</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      search: '',
      headers: [
        {
          text: '아이디',
          align: 'center',
          sortable: true,
          value: 'asst_id',
        },
        {
          text: '자산번호',
          align: 'center',
          sortable: true,
          value: 'asst_no',
        },
        {
          text: '자산종류',
          align: 'center',
          sortable: true,
          value: 'type_cd',
        },
        {
          text: '구분',
          align: 'center',
          sortable: true,
          value: 'cls_id',
        },
        {
          text: '자산명',
          align: 'center',
          sortable: true,
          value: 'asst_nm',
        },
        {
          text: '제조사',
          align: 'center',
          sortable: true,
          value: 'mfg_co',
        },
        {
          text: '사용여부',
          align: 'center',
          sortable: true,
          value: 'use_cd',
        },
        {
          text: '상태',
          align: 'center',
          sortable: true,
          value: 'stat_cd',
        },
        {
          text: '사용자',
          align: 'center',
          sortable: true,
          value: 'user_nm',
        },
        {
          text: '부서',
          align: 'center',
          sortable: true,
          value: 'dept_nm',
        },
        {
          text: '자산위치명',
          align: 'center',
          sortable: true,
          value: 'loca_cd',
        },
        {
          text: '도입일',
          align: 'center',
          sortable: true,
          value: 'tran_dt',
        }
      ],
      assets: [],
      editedIndex: -1,
      editedItem: {
        asst_id: '',
        asst_no: '',
        type_cd: '',
        cls_id: '',
        asst_nm: '',
        mfg_co: '',
        use_cd: '',
        stat_cd: '',
        user_nm: '',
        dept_nm: '',
        loca_cd: '',
        tran_dt: ''
      },
      defaultItem: {
        asst_id: '',
        asst_no: '',
        type_cd: '',
        cls_id: '',
        asst_nm: '',
        mfg_co: '',
        use_cd: '',
        stat_cd: '',
        user_nm: '',
        dept_nm: '',
        loca_cd: '',
        tran_dt: ''
      },
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  methods: {
    initialize () {
      this.$http.get('api/assets').then((resp) => {
        // eslint-disable-next-line
        console.log(resp)
        this.assets = resp.data
      })
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.assets[this.editedIndex], this.editedItem)
      } else {
        this.assets.push(this.editedItem)
        this.$http.post('api/assets', {
          params: {
            asst_id: this.editItem.asst_id,
            asst_no: this.editedItem.asst_no,
            type_cd: this.editedItem.type_cd,
            cls_id: this.editedItem.cls_id,
            asst_nm: this.editedItem.asst_nm,
            mfg_co: this.editedItem.mfg_co,
            use_cd: this.editedItem.use_cd,
            stat_cd: this.editedItem.stat_cd,
            user_nm: this.editedItem.user_nm,
            dept_nm: this.editedItem.dept_nm,
            loca_cd: this.editedItem.loca_cd,
            tran_dt: this.editedItem.tran_dt
          }
        })
      }
      this.close()
    },
  },
  created () {
    this.initialize()
  }
}
</script>
