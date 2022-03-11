import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddMovieStack from './AddMovieStack';
import MovieInfoStack from './MovieInfoStack';
import MovieListStack from './MovieListStack';

const HomeTabs = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='MovieList'>
      <Stack.Screen
        name='MovieList'
        initialParams={{
          addedTitle: null,
          addedNote: null,
          addedDescription: null,
          addedComments: null,
          addedImdb: null,
          addedPicture: null,
          addedDate: null,
        }}
      >
        {() => <MovieListStack user={props.user} />}
      </Stack.Screen>
      <Stack.Screen name='AddMovie' component={AddMovieStack} />
      <Stack.Screen name='MovieInfo' component={MovieInfoStack} />
    </Stack.Navigator>
  );
};

export default HomeTabs;
