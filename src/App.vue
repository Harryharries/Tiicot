<template>
<el-container>
    <el-header><i class="el-icon-user">Stduent List</i></el-header>
    <el-form :inline="true" :model="student" class="demo-form-inline">
        <el-form-item label="">
            <el-input v-model="student.first" placeholder="FirstName"></el-input>
        </el-form-item>
        <el-form-item label="">
            <el-input v-model="student.last" placeholder="LastName"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit(student.first,student.last)">query</el-button>
        </el-form-item>
    </el-form>
    <el-main>

        <template>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="firstname" label="firstname">
                </el-table-column>
                <el-table-column prop="lastname" label="lastname">
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
            student: {
                first: '',
                last: ''
            },
            tableData: []
        }
    },
    created() {
        this.getAllStudent();
    },
    methods: {
        onSubmit(first, last) {
            var name = first + last;
            this.$http.get(`student/${name}`).then(res => {
              console.log(res.data);
              this.tableData = res.data;
            })
        },
        getAllStudent() {
            this.$http.get(`student/`).then(res => {
                console.log(res.data);
                this.tableData = res.data;
            });

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
