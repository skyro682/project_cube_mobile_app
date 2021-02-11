import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { logout } from '../API/Cube';
import * as SecureStore from 'expo-secure-store';

class HomeLogged extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
        //this.username = SecureStore.getItemAsync('username');    
    }

    _logout(){
        if(logout()){
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return(     
            <View style={styles.container}>
                <View style={styles.imageBox}><Image style={styles.image} source={require('../assets/msa.png')}/></View>
                <Text></Text>
                <View style={styles.buttonBox}>
                    <View style={styles.button} ><Button title="Explorer" onPress={() => this.props.navigation.navigate('Ressource')} /></View>
                    <View style={styles.button} ><Button title="Se déconnecter" onPress={() => this._logout} /></View>
                </View>
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
    imageBox: {
        flex: 0.50,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    buttonBox: {
        flex: 0.25,
        justifyContent: 'center',
    },
    button: {
        marginVertical: 5,
    }
});

export default HomeLogged