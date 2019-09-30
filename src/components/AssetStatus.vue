<template>
  <v-data-table
    :headers="headers"
    :items="assets"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  data () {
    return {
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
          text: '이관이력',
          align: 'center',
          sortable: true,
          value: 'tran_seq',
        },
        {
          text: '비고',
          align: 'center',
          sortable: true,
          value: 'rmk_desc',
        }
      ],
      assets: []
    }
  },
  created () {
    this.$http.get('api/assets').then((resp) => {
      // eslint-disable-next-line
      console.log(resp)
      this.assets = resp.data
    })
  }
}
</script>
