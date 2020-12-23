import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomText from './components/atoms/CustomText';
import {COLOR_PRIMARY, COLOR_BLUE_2} from './constants/Colors';
import CustomTouchableOpacity from './components/atoms/CustomTouchableOpacity';
import {STYLE_BOX_SHADOW} from './constants/Styles';
import AyahRangePicker from './components/organisms/AyahRangePicker';

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

          <AyahRangePicker
            numberOfAyah={286}
            onRangeChange={(min, max) => console.log(min, max)}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default App;
