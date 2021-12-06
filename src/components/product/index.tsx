import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { AppRoutes } from "../../modules/constants";
import { styles } from './product.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProduct {
  id: string
  name: string
  image: string
}

export default function Product({ id, name, image }: IProduct) {
  const navigation = useNavigation();

  function handleNavigateToProductDetails() {
    navigation.navigate(AppRoutes.ProductDetails, { id })
  } 
  return (
    <TouchableOpacity onPress={handleNavigateToProductDetails}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }}/>
        <Text style={styles.title} >{name}</Text>
      </View>
    </TouchableOpacity>
  )
}