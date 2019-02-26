<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'fetchData'
      ]),
    },
    created(){
      this.fetchData();
    },
  }
</script>

<style scoped>
  .container{
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .container select{
    position: absolute;
    top: 20px;
    left:30px;
  }
</style>
