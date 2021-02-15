import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createAccount } from '../API/Cube';

class Register extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            pseudo: '',
            email: '',
            password: '',
            password_confirm: '',
        }
    }

    _register() {
        createAccount(
            this.state.email, 
            this.state.password, 
            this.state.password_confirm,
            this.state.first_name,
            this.state.last_name,
            this.state.pseudo,
        ).then((data) => console.log(data));
    }

    render() {
        return(     
            <View style={styles.container}>
                <Text style={styles.title}>S'enregister</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ first_name: text })} autoCompleteType="name" textContentType="none" placeholder="Prénom" />
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ last_name: text })} autoCompleteType="name" textContentType="none" placeholder="Nom" />
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ pseudo: text })} autoCompleteType="username" textContentType="none" placeholder="Pseudo" />
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ email: text })} autoCompleteType="email" textContentType="emailAddress" placeholder="Email" />
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ password: text })} autoCompleteType="password" secureTextEntry textContentType="password" placeholder="Password" />
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ password_confirm: text })} autoCompleteType="password" secureTextEntry textContentType="password" placeholder="Verification Password" />
                <View style={{marginVertical: 5}}><Button onPress={ () => this._register() } title="Crée un compte" /></View>
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

export default Register