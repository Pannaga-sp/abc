import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginScreen from './app/screen/auth/UserLoginScreen';
//import ShopTab from './app/screen/shop/ShopTab';
import RegistrationScreen from './app/screen/auth/RegistrationScreen';
import SendPasswordResetEmailScreen from './app/screen/auth/SendPasswordResetEmailScreen';
import UserPanelTab from './app/screen/UserPanelTab';
import { store } from './app/store';
import { Provider } from 'react-redux';
import React from 'react';
import SplashScreen from './app/screen/auth/SplashScreen';
import StartScreen from './features/StartScreen';
//import levels from "./app/screen/auth/levels"
import Choose from './app/screen/auth/Choose';
import SendPasswordResetEmail from './app/screen/auth/SendPasswordResetEmailScreen'
import Quiz1 from './app/screen/auth/Quiz1';
import Instructions from './app/screen/auth/InstructionsScreen';
import upload from './app/screen/auth/upload';
// import DashboardScreen from './app/screen/DashboardScreen.js';
// import SideBar from './app/screen/SideBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{

          headerShown: false,
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
  <Stack.Screen
          name="SendPasswordResetEmailScreen"
          component={SendPasswordResetEmailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UserLogin"
          component={UserLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}

        />
{/* <Stack.Screen
          name="SideBar"
          // component={SideBar}
          options={{ headerShown: false }}
        /> */}
        
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{ headerShown: false }}
        />

         {/* <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="Quiz1"
          component={Quiz1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendPasswordResetEmail"
          component={SendPasswordResetEmailScreen}
          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen
        name="upload"
        component={upload}
        options={{headerShown:false}}
        />
        <Stack.Screen
          name="UserPanelTab"
          component={UserPanelTab}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
