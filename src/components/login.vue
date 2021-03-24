<template>
  <br>
  <el-card class="box-card" >
    <el-form ref="form">
      <el-form-item label="用户名">
        <el-input v-model="LoginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="LoginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item center>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {mapMutations} from 'vuex';
import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from "@/store/main";

export default {
  data() {
    return {
      LoginForm: {
        username: '',
        password: ''
      }
    };
  },

  methods: {
    ...mapMutations(['setToken']),
    login() {
      console.log(this.LoginForm);
      if (this.LoginForm.username === '' || this.LoginForm.password === '') {
        ElMessage('用户名或密码为空！');
      }
      else if (store.state.token)
      {
        ElMessage('您已登录！')
        this.$router.replace('/')
      }
      else {
        axios.post('/api/Login', {"username":this.LoginForm.username,"password":this.LoginForm.password}).then(res => {
          console.log(res.data);
          if(res.data.code===1)
          {
            this.setToken({token: res.data.token});    //store中的为token赋值方法
            this.$router.push('/');
          }
          ElMessage('登录成功！')
          this.$router.replace('/')
        }).catch(error => {
          ElMessage('账号或密码错误！')
          console.log(error);
        });
      }
    }
  }
};
</script>

<style>
.box-card {
  width: 80%;
  margin:0 auto;
}
.button{
  margin:0 auto;
}
</style>