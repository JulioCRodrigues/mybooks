import React from 'react'
import { } from '@react-navigation/native'
import { Container, ViewList, ViewListText, NewBook, NewBookText, BooksLogo } from './styles'

import Book from '../../assets/books.png'

export default ({navigation}) => {
    return(
        <Container>
            <BooksLogo source={Book} />
            <ViewList onPress={() => navigation.navigate('BookList')}>
                <ViewListText>Lista de livros</ViewListText>
            </ViewList>

            <NewBook onPress={() => navigation.navigate('BookForm')}>
                <NewBookText>Novo livro</NewBookText>
            </NewBook>
        </Container>
    )
}