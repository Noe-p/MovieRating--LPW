import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export const TextArea = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{props.label}</Text>
      <TextInput style={styles.textArea} multiline={true} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    marginTop: 20,
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#BABFD1',
  },
  textArea: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});
