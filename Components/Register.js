import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

class Register extends React.Component {
    render() {
        return(     
            <View style={styles.container}>
                <Text style={styles.title}>S'enregister</Text>
                <TextInput style={styles.input} autoCompleteType="name" textContentType="none" placeholder="Prénom" />
                <TextInput style={styles.input} autoCompleteType="name" textContentType="none" placeholder="Nom" />
                <TextInput style={styles.input} autoCompleteType="username" textContentType="none" placeholder="Pseudo" />
                <TextInput style={styles.input} autoCompleteType="email" textContentType="emailAddress" placeholder="Email" />
                <TextInput style={styles.input} autoCompleteType="password" secureTextEntry textContentType="password" placeholder="Password" />
                <TextInput style={styles.input} autoCompleteType="password" secureTextEntry textContentType="password" placeholder="Verification Password" />
                <View style={{marginVertical: 5}}><Button title="Crée un compte" /></View>
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