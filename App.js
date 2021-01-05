import React from 'react'
import Search from './components/search'
import FilmDetails from './components/filmDetails'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Search} />
        <Stack.Screen name="FilmDetails" component={FilmDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
