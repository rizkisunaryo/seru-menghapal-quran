import React from 'react';
import {Button, View} from 'react-native';
import CustomText from '../atoms/CustomText';

function ShowButtonAnswer(props: {
  buttonTitle: string;
  answer: string;
  onPress: () => void;
}) {
  return (
    <>
      <Button title={props.buttonTitle} onPress={props.onPress} />
      <View style={{height: 4}} />
      <CustomText style={{fontSize: 24, lineHeight: 48}}>
        {props.answer}
      </CustomText>
    </>
  );
}

export default ShowButtonAnswer;
