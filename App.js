import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isLogged, usersContent } from './src/content';
import AddImdbTabs from './src/Pages/AddImdbPage/AddImdbTabs';
import HomeTabs from './src/Pages/HomePage/HomeTabs';
import CreateUserStack from './src/Pages/Login/CreateUserStack';
import LoginStack from './src/Pages/Login/LoginStack';
import ProfilTabs from './src/Pages/Profil/ProfilTabs';

const App = () => {
  const Tabs = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const [login, setLogin] = useState(isLogged);
  const [users, setUsers] = useState(usersContent);
  const [user, setUser] = useState();

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
              } else if (route.name == 'Profil') {
                iconName = focused ? 'person' : 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tabs.Screen options={{ headerShown: false }} name='Home'>
            {() => <HomeTabs user={user} />}
          </Tabs.Screen>
          <Tabs.Screen name='AddImdb' component={AddImdbTabs} />
          <Tabs.Screen name='Profil'>
            {() => (
              <ProfilTabs user={user} setUser={setUser} setLogin={setLogin} />
            )}
          </Tabs.Screen>
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
            initialParams={{
              addedEmail: null,
              addedPassword: null,
              addedLastName: null,
              addedFirstName: null,
            }}
          >
            {() => (
              <LoginStack
                users={users}
                setUsers={setUsers}
                setUser={setUser}
                setLogin={setLogin}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name='CreateUser' component={CreateUserStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
