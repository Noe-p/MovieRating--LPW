import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { appStyles } from '../../assets/styles';

export const MovieInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  navigation.setOptions({ title: 'Synopsis' });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[appStyles.title1, { marginTop: 20 }]}>
          {route.params.title}
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/img/walkTheLine.jpeg')}
        />
        <Rating
          style={{ marginTop: 20 }}
          startingValue={route.params.note}
          imageSize={30}
          readonly
        />
        <Text style={[appStyles.text, { width: '90%', marginTop: 20 }]}>
          {route.params.description}
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
});
