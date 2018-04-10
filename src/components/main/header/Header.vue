<template lang="html">
  <header>
    <div class="header-left">
      <span>{{user.name +" - "+ user.email}}</span>
    </div>
    <div class="header-right">
      <span>{{datetime}}</span>
    </div>
  </header>
</template>

<script>
import moment from 'moment'

export default {
  data(){
    return {
      datetime : moment().format('Do MMMM YYYY LTS'),
      interval : '',
      user : this.$store.state["data"]["activeUser"][0]
    }
  },
  methods : {
    getTime(){
      const self = this;
      this.interval = setInterval(function(){
        self.datetime = moment().format('Do MMMM YYYY LTS');
      },1000)
    }
  },
  mounted(){
    this.getTime();
    // console.log();
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/scss/header/header';

</style>
