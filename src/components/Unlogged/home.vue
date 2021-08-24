<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="2"><router-link to="/Home" style="text-decoration:none">主页</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/Appointment" style="text-decoration:none">预约维修</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/" style="text-decoration:none">管理登录</router-link></el-menu-item>

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
