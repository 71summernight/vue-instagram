import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      liked: false,
      likes: 30,
      seemore: {},
    };
  },

  mutations: {
    setMore(state, data) {
      state.seemore = data;
    },
    changeName(state) {
      state.name = "park";
    },
    changeAge(state, data) {
      state.age = state.age + data;
    },
    changeLiked(state) {
      state.liked = !state.liked;
      if (state.liked === true) {
        state.likes++;
      } else {
        state.likes--;
      }
    },
  },

  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
