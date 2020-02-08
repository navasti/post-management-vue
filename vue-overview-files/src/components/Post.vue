<template>
  <div class="container">
    <div class="create-post">
      <label for="create-post">Create new post</label>
      <input type="text" id="create-post" v-model="text" placeholder="type here..">
      <button @click="createPost">confirm</button>
    </div>
    <h1>Latest Posts</h1>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
      <div class="post"
      v-for="(post, index) in posts"
      :item="post"
      :index="index"
      :key="post._id"
      >
        <span>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</span>
        <p class="text">{{post.text}}</p>
        <button @click="deletePost(post._id)" class="delete">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '../PostService';

export default {
  name: 'Post',
  data(){
    return{
      posts: [],
      error: '',
      text: '',
    }
  },
  async created(){
    try{
      this.posts = await Post.getPosts();
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async createPost(){
      await Post.insertPost(this.text);
      this.posts = await Post.getPosts();
    },
    async deletePost(id){
      await Post.deletePost(id);
      this.posts = await Post.getPosts();
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{font-size: 10px;}
body{
  background-color: #eee;
  font-family: arial, 'sans-serif';
}
h1{
  letter-spacing: 2px;
  font-size: 4.6rem;
  margin: 2rem 0;
}
.container{
  width: 40%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
}
.create-post{
  display: flex;
  flex-direction: column;
  width: 35%;
  align-self: flex-end;
}
label{
  font-size: 2rem;
}
input{
  font-size: 1.8rem;
  padding: .5rem 1rem;
  margin: .5rem 0;
}
button{
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding: .5rem 0;
  text-transform: uppercase;
}
.post{
  margin: 1rem 0;
  border: 1px solid #bbb;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
}
span{
  padding-top: .7rem;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-style: italic;
}
.text{
  margin: 2rem 0 .5rem 0;
  font-size: 2.2rem;
  padding-left: 1rem;
}
.delete{
  font-size: 1.4rem;
  text-transform: none;
  font-style: italic;
  align-self: flex-end;
  border: none;
  cursor: pointer;
  padding: .5rem;
}
</style>
