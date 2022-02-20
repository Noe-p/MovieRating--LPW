import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appStyles } from '../../../assets/styles';

const MovieImdbScreen = (props) => {
  const [iconName, setIconName] = useState('heart-outline');

  const setIcon = () => {
    if (iconName == 'heart-outline') setIconName('heart');
    else setIconName('heart-outline');
    props.submit.navigate('MovieList', {
      addedPicture: props.picture,
      addedTitle: props.title,
      addedNote: props.note,
      addedDescription: props.description,
      addedComments: props.comments,
      addedImdb: props.imdb,
      addedDate: props.date,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.picture,
        }}
        style={{ width: 70, height: 100 }}
      />
      <Text style={[appStyles.text, { width: '60%' }]}>{props.title}</Text>
      <Ionicons
        onPress={setIcon}
        style={{ padding: 10 }}
        name={iconName}
        size={20}
        color={'black'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default MovieImdbScreen;
