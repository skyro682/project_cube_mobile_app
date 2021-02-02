import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { getPost } from '../API/Cube';
import CommentItem from './CommentItem';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
        this._loadRessources();
    }

    _loadRessources() {
        getPost(this.props.navigation.state.params.idPost).then(data => {
            this.setState({
                isLoaded: true,
                items: data.ressources
            });
        });
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
                    <Text style={styles.title}>{items.ressources.name}</Text>
                    <Text>{items.ressources.zone.name}</Text>
                    <Text>{items.ressources.category.name}</Text>
                    <Text>Post de : {items.ressources.users ? items.ressources.users.username : 'Utilisateur supprimer'}</Text>
                    <Text>Ecrit le : {items.ressources.created_at}</Text>
                    <Text>Mis a jour le :{items.ressources.updated_at}</Text>
                    <Text style={styles.content}>{items.ressources.content}</Text>
                    <Text style={styles.comment}>Commentaire</Text>
                    <FlatList
                        style={styles.commentBloc}
                        data={items.comments}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <CommentItem comments={item}/>}
                    />
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        padding: 5,
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    content: {
        marginVertical: 20,
        borderBottomWidth: 1,
        paddingBottom: 20,
        width: '100%',
        textAlign: 'center',
    },  
    comment: {
        fontSize: 15,
        marginBottom: 30,
    },
    commentBloc: {
        width: '100%',
    }
});

export default Post