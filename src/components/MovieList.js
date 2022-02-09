import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appStyles } from '../../assets/styles';
import { Movie } from '../components';

export const MovieList = () => {
  const [movieList, setMovieList] = useState([
    {
      id: '0',
      title: 'Walk the Line',
      note: 2,
      img: '../../assets/img/walkTheLine.jpeg',
      description:
        "Johnny Cash n'est pas encore la plus célèbre star de son temps. L'histoire commence dans l'Arkansas, en pleine Dépression, lorsqu'il est simple fils de métayer. Quelques années plus tard, Cash sillonne les routes américaines lors de tournées éprouvantes, auprès des pionniers du rock, Elvis Presley, Carl Perkins, Roy Orbison, Jerry Lee Lewis et Waylon Jennings, avant de donner son inoubliable concert au pénitencier de Folsom, en 1968.",
    },
  ]);
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: 'Liste des films' });

  const addMovie = (title, note, description) => {
    setMovieList((current) => [
      ...current,
      {
        id: current.length,
        title: title,
        note: note,
        img: 'walkTheLine.jpeg',
        description: description,
      },
    ]);
  };

  useFocusEffect(() => {
    if (
      !route.params.addedTitle ||
      !route.params.addedNote ||
      !route.params.addedDescription
    )
      return;
    addMovie(
      route.params.addedTitle,
      route.params.addedNote,
      route.params.addedDescription
    );
    route.params.addedTitle = null;
    route.params.addedNote = null;
    route.params.addedDescription = null;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.movieList}>
          {movieList.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                description={movie.description}
                img={movie.img}
                note={movie.note}
              />
            );
          })}
        </View>
      </ScrollView>
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
    marginBottom: 100,
    marginTop: 20,
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
