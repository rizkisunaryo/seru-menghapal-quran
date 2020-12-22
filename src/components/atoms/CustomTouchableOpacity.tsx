import React from 'react';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';

function CustomTouchableOpacity(
  props: TouchableOpacityProps & {children?: any},
) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },
        props.style,
      ]}>
      {props.children}
    </TouchableOpacity>
  );
}

export default CustomTouchableOpacity;
