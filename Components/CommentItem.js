import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class CommentItem extends React.Component {
    render() {
        const comments = this.props.comments;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{comments.content}</Text>
                <Text>{comments.created_at}</Text>
                <Text>{comments.users ? comments.users.username : 'Utilisateur supprimer'}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
})

export default CommentItem