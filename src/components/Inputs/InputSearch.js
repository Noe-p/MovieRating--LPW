import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const InputSearch = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name='search'
        size={20}
        style={{ paddingLeft: 10, position: 'absolute', left: 0 }}
        color={'black'}
      />
      <TextInput style={styles.input} returnKeyType={'done'} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    position: 'relative',
  },
});
