import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appStyles } from '../../../assets/styles/appStyles';

const Movie = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: props.img }}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.StarsContainer}>
          <Ionicons name='star' color='#f1c40f' size={17} />
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{props.note}</Text>
        </View>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate('MovieInfo', {
              title: props.title,
              note: props.note,
              description: props.description,
              comments: props.comments,
              imdb: props.imdb,
              img: props.img,
            })
          }
          style={styles.buttonDesc}
        >
          <Text style={styles.buttonText}>Voir le synopsis</Text>
        </TouchableHighlight>
      </ImageBackground>
      <Text style={appStyles.title1}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BABFD1',
    paddingBottom: 20,
    marginBottom: 30,
    width: '100%',
  },
  image: {
    width: 350,
    height: 450,
    marginBottom: 10,
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 30,
    position: 'relative',
  },
  buttonDesc: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  StarsContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    top: 30,
    right: 30,
    borderRadius: 15,
    width: 60,
  },
});

export default Movie;
