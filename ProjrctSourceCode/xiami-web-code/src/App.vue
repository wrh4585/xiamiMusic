<template>
  <div id="app">
    <router-view></router-view>
    <div class="load" v-if="n">
      <img src="../static/img/beforeIn.jpg" alt="" class="loadimg">
    </div>
  </div>
</template>

<script>
  import{mapGetters} from "vuex"
export default {
  name: 'App',
  computed:mapGetters({
    n:"getload"
  }),
  beforeCreate(){
    this.$store.dispatch("setload",true)
    setTimeout(()=>{
      this.$store.dispatch("setload",false)
    },3000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
  width: 100%;
}
.load{
  width:100%;
  height: 100%;
  position:fixed;
  left:0;
  top:0;
  z-index:4;
}
.loadimg{
  width:100%;
  height: 100%;
}

</style>
