<template>
 
  <div class="row">
    <router-link :to="`${cardData._id}`">
      <p>Name: {{ cardData.name }}</p>
      <p>Nick:{{ cardData.nick }}</p>
      <p>Age: {{ cardData.age }}</p>
    </router-link>
  </div>
 
</template>

<script>
  export default {
    name: 'card',
    props: {
      cardData: {
        _id: String,
        name:  String,
        nick: String,
        age: Number
      }
    }
  }
</script>
<style scoped>
  .row{
    margin: 50px 20px;
    border: 1px solid black;
    padding:20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.2rem;
    text-align: center;
    width: 25%;
  }
  .row a{
    text-decoration: none;
    color: black;
  }
</style>
