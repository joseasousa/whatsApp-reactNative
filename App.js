import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import { StackNavigator } from 'react-navigation'
import FormLogin from './src/components/FormLogin'
import FormCadastro from './src/components/FormCadastro'
import ReduxThunk from 'redux-thunk'

const Routes = StackNavigator({
  Login: {
    screen: FormLogin
  },
  Cadastro: {
    screen: FormCadastro
  }
})

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
