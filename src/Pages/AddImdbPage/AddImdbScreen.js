import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { selectMovie } from '../../API/request';
import { Input } from '../../components';
import MovieImdbScreen from './MovieImdbScreen';

const AddImdbScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Ajouter' });
  const [title, setTitle] = useState('');

  const movieList = selectMovie(title);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ width: '100%', flex: 1, alignItems: 'center' }}>
        <Input
          label={'Trouver un film'}
          value={title}
          onChangeText={setTitle}
          placeholder='Saisissez un film'
        />
        <FlatList
          style={styles.flatList}
          data={movieList}
          renderItem={({ item }) => (
            <MovieImdbScreen
              submit={navigation}
              title={item.title}
              note={item.note}
              description={item.description}
              comments={item.comments}
              imdb={item.imdb}
              picture={item.picture}
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
    marginTop: 20,
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '5%',
  },
});

export default AddImdbScreen;
