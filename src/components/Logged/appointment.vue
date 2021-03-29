<template>
  <!--  <el-empty description="这里是预约界面～"></el-empty>-->
  <br>
  <el-card class="box-card">
    <template #header>
    <div class="card-header">
      <span>请填写你的预约信息哦～</span>
    </div>
      </template>
    <el-form label-position="left" :model="appointmentForm" :rules="rules" label-width="100px" class="demo-ruleForm" ref="appointmentForm">
      <el-form-item label="姓名" prop="name" style="width: auto">
        <el-input v-model="appointmentForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" style="width: auto">
        <el-input v-model="appointmentForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="QQ" style="width: auto">
        <el-input v-model="appointmentForm.QQ"></el-input>
      </el-form-item>
      <el-form-item label="校区" prop="school" >
        <el-select v-model="appointmentForm.school" placeholder="请选择校区" style="width: 100%">
          <el-option label="南湖校区" value="shanghai"></el-option>
          <el-option label="浑南校区" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地点及时间" prop="time" >
        <el-select v-model="appointmentForm.time" placeholder="请选择时间" style="width: 100%">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="&nbsp;&nbsp;电脑型号" prop="model" style="width: auto">
        <el-input v-model="appointmentForm.model" placeholder="不清楚可不填"></el-input>
      </el-form-item>
      <el-form-item label="电脑问题" prop="problem" >
        <el-select v-model="appointmentForm.problem" placeholder="请选择电脑出现的问题" style="width: 100%">
          <el-option label="开不了机" value="shanghai"></el-option>
          <el-option label="清灰" value="beijing"></el-option>
          <el-option label="重装系统" value="beijing"></el-option>
          <el-option label="更换配件" value="beijing"></el-option>
          <el-option label="其他" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="&nbsp;&nbsp;问题描述" prop="problemDescribe" >
      <el-input type="textarea" :rows="2" placeholder="详细的描述有利于我们做好准备哦" v-model="appointmentForm.problemDescribe"></el-input>
      </el-form-item>
      <el-form-item style="float: left">
        <el-button type="primary" @click="submitForm('appointmentForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>

import {ElMessage} from "element-plus";

export default {
  name: "appointment",
  data() {
    return {
      centerDialogVisible:false,
      appointmentForm: {
        name: '',
        time: '',
        phone:'',
        QQ:'',
        school:'',
        model:'',
        problem:'',
        problemDescribe:''
      },
      rules: {
        name: [
          {required: true, message: '请输入您的姓名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        time: [
          {required: true, message: '请选择时间', trigger: 'change'}
        ],
        school: [
          {required: true, message: '请选择校区', trigger: 'change'}
        ],
        problem: [
          {required: true, message: '请选择电脑出现的问题', trigger: 'change'}
        ],
        phone: [
          {required: true, message: '请输入您的电话', trigger: 'blur'},
          {min: 11, max: 11, message: '长度为 11 个字符', trigger: 'blur'}
        ],
        QQ: [
          {required: true, message: '请输入您的QQ', trigger: 'blur'},
          {min: 6, max: 10, message: '长度在 8 到 10 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    submit(){
      console.log(this.appointmentForm);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          ElMessage('请按要求填写信息哦～')
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 90%;
  margin: 0 auto;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>