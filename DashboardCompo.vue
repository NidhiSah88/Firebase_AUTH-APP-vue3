<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <h2> Welcome, from dashboard</h2>

          <div v-if="user.loggedIn">
            <div class="card-header">Welcome, {{user.data.displayName}}</div>
            <div class="card-body">
              <div class="alert alert-success" role="alert">
              You are logged in!
              <div class="my-4">
                    <button  @click.prevent="signOut" class="btn btn-primary">Log Out</button>
              </div>
              </div>
            </div>
          </div>
          
          <div v-else class="alert alert-danger col-md-6 mt-5 offset-md-3" role="alert">
            You are not logged in! 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useStore} from "vuex";
import { inject } from 'vue';
import { useRouter } from "vue-router";
import {computed} from "vue";
import { auth } from '../firebaseConfig'


export default {
  name: "DashboardComponent",

  setup() {

  // const store = useStore();
  const store = inject('store');

  const router = useRouter()

  auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

  const user = computed(() => {
    return store.getters.user;
  });

  const signOut = async () => {
        await store.dispatch('logOut')
        router.push('/')
  }

    return {user,signOut}
 }



};
</script>
