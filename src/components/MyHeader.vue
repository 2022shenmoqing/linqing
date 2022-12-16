<template>
      <div class="homeHeader">
       <div class="txt">{{name}}</div>
        <div class="container">
          <el-button @click="logout" type="info">退出登录</el-button>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      name: '墨卿管理系统'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.homeHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  color: #1da1f2;
  font-size: 30px;
  font-weight: 700;
}
</style>