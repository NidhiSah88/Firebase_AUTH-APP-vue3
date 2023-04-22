import { createStore } from 'vuex'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {auth} from "./firebaseConfig.js";

const store = createStore({

    state: {
        user: {
          loggedIn: false,
          data: null
        }
      },
// In Vuex, getters generally provide a way of accessing data stored in the state.
// user returns the user object from the state:
      getters: {
        user(state){
          return state.user
        }
      },
/* Mutations allow us to make changes to our state; here, we’ve defined two mutations.
 The first is SET_LOGGED_IN, which sets the loggedIn property on state.user to the 
 value that was passed to it. SET_USER makes changes to the data property on state.user
*/

      mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
        }
      },


      actions: {
        async register(context, { email, password, name}){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
                console.log("response.user", response.user);
                // response.user.updateProfile({displayName: name})
               await updateProfile(response.user, {displayName: name})
            } else {
                throw new Error('Unable to register user')
            }
        },
  
        async logIn(context, { email, password }){
          const response = await signInWithEmailAndPassword(auth, email, password)
          if (response) {
              context.commit('SET_USER', response.user)
          } else {
              throw new Error('login failed')
            }
        },
    
        async logOut(context){
            await signOut(auth)
            context.commit('SET_USER', null)
        },
    
        async fetchUser(context ,user) {
          context.commit("SET_LOGGED_IN", user !== null);
          if (user) {
            context.commit("SET_USER", {
              displayName: user.displayName,
              email: user.email
            });
          } else {
            context.commit("SET_USER", null);
          }
        }
      }
    
})

// export the store
export default store