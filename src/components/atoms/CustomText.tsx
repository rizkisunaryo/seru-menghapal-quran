import React from 'react';
import {Text, TextProps} from 'react-native';
import {COLOR_PRIMARY} from '../../constants/Colors';

function CustomText(props: TextProps & {children?: any; bold?: boolean}) {
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 14,
          color: COLOR_PRIMARY,
          fontFamily: props.bold ? 'Quicksand-Bold' : 'Quicksand-Light',
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
}

export default CustomText;
