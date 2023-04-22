# Firebase_AUTH-APP-vue3

npm install -g @vue/cli
vue create firebase-auth
npm i firebase vue-router@4 vuex@next 


# Setting up a Firebase project
To begin using Firebase, you’ll need a Gmail account. Head over to https://console.firebase.google.com/u/0/ and create a new project:
Under the authentication section for your project, click the sign-in method, and you should see a list of the providers Firebase currently supports:
Next, click the edit icon on the Email/Password provider and switch the Enable toggle on:
Next, you need to register your application under your Firebase project. On the project’s overview page, under Get started by adding Firebase to your app, select the web icon:
Once you’re done registering the application, you’ll be presented with an Add Firebase SDK section containing your application credentials. Take note of the firebaseConfig object, which we’ll use shortly in our Vue application.

# How to integrate Firebase with Vue
Now, we can set up Firebase with our Vue project. In the main.js file, we’ll import the Firebase package and configure it to use the application credentials we noted from the Firebase console earlier. create a file called firebaseConfig.js, then add the application credentials, see files for code

# Adding routing to the project: routes/index.js
# Managing state with Vuex
Vuex is a state management library that provides a centralized store to help manage the components in your Vue application. Create a store.js file in the src directory and add the  code to the file:

First, we define the state that would contain a user object, which contains information about the logged-in user:
In Vuex, getters generally provide a way of accessing data stored in the state. We’ve defined a simple getter called user that returns the user object from the state:
Mutations allow us to make changes to our state; here, we’ve defined two mutations. The first is SET_LOGGED_IN, which sets the loggedIn property on state.user to the value that was passed to it. SET_USER makes changes to the data property on state.user:


Actions are similar to mutations, but instead of mutating the state, they commit mutations.
For an easier flow, we’ll define all the actions for the authentication in the actions, and we’ll then dispatch them in the method.

register action uses the createUserWithEmailAndPassword() method from firebase.auth() by passing in the email and password of the user we’d like to register on Firebase.

We don’t need to hash the password since Firebase takes care of that automatically. If the registration is successful, we call the updateProfile() method on the user object that was returned to associate the name field with the user. Otherwise, we throw an exception for an error, which is then displayed to the user.

The logIn action uses the same logic as the register action (), but with a different method of signInWithEmailAndPassword().

The logout() action uses the signOut() method, which then updates the user state as null. The fetchUser action accepts the user as a parameter to update the state based on its current value.




