<template>
  <div class="template-table">
    <div class="filter-container">
      <el-input placeholder="请输入" size="small" style="width: 200px;" v-model="searchForm.test" />
      <el-button @click="searchTable(1)" class="filter-item" size="small">查询</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      tableColumns
      <el-table-column align="center" fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" size="small" type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-size="everyPage"
      :total="totalRecords"
      @current-change="searchTable"
      layout="total, prev, pager, next"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      searchForm: {
        test: ''
      },
      tableData: [],
      currentPage: 1,
      everyPage: 10,
      totalRecords: 0
    }
  },
  created() {
    this.searchTable(this.currentPage)
  },
  methods: {
    // 查询列表
    searchTable(currentPage) {
      // this.currentPage = currentPage
      // API.newhome.imageTypeList({currentPage, everyPage: this.everyPage, ...this.searchForm}).then(res => {
      //   this.tableData = res.rows
      //   this.totalRecords = res.page.totalRecords
      // })
    },
    // 每页几条
    handleSizeChange(val) {
      this.everyPage = val
      this.searchTable(1)
    },
    edit() {}
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
</style>