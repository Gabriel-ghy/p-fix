<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/Appointment" style="text-decoration:none">预约维修</router-link></el-menu-item>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="2"><router-link to="/Login" style="text-decoration:none">退出登录</router-link></el-menu-item>
  </el-menu>
  <router-view />
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>