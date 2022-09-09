import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SpaceCraft from './screens/SpaceCraft';
import DailyPic from './screens/DailyPic';
import StarMap from './screens/StarMap'
import DailyPicScreen from './screens/DailyPic';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator initalRouteName= "Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" conponent={HomeScreen}/>
        <Stack.Screen name="SpaceCraft" conponent={SpaceCraftsScreen}/>
        <Stack.Screen name="StarMap" conponent={StarMapScreen}/>
        <Stack.Screen name="DailyPic" conponent={DailyPicScreen}/>
      </StackNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
