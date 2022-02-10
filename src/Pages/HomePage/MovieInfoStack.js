import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { appStyles } from '../../../assets/styles';

const MovieInfoStack = () => {
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: 'Synopsis' });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[appStyles.title1, styles.spacingTop]}>
          {route.params.title}
        </Text>
        <Image
          style={styles.image}
          source={require('../../../assets/img/walkTheLine.jpeg')}
        />
        <Rating
          style={styles.spacingTop}
          startingValue={route.params.note}
          imageSize={30}
          readonly
        />
        <Text style={[appStyles.text, { width: '90%' }, styles.spacingTop]}>
          {route.params.description}
        </Text>
        <Text style={[appStyles.title1, styles.spacingTop]}>Commentaire</Text>
        <Text style={[appStyles.text, { width: '90%' }, styles.spacingTop]}>
          {route.params.comments}
        </Text>
        <Text style={[appStyles.title1, styles.spacingTop]}>Lien IMDB</Text>
        <Text
          style={[
            appStyles.text,
            { width: '90%', color: 'blue' },
            styles.spacingTop,
          ]}
          onPress={() =>
            Linking.openURL(
              `https://www.imdb.com/title/tt${route.params.imdb}/`
            )
          }
        >
          https://www.imdb.com/title/tt{route.params.imdb}/
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  image: {
    width: 350,
    height: 450,
    borderRadius: 10,
    marginTop: 20,
  },
  spacingTop: {
    marginTop: 20,
  },
});

export default MovieInfoStack;
