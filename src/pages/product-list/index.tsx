import React, { useState } from 'react'
import { View } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'
import api from '../../services/api'
import Product from '../../components/product'
import { styles } from './product-list.style'

interface IProduct {
  id: string
  name: string
  image: string
  description: string
}

export default function ProductList () {
  const [products, setProducts] = useState<IProduct[]>([])

  useFocusEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data)
    })
  })

  return (
    <View style={styles.container}>
      {products.map(product => <Product key={product.id} {...product}/>)}
    </View>
  )
};
