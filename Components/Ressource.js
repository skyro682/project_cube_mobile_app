import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { getRessources } from '../API/Cube';
import RessourceItem from './RessourceItem';

class Ressource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
        this._loadRessources();
    }

    _loadRessources() {
        getRessources().then(data => {
            this.setState({
                isLoaded: true,
                items: data.ressources
            });
        });
    }

    _displayPost = (idPost) => {
        this.props.navigation.navigate("Post", {idPost: idPost})
    }

    render() {
        const { isLoaded, items } = this.state;
        if(!isLoaded){
            return(
                <View style={styles.container}>
                    <Text>Chargement ...</Text>
                </View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <RessourceItem ressource={item} displayPost={this._displayPost}/>}
                    />
                </View>
            )
        } 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 20
    },
});

export default Ressource