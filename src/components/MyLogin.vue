<template>
  <div class="bg">
    <div class="container">
      <div class="logo">
        <img src="../../public/n4.png" alt="my baby">
      </div>
      <div class="title">沈墨卿欢迎您🥳</div>
      <div class="login">
        <label>Account</label>
        <input type="text" id="test" placeholder="请输入您的账号" v-model.trim="username">
        <label>PassWord</label>
        <input type="password" id="password" placeholder="请您的输入密码" v-model.trim="password">
        <button type="submit" id="ok" @click="login">登录</button>
        <button id="ok" @click="reset">重置</button>
      </div>
      <div class="line">
        <a href="#">忘记密码</a>
        <span id="dot">.</span>
        <a href="#">注册账号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset() {
      this.username = ''
      this.password = ''
    },
    login() {
      if (this.username === 'admin' && this.password === '123456') {
        localStorage.setItem('token', 'Bearer xxx')
        this.$router.push('/home')
      } else if (this.username == '') {
        alert('请输入您的账号')
      } else if (this.password == '') {
        alert('请输入你的密码')
      } else {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="css" scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);

}
.container {
  width: 350px;
  height: 580px;
  background-color: #ecf0f3;
  border-radius: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.logo {
  width: 100px;
  height: 100px;
  background-size: 160px;
  background-position: -30px;
  margin: auto;
  margin-top: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
}
.logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.title {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.6rem;
  color: #1da1f2;
  letter-spacing: 1px;
  text-align: center;
}
.login {
  text-align: left;
  margin: 0 30px;
  margin-top: 30px;
}
label,input,button {
  display: block;
  width: 100%;
  padding: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
}
label {
  margin-bottom: 4px;
  font-size: 16px;
}
label:nth-of-type(2) {
  margin-top: 14px;
}
input {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  font-size: 14px;
  border-radius: 50px;
  height: 50px;
  box-shadow: inset 6px 6px 6px #cbced1,inset -6px -6px 6px white;
}
input::placeholder {
  color: gray;
}
button {
  margin-top: 20px;
  background-color: #1da1f2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-family: sans-serif;
  letter-spacing: 1px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
button:hover {
  box-shadow: none;
}
.line {
  color: #1da1f2;
  font-size: 13px;
  letter-spacing: 0.2px;
  margin-top: 15px;
  text-align: center;
}
#dot {
  vertical-align: super;
  font-weight: 600;
}
</style>