import React from 'react';
import {StyleProp, TextInput, TextStyle, View} from 'react-native';
import RangeSlider from 'rn-range-slider';

import {COLOR_GREY, COLOR_PRIMARY} from '../../constants/Colors';
import {STYLE_BOX_SHADOW} from '../../constants/Styles';
import CustomText from '../atoms/CustomText';

const textInputStyle: StyleProp<TextStyle> = {
  flex: 1,
  height: 24,
  borderColor: COLOR_PRIMARY,
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 50,
  color: COLOR_PRIMARY,
  paddingVertical: 0,
  paddingHorizontal: 8,
  textAlign: 'right',
};

function AyahRangePicker(props: {
  surahNumber: number;
  numberOfAyah: number;
  onRangeChange: (minAyah: number, maxAyah: number) => void;
}) {
  const [minAyahText, setMinAyahText] = React.useState('1');
  const [minAyah, setMinAyah] = React.useState(1);

  const [maxAyah, setMaxAyah] = React.useState(props.numberOfAyah);
  const [maxAyahText, setMaxAyahText] = React.useState(props.numberOfAyah + '');

  React.useEffect(() => {
    setMinAyah(1);
    setMinAyahText('1');
    setMaxAyah(props.numberOfAyah);
    setMaxAyahText(props.numberOfAyah + '');
  }, [props.surahNumber, props.numberOfAyah]);

  return (
    <View
      style={[
        STYLE_BOX_SHADOW,
        {
          padding: 32,
          backgroundColor: 'white',
          borderRadius: 16,
        },
      ]}>
      <View style={{flexDirection: 'row'}}>
        <CustomText>Ayat</CustomText>
        <View style={{width: 9}} />
        <CustomText style={{color: COLOR_GREY}}>
          ({minAyah} - {maxAyah})
        </CustomText>
      </View>

      <View style={{height: 16}} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          value={minAyahText}
          keyboardType="numeric"
          onChangeText={(text) => {
            setMinAyahText(text);
          }}
          onBlur={() => {
            let theNumber = Number(minAyahText.split(/\D/).join(''));
            if (!theNumber || theNumber < 1) {
              theNumber = 1;
            } else if (theNumber > maxAyah) {
              theNumber = maxAyah;
            }
            setMinAyah(theNumber);
            setMinAyahText(theNumber + '');
          }}
          style={textInputStyle}
        />
        <View style={{width: 47, alignItems: 'center'}}>
          <CustomText bold>-</CustomText>
        </View>
        <TextInput
          value={maxAyahText}
          keyboardType="numeric"
          onChangeText={(text) => {
            setMaxAyahText(text);
          }}
          onBlur={() => {
            let theNumber = Number(maxAyahText.split(/\D/).join(''));
            if (!theNumber || theNumber > props.numberOfAyah) {
              theNumber = props.numberOfAyah;
            } else if (theNumber < minAyah) {
              theNumber = minAyah;
            }
            setMaxAyah(theNumber);
            setMaxAyahText(theNumber + '');
          }}
          style={textInputStyle}
        />
      </View>

      <View style={{height: 16}} />

      <RangeSlider
        min={1}
        max={props.numberOfAyah}
        low={minAyah}
        high={maxAyah}
        step={1}
        floatingLabel
        renderThumb={() => (
          <View
            style={{
              width: 16,
              height: 16,
              borderColor: COLOR_PRIMARY,
              borderWidth: 1,
              borderRadius: 16,
            }}
          />
        )}
        renderRail={() => (
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: COLOR_GREY,
            }}
          />
        )}
        renderRailSelected={() => (
          <View style={{height: 2, backgroundColor: COLOR_PRIMARY}} />
        )}
        onValueChanged={(min, max) => {
          if (
            Number(minAyahText) !== minAyah ||
            Number(maxAyahText) !== maxAyah
          ) {
            return;
          }

          setMinAyah(min);
          setMinAyahText(min + '');

          setMaxAyah(max);
          setMaxAyahText(max + '');

          props.onRangeChange(min, max);
        }}
      />
    </View>
  );
}

export default AyahRangePicker;
