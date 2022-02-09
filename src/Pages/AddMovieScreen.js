import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Select, Submit, TextArea } from '../components';

export const AddMovieScreen = () => {
  const [title, onChangeTitle] = useState('');
  const [note, onChangeNote] = useState();
  const [description, onChangeDescription] = useState('');

  const navigation = useNavigation();
  navigation.setOptions({ title: 'Ajouter un film' });

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            label={'Titre'}
            value={title}
            onChangeValue={onChangeTitle}
            placeholder='Saisissez un titre'
          />
          <TextArea
            label={'Description'}
            value={description}
            onChangeValue={onChangeDescription}
            placeholder='Saisissez une description'
          />
          <Select
            label={'Note'}
            value={note}
            onChangeValue={onChangeNote}
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
              })
            }
            label={'Ajouter'}
          />
        </View>
      </View>
    </ScrollView>
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
