import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddImdbScreen from './src/Pages/AddImdbPage/AddImdbScreen';
import HomeScreen from './src/Pages/HomePage/HomeScreen';

const Tabs = createBottomTabNavigator();

const App = () => {
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
};

export default App;
