import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{props.label}</Text>
      <TextInput style={styles.input} returnKeyType={'done'} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 20,
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#BABFD1',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
});
