import React from 'react';
import { Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { RestaurantesView, RestauranteFoto, RestaurantesInfo } from './style';

const RestauranteItem = ({foto, nome, key, nota, categoria, distancia, valorFrete, tempoEntrega}) =>  {
    return (
    <RestaurantesView key={key}>
        <RestauranteFoto source={{uri: foto.trim(),
        width: 50,
        height: 50,
        resizeMode: 'cover'
        }} 
        />
        <RestaurantesInfo>
            <Text>{nome}</Text>
            <Text><AntDesign name="star" size={12} color="#F9A825" /> {nota} - {categoria} - {distancia}</Text>
            <Text>{tempoEntrega} • R$ {valorFrete}</Text>
            <Text></Text>
        </RestaurantesInfo>
    </RestaurantesView>
    )
}

export default RestauranteItem;