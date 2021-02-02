import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
    render() {
        return(     
            <View style={styles.container}>
                <View style={styles.imageBox}><Image style={styles.image} source={require('../assets/msa.png')}/></View>
                <View style={styles.buttonBox}>
                    <View style={styles.button} ><Button title="Explorer" onPress={() => this.props.navigation.navigate('Ressource')} /></View>
                    <View style={styles.button} ><Button title="Se Connecter" onPress={() => this.props.navigation.navigate('Login')} /></View>
                    <View style={styles.button} ><Button title="S'enregistrer" onPress={() => this.props.navigation.navigate('Register')} /></View>
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

export default Home