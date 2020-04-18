<template>
  <div class="template-table">
    <div class="filter-container">
      <el-input placeholder="请输入" size="small" style="width: 200px;" v-model="searchForm.test" />
      <el-button @click="searchTable(1)" class="filter-item" size="small">查询</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop='areaName' label='产地-区县' />
<el-table-column prop='checkBy' label='checkBy' />
<el-table-column prop='checkRemark' label='审核备注' />
<el-table-column prop='checkTime' label='checkTime' />
<el-table-column prop='cityName' label='产地-市' />
<el-table-column prop='createTime' label='createTime' />
<el-table-column prop='customerId' label='用户ID' />
<el-table-column prop='productDesc' label='产品简介' />
<el-table-column prop='productName' label='产品名称' />
<el-table-column prop='productPrice' label='进货价' />
<el-table-column prop='provinceName' label='产地-省' />
<el-table-column prop='recordId' label='推荐记录id 自增' />
<el-table-column prop='status' label='审核状态(0审核中 1审核通过 2审核失败)' />
<el-table-column prop='supplierImg1' label='营业执照' />
<el-table-column prop='supplierImg2' label='一般纳税人证明' />
<el-table-column prop='supplierImg3' label='商标注册证' />
<el-table-column prop='supplierImg4' label='开户许可证' />
<el-table-column prop='supplierImg5' label='产品检测报告' />
<el-table-column prop='supplierImg6' label='食品经营许可证' />
<el-table-column prop='supplierImg7' label='食品生产许可证' />
<el-table-column prop='supplierImg8' label='化妆品生产许可证' />
<el-table-column prop='supplierName' label='供应商名称' />
<el-table-column prop='supplierTel' label='供应商电话' />
<el-table-column prop='updateTime' label='updateTime' />

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