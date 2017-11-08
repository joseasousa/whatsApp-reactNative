import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'
import Routes from './src/Routes'

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
)

export default class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyA1hWfIz6W6WwdmoMRglcafhYZ4liV-JGo',
      authDomain: 'react-a7412.firebaseapp.com',
      databaseURL: 'https://react-a7412.firebaseio.com',
      projectId: 'react-a7412',
      storageBucket: 'react-a7412.appspot.com',
      messagingSenderId: '527913862234'
    }
    console.ignoredYellowBox = [
      'Setting a timer'
    ]
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    )
  }
}
