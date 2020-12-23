import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
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
  const [showShadow, setShowShadow] = React.useState(false);

  const maxWidth = Dimensions.get('window').width - 64;
  const ayahBackgroundWidth = maxWidth > 347 ? 347 : maxWidth;

  return (
    <SafeAreaView style={{height: '100%'}}>
      <View
        style={{
          paddingTop: 8,
          ...(showShadow
            ? {...STYLE_BOX_SHADOW, backgroundColor: 'white'}
            : null),
        }}>
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
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          if (!showShadow && e.nativeEvent.contentOffset.y > 0) {
            setShowShadow(true);
          } else if (showShadow && e.nativeEvent.contentOffset.y <= 0) {
            setShowShadow(false);
          }
        }}>
        <View style={{paddingHorizontal: 32}}>
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

          <View style={{height: 16}} />

          <View
            style={[
              STYLE_BOX_SHADOW,
              {
                width: ayahBackgroundWidth,
                height: maxWidth,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
                backgroundColor: 'white',
              },
            ]}>
            <Image
              source={require('../assets/images/ayah-background.png')}
              style={{maxWidth: '82%'}}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
