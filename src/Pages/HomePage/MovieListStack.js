import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appStyles } from '../../../assets/styles';
import { SearchFilter } from '../../components';
import { formatDate } from '../../service';
import Movie from './Movie';

const MovieListStack = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 0,
      title: 'Walk the Line',
      note: 2,
      img: 'https://image.tmdb.org/t/p/w500/zMkD6FVikyPNnigoupO7vD5ti9p.jpg',
      comments: 'Pas mal',
      imdb: 'https://www.imdb.com/title/tt0358273/',
      date: formatDate(new Date()),
      description:
        "Johnny Cash n'est pas encore la plus célèbre star de son temps. L'histoire commence dans l'Arkansas, en pleine Dépression, lorsqu'il est simple fils de métayer. Quelques années plus tard, Cash sillonne les routes américaines lors de tournées éprouvantes, auprès des pionniers du rock, Elvis Presley, Carl Perkins, Roy Orbison, Jerry Lee Lewis et Waylon Jennings, avant de donner son inoubliable concert au pénitencier de Folsom, en 1968.",
    },
  ]);
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: 'Liste des films' });
  const [currentMovieList, setCurrentMovieList] = useState([]);

  const addMovie = (
    title,
    note,
    description,
    comments,
    imdb,
    picture,
    date
  ) => {
    setMovieList((current) => [
      ...current,
      {
        id: current.length,
        title: title,
        note: note,
        img: picture,
        description: description,
        comments: comments,
        imdb: imdb,
        date: date,
      },
    ]);
  };

  useFocusEffect(() => {
    if (
      !route.params.addedTitle ||
      !route.params.addedNote ||
      !route.params.addedDescription ||
      !route.params.addedComments ||
      !route.params.addedPicture ||
      !route.params.addedDate
    )
      return;
    addMovie(
      route.params.addedTitle,
      route.params.addedNote,
      route.params.addedDescription,
      route.params.addedComments,
      route.params.addedImdb,
      route.params.addedPicture,
      route.params.addedDate
    );
    route.params.addedTitle = null;
    route.params.addedNote = null;
    route.params.addedDescription = null;
    route.params.addedComments = null;
    route.params.addedImdb = null;
    route.params.addedPicture = null;
    route.params.addedDate = null;
  });

  return (
    <View style={styles.container}>
      <SearchFilter
        movieList={movieList}
        setCurrentMovieList={setCurrentMovieList}
      />
      <FlatList
        style={styles.movieList}
        data={currentMovieList}
        renderItem={({ item }) => (
          <Movie
            title={item.title}
            description={item.description}
            img={item.img}
            note={item.note}
            comments={item.comments}
            imdb={item.imdb}
            date={item.date}
          />
        )}
      />
      <Pressable
        style={styles.addMovieButton}
        onPress={() => {
          navigation.navigate('AddMovie');
        }}
      >
        <Text style={[appStyles.button]}>Ajouter un film</Text>
        <Ionicons name='chevron-forward-outline' size={40} color={'white'} />
      </Pressable>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  movieList: {
    marginTop: 5,
    marginBottom: 58,
    width: '100%',
  },
  addMovieButton: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18020C',
  },
});

export default MovieListStack;
