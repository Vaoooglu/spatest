<template>
  <div class="container">
       <select>
            <option selected="selected">Sort</option>
           <option @click="sortParam='name'">by Name</option>
           <option @click="sortParam='nick'">by Nick</option>
           <option @click="sortParam='age'">by Age</option>
        </select>
      <main-page v-for="(item, index) in  base"
							   :name="item.name"
							   :nick="item.nick"
							   :age="item.age"
							   :key="index"
							   >
      </main-page>

    </div>
</template>

<script>
import MainPage from './components/Mainpage';

	export default {
		data(){
			return {
        sortParam: '',
				base: [
  {
    "_id": "5c74144efc2e28554cd69b55",
    "name": "Watts",
    "nick": "Newman",
    "age": 19
  },
  {
    "_id": "5c74144e7f4b4715c93f0a16",
    "name": "Kerri",
    "nick": "Reed",
    "age": 26
  },
  {
    "_id": "5c74144eac409c45c2c2fdbb",
    "name": "Rachael",
    "nick": "Day",
    "age": 30
  },
  {
    "_id": "5c74144eb67be75c1dc0ab23",
    "name": "Georgette",
    "nick": "Lang",
    "age": 29
  },
  {
    "_id": "5c74144e3e1ed02b8d3de7eb",
    "name": "Daniels",
    "nick": "Jenkins",
    "age": 29
  },
  {
    "_id": "5c74144ea21698d9a40c3c84",
    "name": "Long",
    "nick": "Cervantes",
    "age": 29
  },
  {
    "_id": "5c74144eda4fd55a60234877",
    "name": "Wendi",
    "nick": "Floyd",
    "age": 28
  },
  {
    "_id": "5c74144eb1c5600a56a6b87f",
    "name": "Romero",
    "nick": "Bruce",
    "age": 29
  },
  {
    "_id": "5c74144e4f29d1e633f06cab",
    "name": "Murray",
    "nick": "Serrano",
    "age": 21
  },
  {
    "_id": "5c74144e8a350ae162dff464",
    "name": "Janis",
    "nick": "Fulton",
    "age": 25
  },
  {
    "_id": "5c74144e61bee3752e975ce0",
    "name": "Carlene",
    "nick": "Manning",
    "age": 26
  },
  {
    "_id": "5c74144ec7530b01e715c0dd",
    "name": "Irma",
    "nick": "Boyer",
    "age": 21
  },
  {
    "_id": "5c74144e7dc166be93a0416c",
    "name": "Loraine",
    "nick": "Velazquez",
    "age": 23
  },
  {
    "_id": "5c74144e6ceed9ac8fbfd96a",
    "name": "Bowers",
    "nick": "Lester",
    "age": 37
  },
  {
    "_id": "5c74144e993a58b713350c12",
    "name": "Nixon",
    "nick": "Harrison",
    "age": 30
  },
  {
    "_id": "5c74144e7fad30d8f954d721",
    "name": "Michelle",
    "nick": "Hardin",
    "age": 26
  },
  {
    "_id": "5c74144ed8af0fc118c8c5ff",
    "name": "Greer",
    "nick": "Lara",
    "age": 28
  }
],
				
			}
		},
		created(){
		
		},
		methods: {
	
		},
		computed: {
            ...mapGetters([

            ]),
            sortedList () {
                switch(this.sortParam){
                    case 'name': return this.base.sort(sortByName);
                    case 'nick': return this.base.sort(sortByNick);
                    case 'age': return this.base.sort(sortByAge);
                    default: return this.base;
                }
               sortByName = function (d1, d2) {return (d1.name > d2.name) ? 1 : -1;};
               sortByNick = function (d1, d2) { return (d1.nick > d2.nick) ? 1 : -1; };
               sortByAge = function (d1, d2) { return (d1.age > d2.age) ? 1 : -1; }
             }
		},
		components: {
			MainPage
		}
	}
</script>

<style scoped>
.container{
  margin: 20px auto;
  display: flex;
  flex-direction: raw;
  flex-wrap: wrap;
  justify-content: space-around;
}
.container select{
  position: absolute;
  top: 20px;
  left:30px;
}
</style>
