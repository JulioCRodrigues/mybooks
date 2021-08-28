import React from 'react'
import {  } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`

    flex: 1;
    align-items: center;
    justify-content: center;
    background: #EDEDEF;

`;
export const InputNameBook = styled.TextInput`

    background: #fff;
    color: #000;
    width: 70%;
    margin-bottom: 20px;
    border-radius: 8px;
    text-align: center;
`

export const InputNameAuthor = styled.TextInput`

    background: #fff;
    color: #000;
    width: 70%;
    border-radius: 8px;
    text-align: center;
`

export const Salved = styled.TouchableOpacity`
    margin-top: 50px;
    margin-bottom: 8px;
    background: #2C302E;
    border-radius: 8px;
    height: 40;
    width: 70%;

`

export const TextSalved = styled.Text`
    color: #fff;
    margin-top: 8px;
    text-align: center;
`

export const BackToHome = styled.TouchableOpacity`
    background: #2C302E;
    border-radius: 8px;
    height: 40;
    width: 70%;
`

export const BackToHomeText = styled.Text`
    color: #fff;
    margin-top: 8px;
    text-align: center;
`

export const BooksLogo = styled.Image`

    height: 100px;
    width:  100px;
    margin-bottom: 16px;

`