<!--appVue  -->
<template>
  <div>
      <header-vue></header-vue>
      <router-view></router-view>
    <footer-vue></footer-vue>
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
        console.log(res)
    })
}
}

</script>
<style>

</style>