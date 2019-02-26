<template>
  <div class="container">
    <div class="sort">
      <select @input="changeSortParam($event.target.value)">
        <option value='name'>by Name</option>
        <option value='nick'>by Nick</option>
        <option value='age'>by Age</option>
      </select>
    </div>
    <Card v-for="(item) in  sortedList"
               :card-data="item"
               :key="item.id"
    >
    </Card>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Card from '../components/Card';

  export default {
    components: {
      Card
    },
    computed: {
      ...mapGetters([
        'sortedList'
      ]),
    },
    methods: {
      ...mapActions([
        'changeSortParam',
      ]),
    }
  }
</script>

<style scoped>
  .container{
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .sort{
    position: absolute;
  }
</style>
