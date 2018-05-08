<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<style lang='less'></style>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'index',
  components: { HelloWorld },
  mounted () {
    console.log(this.$store.state.master, this.$store.getters.svtList)
  }
}
</script>
