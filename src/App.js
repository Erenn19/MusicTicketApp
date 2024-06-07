import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import TicketScreen from './screens/TicketScreen';
import TabBar from './components/TabBar';
import Box from './components/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResult from './screens/SearchResult';
import Details from './screens/Details';
import RegisterHome from './screens/RegisterScreen';
import LoginHome from './screens/LoginScreen';
import { useColorScheme } from 'react-native';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>

  )
}
const App = () => {
  return (
    <Box flex={1} as={SafeAreaView}>
      <StatusBar style={{ backgroundColor: 'black' }} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
          initialRouteName="Register">
          <Stack.Screen name='Home' component={HomeTabs} />
          <Stack.Screen name='SearchResult' component={SearchResult} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name="Register" component={RegisterHome} />
          <Stack.Screen name="Login" component={LoginHome} />

        </Stack.Navigator>
      </NavigationContainer>
    </Box>
  )
}
export default App



