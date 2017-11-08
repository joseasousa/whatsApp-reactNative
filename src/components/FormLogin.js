import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
  Image } from 'react-native'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha } from '../actions'

const formLogin = props => {
  return (
    <Image style={styles.image} source={require('../imgs/bg.png')}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.texTitle}>WhatsApp Clone</Text>
        </View>

        <View style={{ flex: 2}}>
          <TextInput value={props.email}
            style={styles.imput}
            placeholder='E-mail'
            placeholderTextColor='#fff'
            onChangeText={texto => props.modificaEmail(texto)} />
          <TextInput
            secureTextEntry
            value={props.senha}
            style={styles.imput}
            placeholder='Senha'
            placeholderTextColor='#fff'
            onChangeText={texto => props.modificaSenha(texto)} />
          <TouchableHighlight
            onPress={() => props.navigation.navigate('Cadastro')}>
            <Text style={styles.text}>
            Ainda não tem cadastro? Cadastre-se
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.button}>
          <Button title='Acessar'
            color='#115E54'
            onPress={() => false} />
        </View>
      </View>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
  imput: {
    fontSize: 20,
    height: 45
  },
  image: {
    flex: 1,
    width: null
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texTitle: { fontSize: 25, color: '#fff' },
  button: {
    flex: 2
  }
})
const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modificaEmail: () => {
      dispatch(modificaEmail())
    },
    modificaSenha: () => {
      dispatch(modificaSenha())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(formLogin)
