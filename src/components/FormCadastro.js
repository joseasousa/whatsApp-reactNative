import React, { Component } from 'react'
import {
  View,
  TextInput,
  Button,
  Image } from 'react-native'
import { connect } from 'react-redux'
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../actions'

class formCadastro extends Component {
  _cadastraUsuario () {
    const { nome, email, senha } = this.props

    this.props.cadastraUsuario({ nome, email, senha })
  }

  render () {
    return (
      <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              value={this.props.nome}
              placeholder='Nome'
              placeholderTextColor='#fff'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaNome(texto)}
                        />
            <TextInput
              value={this.props.email}
              placeholder='E-mail'
              placeholderTextColor='#fff'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaEmail(texto)}
                        />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              placeholder='Senha'
              placeholderTextColor='#fff'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaSenha(texto)}
                        />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title='Cadastrar'
              color='#115E54'
              onPress={() => this._cadastraUsuario()}
                        />
          </View>
        </View>
      </Image>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)

  return (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
  )
}

const mapDispatchToProps = dispatch => {
  return {
    modificaEmail: () => {
      dispatch(modificaEmail())
    },
    modificaSenha: () => {
      dispatch(modificaSenha())
    },
    modificaNome: () => {
      dispatch(modificaNome())
    },
    cadastraUsuario: () => {
      dispatch(cadastraUsuario())
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(formCadastro)
