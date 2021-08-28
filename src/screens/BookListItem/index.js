import React from 'react'
import { Alert } from 'react-native'

import Database from '../../database'

import { Container, NameBookText, NameAuthorText, ContainerButtons, EditButton, EditButtonText, RemoveButton, RemoveButtonText } from './styles'



export default (props) => {

    async function editUser(){
        const user = await Database.getItem(props.id)
        props.navigation.navigate('BookForm', user)
      }

      function deleteUser(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja marcar este livro como lido?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    Database.deleteItem(props.id).then(response => props.navigation.navigate("BookList", {id: props.id}))
                }}
            ],
            { cancelable: false }
            );
    }

    return(
        <Container>
            <NameBookText>{props.book}</NameBookText>
            <NameAuthorText>{props.author}</NameAuthorText>
            <ContainerButtons>
                <EditButton onPress={editUser}>
                    <EditButtonText>Editar</EditButtonText>
                </EditButton>
                <RemoveButton onPress={deleteUser}>
                    <RemoveButtonText>Marcar como lido</RemoveButtonText>
                </RemoveButton>
            </ContainerButtons>
        </Container>
    )
}