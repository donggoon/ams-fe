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
          value: 'id',
        },
        {
          text: '자산번호',
          align: 'center',
          sortable: true,
          value: 'number',
        },
        {
          text: '자산종류',
          align: 'center',
          sortable: true,
          value: 'type',
        },
        {
          text: '구분',
          align: 'center',
          sortable: true,
          value: 'class',
        },
        {
          text: '자산명',
          align: 'center',
          sortable: true,
          value: 'name',
        },
        {
          text: '제조사',
          align: 'center',
          sortable: true,
          value: 'manufacturer',
        },
        {
          text: '사용여부',
          align: 'center',
          sortable: true,
          value: 'use',
        },
        {
          text: '상태',
          align: 'center',
          sortable: true,
          value: 'condition',
        },
        {
          text: '사용자',
          align: 'center',
          sortable: true,
          value: 'user',
        },
        {
          text: '부서',
          align: 'center',
          sortable: true,
          value: 'department',
        },
        {
          text: '자산위치명',
          align: 'center',
          sortable: true,
          value: 'location',
        },
        {
          text: '도입일',
          align: 'center',
          sortable: true,
          value: 'introdate',
        },
        {
          text: '비고',
          align: 'center',
          sortable: true,
          value: 'remarks',
        }
      ],
      assets: [
        {
          id:	'',
          number: '1604284',
          type: '노트북',
          class: '노트북',
          name: '15Z960-M',
          manufacturer: 'LG전자',
          use: '사용',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: '신규등록(신입)'
        },
        {
          id: '10559',
          number: '1602917',
          type: '모니터',
          class: '모니터',
          name: 'LC24F392FHKXKR',
          manufacturer: '삼성전자',
          use: '사용',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: ''
        },
        {
          id: '11296',
          number: '1603360',
          type: '모니터',
          class: '콘솔모니터',
          name: 'LS24F354FHKXKR',
          manufacturer: '삼성전자',
          use: '사용',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '43054',
          remarks: ''
        },
        {
          id: '11447',
          number: '1603303',
          type: '콘솔',
          class: '콘솔Case',
          name: 'Bicube-2x Case KVM내장형',
          manufacturer: '에이쓰리시큐리티',
          use: '사용',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '43087',
          remarks: ''
        },
        {
          id: '11382',
          number: '1603325',
          type: '콘솔',
          class: '콘솔PC ',
          name: 'Bicube-i6500',
          manufacturer: '에이쓰리시큐리티',
          use: '사용',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '43087',
          remarks: ''
        },
        {
          id: '',
          number: '1604513',
          type: '콘솔',
          class: '콘솔PC ',
          name: 'Bicube-i6500',
          manufacturer: '에이쓰리시큐리티',
          use: '사용',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: '2018-08-24 추가'
        },
        {
          id: '10439',
          number: '1602772',
          type: '모니터',
          class: '모니터',
          name: 'LS22E45KFSA/KR',
          manufacturer: '삼성전자',
          use: '여유',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: ''
        },
        {
          id: '',
          number: '1604341',
          type: '모니터',
          class: '모니터',
          name: 'LS24F354FHKXKR',
          manufacturer: '삼성전자',
          use: '여유',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '기타(지방)',
          introdate: '43539',
          remarks: ''
        },
        {
          id: '11426',
          number: '1603297',
          type: '콘솔',
          class: '콘솔Case',
          name: 'Bicube-2x Case KVM내장형',
          manufacturer: '에이쓰리시큐리티',
          use: '여유',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: ''
        },
        {
          id: '11427',
          number: '1603298',
          type: '콘솔',
          class: '콘솔PC ',
          name: 'Bicube-i6500',
          manufacturer: '에이쓰리시큐리티',
          use: '여유',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: ''
        },
        {
          id: '11440',
          number: '1603442',
          type: '콘솔',
          class: '콘솔Case',
          name: 'Bicube-2x Case KVM내장형',
          manufacturer: '에이쓰리시큐리티',
          use: '여유',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: ''
        },
        {
          id: '11436',
          number: '1603454',
          type: '콘솔',
          class: '콘솔PC ',
          name: 'Bicube-i6500',
          manufacturer: '에이쓰리시큐리티',
          use: '여유',
          condition: '정상',
          user: '김동건',
          department: '방2',
          location: '본사(서울)',
          introdate: '',
          remarks: ''
        }
      ],
    }
  },
}
</script>
