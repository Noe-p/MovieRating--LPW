import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const Submit = (props) => {
  return (
    <View style={styles.submitContainer}>
      <Pressable onPress={props.onPress}>
        <Text style={styles.submitText}>{props.label}</Text>
      </Pressable>
    </View>
  );
};

export const styles = StyleSheet.create({
  submitContainer: {
    backgroundColor: '#18020C',
    marginTop: 30,
    borderRadius: 30,
    width: '60%',
  },
  submitText: {
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
});
