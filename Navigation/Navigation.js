import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from '../Components/Home';
import Ressource from '../Components/Ressource';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Post from '../Components/Post';

const HomeStackNavigator = createStackNavigator({
    Home: {screen: Home, navigationOptions:{title: '(Re)sources Relationnelles'}},
    Ressource: {screen: Ressource},
    Post: {screen: Post},
    Login: {screen: Login, navigationOptions:{title: 'Se Connecter'}},
    Register: {screen: Register, navigationOptions:{title: 'S\'enregistrer'}},
})

export default createAppContainer(HomeStackNavigator)