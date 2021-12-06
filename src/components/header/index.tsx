import React from 'react'
import { Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './header.styles'

interface HeaderProps {
  title: string
  showBack?: boolean
}

export default function Header({ title, showBack = false }: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      { showBack ? (
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#15B6D6" />
        </BorderlessButton>
      ) : (
        <View />
      ) }
      <Text style={styles.title}>{ title }</Text>
    </View>
  )
}

