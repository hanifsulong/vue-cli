<template>
  <div>
    <h1>{{msg | uppercase | short}}</h1>
    Username : <input type="text" name="" v-model="uname">
    Password : <input type="password" name="" v-model="pass">
    <button type="button" name="button" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      uname : '',
      pass : '',
    }
  },
  methods : {
    login(){
      if(this.uname == "hanif" && this.pass == "12345"){
        this.$router.push('/Table');
      }else{
        // console.log(this.$toasted);
        // const content = "<div>Login Failed</div><div>Please login again</div>";
        this.$toasted.show('Login Failed',{
          type : 'error',
          theme : 'primary',
          position : 'bottom-right',
          duration : 3000
          // fullWidth : 'true'
        });
      }
    }
  },
  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    },
    short: function(value) {
      return value.slice(0, 10) + '....';
    }
  },
  mounted(){
    // console.log(this.$);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
