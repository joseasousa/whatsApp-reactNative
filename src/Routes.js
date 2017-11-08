import { StackNavigator } from 'react-navigation'
import FormLogin from './components/FormLogin'
import FormCadastro from './components/FormCadastro'

const Routes = StackNavigator({
  Login: {
    screen: FormLogin
  },
  Cadastro: {
    screen: FormCadastro
  }
})

export default Routes
