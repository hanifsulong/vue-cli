<template lang="html">
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-header">
        <h1>SIDEBAR</h1>
      </div>
      <div class="sidebar-content">
        <ul>
          <li v-for="(data,index) in sidelist" class="side-li" :class="{ 'active' : data.active}">
            <router-link :to="{ name: data.name, params: {} }">{{data.innerName}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      sidelist : this.$store.state["sidebar"]["sidebarData"],
      currRoute : this.$route.path.replace("/","").trim()
    }
  },
  methods : {
    getCurrRoute(){
      for(var i = 0; i < this.sidelist.length; i++){
        if(this.$route.name == this.sidelist[i].name){
          this.sidelist[i].active = true;
        }
      }
    }
  },
  mounted(){
    this.getCurrRoute();
    var sb = document.querySelectorAll(".side-li");
    for(var i = 0; i < sb.length; i++){
      sb[i].addEventListener('click',function(event){
        document.querySelector(".side-li.active").classList.remove("active");
        this.classList.toggle("active");
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/scss/sidebar/sidebar';
</style>
