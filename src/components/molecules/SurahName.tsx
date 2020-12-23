import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR_BLUE_2, COLOR_PRIMARY} from '../../constants/Colors';
import {STYLE_BOX_SHADOW} from '../../constants/Styles';
import CustomText from '../atoms/CustomText';

function SurahName(props: {surahName: string; numberOfAyah: number}) {
  return (
    <LinearGradient
      locations={[0, 1]}
      colors={[COLOR_BLUE_2, COLOR_PRIMARY]}
      style={[
        {
          height: 94,
          borderRadius: 16,
          paddingLeft: 35,
          justifyContent: 'center',
        },
        STYLE_BOX_SHADOW,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <CustomText bold style={{fontSize: 24, color: 'white'}}>
          {props.surahName + ' '}
        </CustomText>
        <CustomText style={{color: 'white'}}>
          ({props.numberOfAyah} Ayat)
        </CustomText>
      </View>
    </LinearGradient>
  );
}

export default SurahName;
