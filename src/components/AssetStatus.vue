<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="assets"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>자산관리</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <div class="flex-grow-1"></div>
          <v-text-field
            v-model="search"
            append-icon="mdi-search-web"
            label="검색어"
            single-line
            hide-details
          ></v-text-field>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="assetDialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">신규</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ assetFormTitle }}</span>
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
                <v-btn color="blue darken-1" text @click="assetClose">닫기</v-btn>
                <v-btn color="blue darken-1" text @click="assetSave">저장</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="historyDialog">
            <v-card>
              <v-timeline dense clipped>
                <v-timeline-item
                  v-for="item in histories"
                  :key="item._id"
                  class="mb-4"
                  color="grey"
                  icon-color="grey lighten-2"
                  small
                >
                  <v-row justify="space-between">
                    <v-col cols="1">{{ item.asst_id }}</v-col>
                    <v-col cols="1">{{ item.asst_no }}</v-col>
                    <v-col cols="1">{{ item.cls_id }}</v-col>
                    <v-col cols="3">{{ item.asst_nm }}</v-col>
                    <v-col cols="3">{{ item.exi_user }} → {{ item.chg_user }}</v-col>
                    <v-col cols="1">{{ item.tran_dt }}</v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="showHistory(item)"
        >
          mdi-search-web
        </v-icon>
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pen
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
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
      assetDialog: false,
      historyDialog: false,
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
        },
        {
          text: '편집',
          align: 'center',
          value: 'action',
          sortable: false
        }
      ],
      assets: [],
      editedIndex: -1,
      editedItem: {
        _id: '',
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
        _id: '',
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
      histories: [],
    }
  },
  computed: {
    assetFormTitle () {
      return this.editedIndex === -1 ? '신규 추가' : '정보 수정'
    },
    historyFormTitle () {
      return '이력 조회'
    }
  },
  watch: {
    assetDialog (val) {
      // eslint-disable-next-line
      console.log(val || this.assetClose())
      val || this.assetClose()
    },
    historyDialog (val) {
      val || this.assetClose()
    }
  },
  methods: {
    initialize () {
      this.$http.get('api/assets').then((resp) => {
        this.assets = resp.data
      })
    },

    editItem (item) {
      this.editedIndex = this.assets.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.assetDialog = true
    },

    deleteItem (item) {
      const index = this.assets.indexOf(item)
      if (confirm('자산 정보를 삭제하시겠습니까?')) {
        this.$http.delete('api/assets/' + item._id)
        this.assets.splice(index, 1)
      }
    },

    assetClose () {
      this.assetDialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    assetSave () {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      } 

      today = yyyy + '-' + mm + '-' + dd;

      if (this.editedIndex > -1) {
        Object.assign(this.assets[this.editedIndex], this.editedItem)
        this.$http.put('api/assets/' + this.editedItem._id, {
          params: {
            asst_id: this.editedItem.asst_id,
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
            tran_dt: this.editedItem.tran_dt,
            upd_id: 'donggunkim',
            upd_dt: today
          }
        })
      } else {
        this.assets.push(this.editedItem)
        this.$http.post('api/assets', {
          params: {
            asst_id: this.editedItem.asst_id,
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
            tran_dt: this.editedItem.tran_dt,
            ins_id: 'donggunkim',
            ins_dt: today,
            upd_id: 'donggunkim',
            upd_dt: today
          }
        })
      }
      this.assetClose()
    },

    showHistory (item) {
      // eslint-disable-next-line
      console.log(item)
      this.$http.get('api/histories/' + item.asst_no).then((resp) => {
        this.histories = resp.data
        // eslint-disable-next-line
        console.log(resp.data)
      })
      this.historyDialog = true
      // 요기다가 history 데이터 불러오는 로직 추가
    },

    historyClose () {
      this.historyDialog = false
    },
  },
  created () {
    this.initialize()
  }
}
</script>
