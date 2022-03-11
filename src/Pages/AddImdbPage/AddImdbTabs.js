import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { selectMovie } from '../../api/request';
import { InputSearch } from '../../components';
import MovieImdb from './MovieImdb';

const AddImdbTabs = () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Ajouter' });
  const [title, setTitle] = useState('');

  const movieList = selectMovie(title);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <InputSearch
          value={title}
          onChangeText={setTitle}
          placeholder='Trouver un film'
        />
        <FlatList
          style={styles.flatList}
          data={movieList}
          renderItem={({ item }) => (
            <MovieImdb
              submit={navigation}
              title={item.title}
              note={item.note}
              description={item.description}
              comments={item.comments}
              imdb={item.imdb}
              picture={item.picture}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 10,
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '5%',
  },
});

export default AddImdbTabs;
