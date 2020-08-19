import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash, 
  GetStarted, 
  Register, 
  Login, 
  UploadPhoto, 
  Teknisi, 
  Pesan, 
  Toko,
  ChooseTeknisi,
  Chatting,
  UserProfile,
  UpdateProfile,
  TeknisiProfile,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Teknisi" component={Teknisi} />
      <Tab.Screen name="Pesan" component={Pesan} />
      <Tab.Screen name="Toko" component={Toko} />
    </Tab.Navigator>
  )
}

const Router = () => {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChooseTeknisi"
          component={ChooseTeknisi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chatting"
          component={Chatting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeknisiProfile"
          component={TeknisiProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

export default Router;