import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import MovieScreen from './src/screens/Movies';
import TVScreen from './src/screens/TV';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator          
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Movies') {
              iconName = 'local-movies';
            } else if (route.name === 'TV') {
              iconName = 'tv';
            }
            return <MaterialIcons name={iconName} size={50} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4F095E',
          inactiveTintColor: '#A9A4A4',
          style: {
            height: 70,
            padding: 8,
          }
        }}
      >
        <Tab.Screen options={{
          
        }} name="Movies" component={MovieScreen} />
        <Tab.Screen name="TV" component={TVScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}