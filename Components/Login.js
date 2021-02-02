import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

class Login extends React.Component {
    render() {
        return(     
            <View style={styles.container}>
                <Text style={styles.title}>Se connecter</Text>
                <TextInput style={styles.input} autoCompleteType="email" textContentType="emailAddress" placeholder="Email" />
                <TextInput style={styles.input} autoCompleteType="password" secureTextEntry textContentType="password" placeholder="Password" />
                <View style={{marginVertical: 5}}><Button title="Se Connecter" /></View>
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