import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddMovieStack from './AddMovieStack';
import MovieInfoStack from './MovieInfoStack';
import MovieListStack from './MovieListStack';

const HomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='MovieList'>
      <Stack.Screen
        name='MovieList'
        component={MovieListStack}
        initialParams={{
          addedTitle: null,
          addedNote: null,
          addedDescription: null,
          addedComments: null,
          addedImdb: null,
          addedPicture: null,
        }}
      />
      <Stack.Screen name='AddMovie' component={AddMovieStack} />
      <Stack.Screen name='MovieInfo' component={MovieInfoStack} />
    </Stack.Navigator>
  );
};
export default HomeScreen;
