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
        'GET_DATA'
      ]),
    },
    created(){
    this.GET_DATA();
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
