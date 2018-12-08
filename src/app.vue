<!--appVue  -->
<template>
  <div>
      <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
  
    }
  },
created(){
    this.$ajax.get('')
    .then(res => {
    })
    .catch(err=>{
            console.log(err);
        })
},
 mounted() {
    if (this._isMobile()) {
      this.$router.replace('/homeMob');
    } else {
      this.$router.replace('/home');
    }
  },
  methods:{
    //判断是否为手机端，返回flag
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }
}

</script>
<style>

</style>