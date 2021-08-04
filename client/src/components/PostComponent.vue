<template>
  <div class="container">
    <!--Skapa inlägg-->
    <div class="create-post">
       <!--Sökfunktion-->
      <input id="search" v-model="search" placeholder="Sök Elev">
      <h2>Skriv Omdöme</h2>
       <!--Formulär för att skapa inlägg-->
      <form id="form-wrapper"> 
        <input type="text" name="create-name" id="create-name" v-model="namn" placeholder="Namn" required>
        <input type="text" name="create-moment" id="create-moment" v-model="moment" placeholder="Moment" required>
        <select name="omdome" placeholder="Omdöme" id="omdome" v-model="omdome" required>
          <option value="" disabled selected hidden>Omdöme</option>
          <option value="A" selected>A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <input type="submit" value="Spara omdöme" v-on:click="createPost">
      </form>
    </div>

     <h1>Senaste Omdömen</h1>
    <hr>
     <!--Om felmeddelande skapas används följande-->
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
       <!--For-loop som loopar igenom alla inlägg efter post id-->
      <div class="post"
      v-for="(post, index) in filteredList"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      >
       <!--Kollar om inlägget håller på att bli redigerat, om ja, nedan visas-->
      <div v-if="editPost == post._id">
        <div class="editing-div">
          <input v-on:keyup.13="updatePost(post.namn,post.moment,post.omdome,post._id)" v-model="post.namn" />
          <input v-on:keyup.13="updatePost(post.namn,post.moment,post.omdome,post._id)" v-model="post.moment"/>
          <select v-on:keyup.13="updatePost(post.namn,post.moment,post.omdome,post._id)" v-model="post.omdome">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            </select>
        </div>
                <button type="submit" v-on:click="updatePost(post.namn,post.moment,post.omdome,post._id)">Spara</button>
                <button type="reset" v-on:click="cancelEdit()">Avbryt</button>
          </div>
          <div v-else>
        <!--Om ingen redigering sker, visas inläggen som vanligt-->
       <!--Skriver ut datum inläggen skapades-->
      {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}<br>
      <div class="whole-container">
      <div class="text-container">
      <!--Skriver ut innehållet i inlägget under tre rubriker-->  
      <p class="text">Namn<br><br>{{post.namn}}</p>
      <p class="text">Moment<br><br>{{post.moment}}</p>
      <p class="text">Omdöme<br><br>{{post.omdome}}</p>

      </div>
            
      <!--Läger till penna och papperskorg vid varje nytt inlägg för redigering och bortagning-->
      <div class="edit-section">
      <button class="edit" v-on:click="editPost = post._id">&#x270E;</button>
      <button class="delete" @click="$vm2.open('modal-1')">&#x1F5D1;</button>
      </div>
      <!--Importerad modal som frågar användaren ifall de verkligen vill tag på ett inlägg-->
    <modal-vue
      @on-close="$vm2.close('modal-1')"
      name="modal-1"
      :headerOptions="{
        title: 'Vill du radera detta omdöme?',
      }"
      :footerOptions="{
        btn1: 'Avbryt',
        btn2: 'Radera',
        btn2Style: {
          backgroundColor: 'red',
        },
        btn2OnClick: () => {
          deletePost(post._id);
        },
        btn1OnClick: () => {
          $vm2.close('modal-1');
        },
      }"
    >
      Detta går inte att ångra senare!
    </modal-vue>
      
      
      </div>
      
      </div>
    </div>
    </div>
  </div>
  
</template>

<script>
import PostService from '../PostService';
  //Variabler deklareras som sedan används i funtkionerna
export default {
  name: 'PostComponent',
  data(){
    return {
      posts: [],
      error: '',
      namn: '',
      moment: '',
      omdome: '',
      editPost: null,
      search: '',
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
  },
  methods: {
    //Funktion som skapar inlägg
    async createPost(){
      await PostService.insertPost(this.namn,this.moment,this.omdome);
      this.posts = await PostService.getPosts();
    },
    //Funktion som raderar inlägg, tar in id som argument
     async deletePost(id){
      await PostService.deletePost(id);
      this.$vm2.close("modal-1");
      this.posts = await PostService.getPosts();
    },
    //Funktion som uppdaterar ett befintligt inlägg, tar in alla värden som argument
    async updatePost(namn,moment,omdome,id){
      await PostService.updatePost(namn,moment,omdome,id);
      //Efter redigeringen är klar sätts varibeln tillbaka till null
      this.editPost = null;
    },
    //Funktion som stänger av redigering
    async cancelEdit(){
      this.posts = await PostService.getPosts();
      this.editPost = null;
    },
    
  },
  computed: {
    //Funktion som filtrerar inlägg efter namn, lånad från MIUN
    filteredList() {
		return this.posts.filter(post => {
       var self = this;
       return post.namn.toLowerCase().includes(self.search.toLowerCase())
     })
	}
	},
};
</script>
<!-- "Scoped används för att begränsa css till endast denna komponent"-->
<style scoped>
div.container { 
  max-width: 800px; 
  margin: 0 auto; 
  }

p.error { 
  border: 1px solid #ff5b5f; 
  background-color: #ffc5c1; 
  padding: 10px; 
  margin-bottom: 15px; 
  }

div.post { 
  position: relative; 
  border: 1px solid #5bd658; 
  background-color: #bcffb8; 
  padding: 10px 10px 30px 10px; 
  margin-bottom: 15px; 
  }


div.created-at { 
  position: absolute; 
  top: 0; 
  left: 0; 
  padding: 5px 15px 5px 15px; 
  background-color: darkgreen; 
  }

p.text { 
  font-size: 22px; 
  font-weight: 700; 
  margin-bottom: 0; 
  display: inline-block;
  margin: 10px;
  }
  .buttons{
    float: right;
    margin: 10px;
  }
  .delete,.edit{
    margin: 10px;
    height: 42px;
    width: 42px;
  }

   button.delete:hover {
    background-color: red;
    color: white;
    border-radius: 25%;
}

  button.edit:hover {
    background-color: #ffbb3e;
    color: white;
    border-radius: 25%;
}

  .text-container{
   float: left;
    width: 475px;
    margin-left: 150px;
  }
  .whole-container{
    width: 750px;
    margin: 0 auto;
    height: 100px;
  }

  button.delete,button.edit {
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
    margin-top: 45px;
}

input[type=text], select {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 3px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit],button[type=submit]  {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  font-weight: 900;
}

button[type=reset]  {
  background-color: red;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
   font-weight: 900;
}

input[type=submit]:hover {
  background-color: #45a049;
}

form#form-wrapper {
  display: flex;
  clear: both;
  
}

select:invalid{
        color: gray;
        
    }
    option{
        color: black;
    }

#search{
  float: right;
  padding: 12px 20px;
}
   
   input, select{
    width: 19%;
    padding: 12px 20px;
    margin: 8px 3px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

#search{
  margin-right: 0px;
}

.vm2_wrapper{
  z-index: 100;
}

/*Denna del stylar för ipad och mindre skärmar*/
@media only screen and (max-width: 780px){
    .whole-container{
      width: 100%;
      height: 100%;
    }
    
    .text-container,form#form-wrapper{
      width:100%;
      margin-left: 0;
    }

    input,select,input[type=text]{
      width: 90%;
    }

    .editing-div,form#form-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
    width: 44%;
    display: inline-block;
}

#search{
  float: none;
  margin-right: 0px;
}

.edit-section{
  clear: both;
  background-color: #f5cf55;
  height: 50px;
  margin-top: 20px;
  color: white;
 
}

button.delete, button.edit{
  margin: 0;
} 

#logo,img {
    width: 60%;
}
  
}



</style>
