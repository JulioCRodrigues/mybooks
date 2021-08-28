import React, {useState, useEffect} from 'react'
import Database from '../../database'

import Book from '../../assets/books.png'
import { Container, InputNameBook, InputNameAuthor, Salved, TextSalved, BooksLogo, BackToHome, BackToHomeText } from './styles'

export default ({route, navigation}) => {

    const id = route.params ? route.params.id : undefined;

    const [nameBook, setNameBook] = useState('')
    const [nameAuthor, setNameAuthor] = useState('')

    useEffect(() => {
        if(!route.params) return;
        setNameBook(route.params.nameBook);
        setNameAuthor(route.params.nameAuthor);
      }, [route])

      function bookChange(nameBook) {
        setNameBook(nameBook)
      }
    
      function authorChange(nameAuthor) {
        setNameAuthor(nameAuthor)
      }

      async function saveItem(){ 
        const listItem = {nameBook, nameAuthor};
        Database.saveItem(listItem, id)
          .then(response => navigation.navigate("BookList", listItem));
      }

    return(
        
        <Container>
            <BooksLogo source={Book} />
            <InputNameBook  
                placeholder="Digite o nome do livro" 
                type="text"
                onChangeText={bookChange}
                value={nameBook}
            
            />
            <InputNameAuthor  
                placeholder="Digite o nome do autor" 
                type="text"
                onChangeText={authorChange}
                value={nameAuthor}
                />
            <Salved onPress={saveItem}>
                <TextSalved>Salvar</TextSalved>
            </Salved>

            <BackToHome>
                <BackToHomeText>Voltar</BackToHomeText>
            </BackToHome>
        </Container>
    )
}

