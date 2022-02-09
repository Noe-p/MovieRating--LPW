import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AddMovieScreen, MovieInfoScreen } from '.';
import { MovieList } from '../components';

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName='MovieList'>
      <Stack.Screen
        name='MovieList'
        component={MovieList}
        initialParams={{
          addedTitre: null,
          addedNote: null,
          addedDescription: null,
        }}
      />
      <Stack.Screen name='AddMovie' component={AddMovieScreen} />
      <Stack.Screen name='MovieInfo' component={MovieInfoScreen} />
    </Stack.Navigator>
  );
};
