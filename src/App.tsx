import React from 'react';

import {SafeAreaView, View, StatusBar, Platform, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RangeSlider from 'rn-range-slider';

import CustomText from './components/atoms/CustomText';
import {COLOR_PRIMARY, COLOR_BLUE_2, COLOR_GREY} from './constants/Colors';
import CustomTouchableOpacity from './components/atoms/CustomTouchableOpacity';
import {STYLE_BOX_SHADOW} from './constants/Styles';

function Burger() {
  return (
    <View style={{width: 20, height: 20, justifyContent: 'space-between'}}>
      <View
        style={{backgroundColor: COLOR_PRIMARY, borderRadius: 8, height: 4}}
      />
      <View
        style={{
          backgroundColor: COLOR_PRIMARY,
          borderRadius: 8,
          height: 4,
          width: 12.73,
        }}
      />
      <View
        style={{backgroundColor: COLOR_PRIMARY, borderRadius: 8, height: 4}}
      />
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={{paddingTop: 8, height: '100%'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{height: Platform.select({android: 24})}} />
      <View
        style={{
          marginLeft: 22,
          marginBottom: 6,
          marginRight: 32,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CustomTouchableOpacity>
          <Burger />
        </CustomTouchableOpacity>
        <CustomText style={{color: COLOR_PRIMARY}}>
          Yuk menghafal Al-Quran!
        </CustomText>
      </View>

      <View style={[STYLE_BOX_SHADOW, {paddingHorizontal: 32}]}>
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
              Al-Baqarah{' '}
            </CustomText>
            <CustomText style={{color: 'white'}}>(286 Ayat)</CustomText>
          </View>
        </LinearGradient>

        <View style={{height: 16}} />

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
            <CustomText style={{color: COLOR_PRIMARY}}>Surat Ayat</CustomText>
            <View style={{width: 9}} />
            <CustomText style={{color: COLOR_GREY}}>(99 - 282)</CustomText>
          </View>

          <View style={{height: 16}} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{
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
              }}
            />
            <View style={{width: 47, alignItems: 'center'}}>
              <CustomText bold style={{color: COLOR_PRIMARY}}>
                -
              </CustomText>
            </View>
            <TextInput
              style={{
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
              }}
            />
          </View>

          <View style={{height: 16}} />

          <RangeSlider
            min={1}
            max={286}
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
            onValueChanged={(low: any, high: any) => console.log(low, high)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
