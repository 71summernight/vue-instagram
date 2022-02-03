import {createStore} from 'vuex'

const store=createStore({
    state(){
        return{
            name:'kim',
            age:20,
            likes:0,
        }
    },

    mutations:{
        changeName(state){
            state.name="park"
        },
        changeAge(state){
            state.age++
        },
        likes(state){
            state.likes++
        }
    }
})

export default store; 
