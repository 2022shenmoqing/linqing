<template>
  <div class="homeLeft">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/home/admin">后台首页</router-link>
              </el-menu-item>
              <el-menu-item index="1-2" >
                <router-link to="/home/users">用户管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/home/shopp">商品管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link to="/home/data">数据分析</router-link>
              </el-menu-item>
              <el-menu-item index="1-5">
                <router-link to="/home/list">产品列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-6" disabled>敬请期待</el-menu-item>
              <el-menu-item index="1-7" disabled>敬请期待</el-menu-item>
              <el-menu-item index="1-8" disabled>敬请期待</el-menu-item>
              <el-menu-item index="1-9" disabled>敬请期待</el-menu-item>
              <el-menu-item index="1-10" disabled>敬请期待</el-menu-item>
              <el-menu-item index="1-11" disabled>敬请期待</el-menu-item>
            </el-menu-item-group>
     
        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
 
}
</script>

<style>
  .homeLeft {
    width: 180px;
  }
  .router-link-active {
    text-decoration: none;
    color: #1da1f2;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>