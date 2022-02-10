import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Select, Submit, TextArea } from '../../components';

const AddMovieStack = () => {
  const [title, onChangeTitle] = useState('');
  const [note, onChangeNote] = useState('');
  const [description, onChangeDescription] = useState('');
  const [comments, onChangeComments] = useState('');
  const [imdb, onChangeImdb] = useState('');

  const navigation = useNavigation();
  navigation.setOptions({ title: 'Ajouter un film' });

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: 'white',
      }}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            label={'Titre'}
            value={title}
            onChangeText={onChangeTitle}
            placeholder='Saisissez un titre'
          />
          <TextArea
            label={'Description'}
            value={description}
            onChangeText={onChangeDescription}
            placeholder='Saisissez une description'
          />
          <TextArea
            label={'Commentaire'}
            value={comments}
            onChangeText={onChangeComments}
            placeholder='Saisissez un commentaire'
          />
          <Input
            label={'Code IMBD'}
            value={imdb}
            onChangeText={onChangeImdb}
            placeholder='Saisissez un code IMDB'
            keyboardType='numeric'
          />
          <Select
            label={'Note'}
            value={note}
            onChangeText={onChangeNote}
            placeholder={'Saisissez une note'}
            items={[
              { label: '0', value: '0' },
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
            ]}
          />
          <Submit
            onPress={() =>
              navigation.navigate('MovieList', {
                addedTitle: title,
                addedNote: note,
                addedDescription: description,
                addedComments: comments,
                addedImdb: imdb,
              })
            }
            label={'Ajouter'}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
  },
});
export default AddMovieStack;
