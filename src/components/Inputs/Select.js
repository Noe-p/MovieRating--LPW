import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const Select = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{props.label}</Text>
      <RNPickerSelect
        onValueChange={props.onChangeValue}
        selectedValue={props.value}
        items={props.items}
        style={{
          inputIOS: { fontSize: 20, marginTop: 10, marginBottom: 10 },
          inputAndroid: { fontSize: 20, marginTop: 10, marginBottom: 10 },
        }}
        placeholder={{ label: props.placeholder }}
      />
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
});
