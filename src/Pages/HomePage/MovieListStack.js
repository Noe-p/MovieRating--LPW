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
import { Movie } from '../../components';

const MovieListStack = () => {
  const [movieList, setMovieList] = useState([
    {
      id: '0',
      title: 'Walk the Line',
      note: 2,
      img: '../../assets/img/walkTheLine.jpeg',
      comments: 'Pas mal',
      imdb: '0358273',
      description:
        "Johnny Cash n'est pas encore la plus célèbre star de son temps. L'histoire commence dans l'Arkansas, en pleine Dépression, lorsqu'il est simple fils de métayer. Quelques années plus tard, Cash sillonne les routes américaines lors de tournées éprouvantes, auprès des pionniers du rock, Elvis Presley, Carl Perkins, Roy Orbison, Jerry Lee Lewis et Waylon Jennings, avant de donner son inoubliable concert au pénitencier de Folsom, en 1968.",
    },
  ]);
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: 'Liste des films' });

  const addMovie = (title, note, description, comments, imdb) => {
    setMovieList((current) => [
      ...current,
      {
        id: current.length,
        title: title,
        note: note,
        img: 'walkTheLine.jpeg',
        description: description,
        comments: comments,
        imdb: imdb,
      },
    ]);
  };

  useFocusEffect(() => {
    if (
      !route.params.addedTitle ||
      !route.params.addedNote ||
      !route.params.addedDescription ||
      !route.params.addedComments ||
      !route.params.addedImdb
    )
      return;
    addMovie(
      route.params.addedTitle,
      route.params.addedNote,
      route.params.addedDescription,
      route.params.addedComments,
      route.params.addedImdb
    );
    route.params.addedTitle = null;
    route.params.addedNote = null;
    route.params.addedDescription = null;
    route.params.addedComments = null;
    route.params.addedImdb = null;
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.movieList}
        data={movieList}
        renderItem={({ item }) => (
          <Movie
            title={item.title}
            description={item.description}
            img={item.img}
            note={item.note}
            comments={item.comments}
            imdb={item.imdb}
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  movieList: {
    paddingBottom: 100,
    paddingTop: 20,
  },
  addMovieButton: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18020C',
  },
});

export default MovieListStack;
