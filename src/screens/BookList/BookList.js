import React, {useState, useEffect} from 'react'
import { Container, TextList, ListScrollView } from './styles'

import Database from '../../database'

import BookListItem from '../BookListItem'

export default ({route, navigation}) => {

    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        Database.getItems().then(users => setUsers(users));
    }, [route]);


    return(
        <Container>
            <TextList>Lista de livros</TextList>
            <ListScrollView>
                {
                    users.map(user => {
                        return <BookListItem  key={user.id} id={user.id} book={user.nameBook} author={user.nameAuthor} navigation={navigation}/>
                    })
                }
            </ListScrollView>
            
        </Container>
    )
}