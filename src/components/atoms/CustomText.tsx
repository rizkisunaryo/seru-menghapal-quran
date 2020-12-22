import React from 'react';
import {Text, TextProps} from 'react-native';

function CustomText(props: TextProps & {children?: any; bold?: boolean}) {
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 15,
          fontFamily: props.bold ? 'Quicksand-Bold' : 'Quicksand-Light',
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
}

export default CustomText;
