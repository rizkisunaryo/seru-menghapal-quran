import React from 'react';
import {TextProperties, Text} from 'react-native';

function CustomText(props: TextProperties & {children?: any}) {
  return (
    <Text {...props} style={[{fontSize: 15}, props.style]}>
      {props.children}
    </Text>
  );
}

export default CustomText;
