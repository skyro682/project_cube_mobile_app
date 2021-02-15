import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login, storeToken } from '../API/Cube';
import * as SecureStore from 'expo-secure-store';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            token: '',
            username: '',
            email: '',
            password: '',
        }
    }

    async _login(){
        login(this.state.email, this.state.password)
            .then(data => {
                this.setState({ 
                    token: data.access_token,
                    username: data.user.username,
                })
            })
            .then(storeToken(this.state.token, this.state.username))
            .then(function(){
                SecureStore.getItemAsync("username").then(token => console.log(token));
                this.props.navigation.navigate('Home');
            });          
    }

    render() {
        return(     
            <View style={styles.container}>
                <Text style={styles.title}>Se connecter</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ email: text })} autoCompleteType="email" textContentType="emailAddress" placeholder="Email" />
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ password: text })} autoCompleteType="password" secureTextEntry textContentType="password" placeholder="Password" />
                <View style={{marginVertical: 5}}><Button onPress={() => this._login()} title="Se Connecter" /></View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 5,
    },
    input: {
        borderWidth: 1,
        marginVertical: 5,
        paddingHorizontal: 5,
        borderColor: 'gray',
    }
});

export default Login
