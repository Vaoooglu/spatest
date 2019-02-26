<template>
  <div class="row">
      <p>Name: {{ cardData.name }}</p>
      <p>Nick: {{ cardData.nick }}</p>
      <p>Age: {{ cardData.age }}</p>
      <router-link :to="`${cardData._id}`">Details</router-link>
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
    min-width: 180px;
    min-height: 180px;
  }
  .row a{
  padding: 8px;
  width: 20%;
  text-align: center;
  border: 1px solid rgb(48, 174, 224);
  background-color: rgb(48, 174, 224);
  text-decoration: none;
  color: black;
}
.row a:hover{
  background-color: #fff;
}
</style>
