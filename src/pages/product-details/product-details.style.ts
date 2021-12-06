import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imagesContainer: {
    width: '100%',
    height: 240
  },
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover'
  },
  contentContainer: {
    padding: 16
  },
  title: {
    color: '#4D6F80',
    fontSize: 30
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 24,
    color: '#4D6F80'
  },
  description: {
    color: '#5c8599',
    lineHeight: 24
  }
})
