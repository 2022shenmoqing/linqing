<template>
   <div class="homePage">
      <Header></Header>
      <div class="bodyBox">
        <Left></Left>
        <div class="rightBox">
          <router-view></router-view>
        </div>
      </div>
   </div>
</template>

<script>
import  Header  from '../components/MyHeader.vue'
import Left from '../components/MyLeft.vue'
export default {
  components: { Header, Left }
}
</script>

<style scoped lang="css">
  .homePage {
    padding: 0;
    margin: 0;
  }
  .bodyBox {
    height: 100%;
    display: flex;
  }
  .rightBox {
    padding: 10px;
    flex: 1;
  }
</style>