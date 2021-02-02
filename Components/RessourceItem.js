import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class RessourceItem extends React.Component {
    render() {
        const { ressource, displayPost} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{ressource.name}</Text>
                <Text>{ressource.zone.name}</Text>
                <Text>{ressource.category.name}</Text>
                <Text>Post de : {ressource.users ? ressource.users.username : 'Utilisateur supprimer'}</Text>
                <Text>Ecrit le : {ressource.created_at}</Text>
                <Text>Mis a jour le : {ressource.updated_at}</Text>
                <View style={styles.button}>
                    <Button title="Voir plus" onPress={() => displayPost(ressource.id)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        marginTop: 10,
    }
})

export default RessourceItem