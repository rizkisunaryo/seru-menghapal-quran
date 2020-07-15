import React from 'react';
import {View, TextInput} from 'react-native';
import CustomText from '../atoms/CustomText';

function CustomTextInput(props: {
  label: string;
  defaultValue: number;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={{alignItems: 'center'}}>
      <CustomText>{props.label}</CustomText>
      <View style={{flexDirection: 'row', marginTop: 4}}>
        <TextInput
          onChangeText={props.onChangeText}
          defaultValue={props.defaultValue + ''}
          keyboardType={'numeric'}
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 8,
            paddingVertical: 4,
            textAlign: 'center',
          }}
          maxLength={3}
          numberOfLines={1}
        />
        <View />
      </View>
    </View>
  );
}

export default CustomTextInput;
