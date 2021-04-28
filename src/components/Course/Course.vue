<template>

</template>

<script>
import {courseList} from '@/api/api'
import CourseInfo from '@/components/CourseInfo/CourseInfo'
export default {
  name: 'Course',
  data () {
    return {
      query: {
        keyword: ''
      },
      pagination: {
        limit: 10,
        page: 1,
        sum: 0
      },
      loading: false,
      tableList: [],
      showDialog: false,
      id: '',
      state: 0 // 0新增，1修改
    }
  },
  methods: {
    getList () {
      this.loading = true
      this.$axios.get(courseList, { params: {
        keyword: this.query.keyword,
        page: this.pagination.page,
        limit: this.pagination.limit
      }}).then(res => {
        if (res.data.list) {
          this.pagination.sum = res.data.sum
          this.tableList = res.data.list
        }
      }).catch(error => {
        this.$message.error('获取微课列表错误' + error)
      })
      this.loading = false
    },
    handleSizeChange (limit) {
      this.pagination.limit = limit
      this.getList(this.pagination.page)
    },
    getInfo (row) {
      if (row) {
        this.state = 1
        this.id = row.id
      } else {
        this.state = 0
      }
      this.showDialog = true
    },
    close () {
      this.showDialog = false
    }
  },
  activated () {
    this.getList()
  },
  components: {
    CourseInfo
  }
}
</script>

<style>
  @import url('../../assets/css/main.css');
</style>
