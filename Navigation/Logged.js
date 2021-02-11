import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeLogged from '../Components/HomeLogged';
import Ressource from '../Components/Ressource';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Post from '../Components/Post';

const LoggedStackNavigator = createStackNavigator({
    Home: {screen: HomeLogged, navigationOptions:{title: '(Re)sources Relationnelles'}},
})

export default createAppContainer(LoggedStackNavigator)