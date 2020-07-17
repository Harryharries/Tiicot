<template>
<el-container>
    <el-header><i class="el-icon-user">Stduent List</i></el-header>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
            <el-input v-model="formInline.user" placeholder="FirstName"></el-input>
        </el-form-item>
        <el-form-item label="">
            <el-input v-model="formInline.user" placeholder="LastName"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">query</el-button>
        </el-form-item>
    </el-form>
    <el-main>

      <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="firstname"
        label="firstname">
      </el-table-column>
      <el-table-column
        prop="lastname"
        label="lastname">
      </el-table-column>
      <el-table-column
        prop="status"
        label="status">
      </el-table-column>
    </el-table>
  </template>
</el-main>
</el-container>

</template>

<script>
export default {
      data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
          tableData: [{
            firstname: 'harry',
            lastname: 'gu',
            status: 'student'
          }, {
            firstname: 'willson',
            lastname: 'yu',
            status: 'student'
          }, {
            firstname: 'jack',
            lastname: 'david',
            status: 'student'
          }, {
            firstname: 'tife',
            lastname: 'amber',
            status: 'student'
          }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },

}
</script>

<style>
body {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
