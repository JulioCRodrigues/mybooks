import styled from 'styled-components/native'

export const Container = styled.View`

    display: flex;
    border-radius: 8px;
    background: #fff;
    width: 300px;
    margin: 8px 20px;
    justify-content: center;
    align-items: center;


`

export const NameBookText = styled.Text`

    color: #000;
    font-size: 16px;
    font-weight: 500;
    margin: 8px 20px;

`

export const NameAuthorText = styled.Text`

    color: #000;
    font-size: 16px;
    font-weight: 500;
    margin: 0 20px;
`

export const ContainerButtons = styled.View`

    flex-direction: row-reverse;
    align-items: flex-end;
    margin-top: 15px;
    padding-bottom: 10px;

`

export const EditButton = styled.TouchableOpacity`

    background: orange;
    height: 24px;
    width: 60px;
    margin: 8px 5px;
    font-size: 12px;
    border-radius: 8px;

`

export const EditButtonText = styled.Text`

    margin-top: 2px;
    color: #fff;
    font-weight: 500;
    text-align: center;

`

export const RemoveButton = styled.TouchableOpacity`

    background: green;
    height: 24px;
    width: 120px;
    margin: 8px 0;
    font-size: 12px;
    border-radius: 8px;

`

export const RemoveButtonText = styled.Text`
    margin-top: 2px;
    color: #fff;
    font-weight: 500;
    text-align: center;

`