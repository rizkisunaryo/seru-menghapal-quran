import React from 'react';
import {Text, TextProps} from 'react-native';
import {COLOR_PRIMARY} from '../../constants/Colors';

function ArabText(props: TextProps & {children?: any; bold?: boolean}) {
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 20,
          color: COLOR_PRIMARY,
          fontFamily: 'LPMQIsepMisbah',
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
}

export default ArabText;
