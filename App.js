import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isLogged, usersContent } from './src/content';
import AddImdbScreen from './src/Pages/AddImdbPage/AddImdbScreen';
import HomeScreen from './src/Pages/HomePage/HomeScreen';
import CreateUser from './src/Pages/Login/CreateUser';
import Login from './src/Pages/Login/Login';

const App = () => {
  const Tabs = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const [login, setLogin] = useState(isLogged);
  const [users, setUsers] = useState(usersContent);

  if (login) {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name == 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name == 'AddImdb') {
                iconName = focused ? 'add' : 'add-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tabs.Screen
            options={{ headerShown: false }}
            name='Home'
            component={HomeScreen}
          />
          <Tabs.Screen name='AddImdb' component={AddImdbScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            options={{ headerShown: false }}
            name='Login'
            component={() => (
              <Login users={users} setUsers={setUsers} setLogin={setLogin} />
            )}
            initialParams={{
              addedEmail: null,
              addedPassword: null,
              addedLastName: null,
              addedFirstName: null,
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='CreateUser'
            component={CreateUser}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
