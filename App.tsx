import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
console.disableYellowBox = true

import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from 'screens/Dashboard';
import Movie from 'screens/Movie';
import TV from 'screens/TV';
import Search from 'screens/Search';
import colors from 'res/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home:React.FC = () => (
  <Tab.Navigator          
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
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
        borderTopColor: colors.lightGray,
        borderTopWidth: 1
      }
    }}
  >
    <Tab.Screen name="Movies" component={Dashboard} initialParams={{ 
      isMovie: true, 
      title1: "Upcoming", 
      title2: "Popular",
      url1: "movie/upcoming",
      url2: "movie/top_rated",
      urlGenre: "genre/movie/list"
    }} />
    <Tab.Screen name="TV" component={Dashboard} initialParams={{ 
      isMovie: false, 
      title1: "Popular", 
      title2: "Top Rated",
      url1: "tv/popular",
      url2: "tv/top_rated",
      urlGenre: "genre/tv/list"
    }} />
  </Tab.Navigator>
);

const App:React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
      <Stack.Screen name="MovieDetails" component={Movie} options={{
        headerShown: false
      }} />
      <Stack.Screen name="TVDetails" component={TV} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Search" component={Search} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  </NavigationContainer>
);



export default App;