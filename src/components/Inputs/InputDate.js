import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export const InputDate = (props) => {
  const [isRemove, setIsRemove] = useState(true);

  const makeUniformDate = (dateText) => {
    if ((dateText.length == 4 || dateText.length == 7) && isRemove) {
      if (dateText.length == 4) {
        if (dateText <= new Date().getFullYear()) {
          props.setDate(dateText.concat('-'));
          setIsRemove(false);
        }
      } else {
        if (dateText[5] + dateText[6] <= 12) {
          props.setDate(dateText.concat('-'));
          setIsRemove(false);
        }
      }
    } else if ((dateText.length == 5 || dateText.length == 8) && isRemove) {
      props.setDate(dateText);
      setIsRemove(false);
    } else {
      props.setDate(dateText);
      setIsRemove(true);
    }
  };
  return (
    <View>
      <TextInput
        {...props}
        onChangeText={makeUniformDate}
        placeholder='yyyy/mm/dd'
        keyboardType='number-pad'
        maxLength={10}
        returnKeyType='done'
      />
    </View>
  );
};
