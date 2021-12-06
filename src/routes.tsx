import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductList from './pages/product-list'
import ProductDetails from './pages/product-details' 
import { AppRoutes } from './modules/constants';
import Header from './components/header';

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false,
          cardStyle: { backgroundColor: '#F2F3F5' } 
        }}
      >
        <Screen 
          name={AppRoutes.ProductList} 
          component={ProductList} 
          options={{
            headerShown: true,
            header: () => <Header title="Produtos" />
          }}
        />
        <Screen 
          name={AppRoutes.ProductDetails}
          component={ProductDetails} 
          options={{
            headerShown: true,
            header: () => <Header showBack={true} title="Detalhes" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}