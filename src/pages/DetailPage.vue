<template>
  <div class="container wrapper-detail-page">
    <div class="detail-page">
      <h2>{{getFullCard($route.params.id).name}}</h2>
      <p>Nick: {{getFullCard($route.params.id).nick}}</p>
      <p>Age: {{getFullCard($route.params.id).age}}</p>
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  
  export default {
    computed: {
      ...mapGetters([
        'getFullCard'
      ])
    },
  }
</script>
<style scoped>
.wrapper-detail-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.detail-page{
    display: block;
    font-size: 1.5rem;
    width: 20%;
    min-width: 180px;
    text-align: center;
    border: 1px solid black;
    margin:50px 20px;
    padding: 40px;
}
.container a{
  text-transform: uppercase;
  padding: 8px;
  width: 20%;
  text-align: center;
  border: 1px solid rgb(48, 174, 224);
  background-color: rgb(48, 174, 224);
  text-decoration: none;
  color: black;
}
.container a:hover{
  background-color: #fff;
}

</style>

