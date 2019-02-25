<template>
  <div class="row">
      <p>Name: {{ name }}</p> 
       <p>Nick:{{ nick }}</p>
        <p>Age: {{ age }}</p>
    </div>
</template>

<script>
export default {
 props: ['name', 'nick', 'age'],
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
</style>
