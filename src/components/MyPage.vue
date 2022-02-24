<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="찾기" @input="search($event.target.value)" />
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`">
    </div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from 'vue'
import axios from "axios";
import {useStore} from 'vuex'

export default {
  name:'mypage',
  props:{
       one:Number
   },
  setup(props){
    let follower =ref([]);
    let followerOriginal=ref([])
    function search(event){
    let newFollower = followerOriginal.value.filter((a)=>{
            return a.name.indexOf(event) != -1
        });
        follower.value=[...newFollower]
    }
    let { one } = toRefs(props);
    console.log(one.value);

    let result= computed(()=>{
            return follower.value.length
        })
    console.log(result.value)
    
 let store=useStore();
    console.log(store.state.name)
    onMounted(()=>{
        axios('/follower.json').then((a)=>{
        follower.value=a.data
        followerOriginal.value = [...a.data];

        })
    })
    return {follower,search}
  },
}
</script>
