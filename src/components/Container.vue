<template>
<div>
  <Post  v-for="(a,i) in postdata" :key="i" :postdata="postdata[i]" />
</div>    
</template>


<script>
import Post from './Post.vue'
export default {
  components:{
      Post
  },
  props:{
      postdata:Array
  }
}
</script>
