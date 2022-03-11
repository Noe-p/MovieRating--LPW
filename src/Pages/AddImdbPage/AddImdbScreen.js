import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { selectMovie } from '../../API/request';
import { Input, Submit } from '../../components';
import MovieScreen from './MovieScreen';

const AddImdbScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Ajouter' });
  const [title, setTitle] = useState('');
  const [submit, setSubmit] = useState('');

  const movieList = submit ? selectMovie(submit) : [];
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ width: '90%', flex: 1, alignItems: 'center' }}>
        <Input
          label={'Choisir un film'}
          value={title}
          onChangeText={setTitle}
          placeholder='Saisissez un film'
        />
        <Submit onPress={() => setSubmit(title)} label={'Ajouter'} />
        <FlatList
          style={{ marginTop: 20 }}
          data={movieList}
          renderItem={({ item }) => (
            <MovieScreen title={item.title} picture={item.picture} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default AddImdbScreen;
