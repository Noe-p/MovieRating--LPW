import { Image, Text, View } from 'react-native';

const MovieScreen = (props) => {
  return (
    <View>
      <Image
        source={{
          uri: props.picture,
        }}
        style={{ width: 100, height: 150 }}
      />
      <Text>{props.title}</Text>
    </View>
  );
};

export default MovieScreen;
