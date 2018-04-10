<template>
  <div class="hello">
    <!-- <topHeader></topHeader> -->
    <component v-for="(comp,index) in comp" :is="comp" :key="index"></component>
    <!-- <sidebar></sidebar> -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

export default {
  name: 'HelloWorld',
  components : {
    topHeader : Header,
    sidebar : Sidebar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      comp : ['topHeader','sidebar']
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~styles/scss/content/content';
</style>
