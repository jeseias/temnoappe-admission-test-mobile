import React, { useEffect, useState } from 'react'
import { Image, View, ScrollView, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

import api from '../../services/api'
import { styles } from './product-details.style'

interface IProductDetailsRoutesParams {
  id: string
}

interface IProduct {
  id: string
  name: string
  image: string
  description: string
}

export default function ProductDetails () {
  const routes = useRoute()
  const [product, setProduct] = useState<IProduct>()

  const params = routes.params as IProductDetailsRoutesParams

  useEffect(() => {
    api.get(`/products/${params.id}`).then(response => {
      setProduct(response.data)
    })
  }, [params.id])

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Carregando...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    </ScrollView>
  )
}
