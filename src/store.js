import {createStore} from 'vuex'

const store=createStore({
    state(data){
        return{
            name:'kim',
            age:20,
            liked:false,
            likes:data
        }
    },

    mutations:{
        changeName(state){
            state.name="park"
        },
        changeAge(state){
            state.age++
        },
        changeLiked(state,data){
            this.state.liked=(!this.state.liked)
            console.log(this.state.liked)
            if(state.liked===true){
                
                state.likes=data++;

                }else{
                state.likes=data--;
            }
          }
    }
});

export default store; 
