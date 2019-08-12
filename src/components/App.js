import React from "react"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import ReduxThunk from "redux-thunk"
import firebase from "firebase"

import reducers from "../reducers"
import { Router } from "react-native-router-flux";


class App extends React.Component {

   componentDidMount(){
      const config = {
         apiKey: "AIzaSyAdbVCkOiH-bS7MiRXomG5XtL0uId83uM8",
         authDomain: "grocery-share-98a9c.firebaseapp.com",
         databaseURL: "https://grocery-share-98a9c.firebaseio.com",
         projectId: "grocery-share-98a9c",
         storageBucket: "",
         messagingSenderId: "181627957185",
         appId: "1:181627957185:web:270e66acfad7ad52"
      }

      firebase.initializeApp(config)
   }

   render(){

      return(
         <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
            <Router/>
         </Provider>
   )
   }
}

export default App