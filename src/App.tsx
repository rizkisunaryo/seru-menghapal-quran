import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';

import CustomText from './components/atoms/CustomText';
import {COLOR_PRIMARY} from './constants/Colors';
import CustomTouchableOpacity from './components/atoms/CustomTouchableOpacity';
import {STYLE_BOX_SHADOW} from './constants/Styles';
import AyahRangePicker from './components/organisms/AyahRangePicker';
import AyahNumber from './components/molecules/AyahNumber';
import SurahName from './components/molecules/SurahName';
import AyahPlayer from './components/organisms/AyahPlayer';
import data from './data';

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
  const [minAyah, setMinAyah] = React.useState(1);
  const [maxAyah, setMaxAyah] = React.useState(286);
  const [ayahNumber, setAyahNumber] = React.useState(0);

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
          <CustomText>Yuk menghafal Al-Quran!</CustomText>
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
          <SurahName surahName="Al-Baqarah" numberOfAyah={286} />

          <View style={{height: 16}} />

          <AyahRangePicker
            numberOfAyah={286}
            onRangeChange={(min, max) => {
              setMinAyah(min);
              setMaxAyah(max);
            }}
          />

          <View style={{height: 16}} />

          <AyahNumber surahName="Al-Baqarah" ayahNumber={ayahNumber} />

          <View style={{height: 32}} />

          <AyahPlayer
            minAyah={minAyah}
            maxAyah={maxAyah}
            onAyahSelected={setAyahNumber}
            surahData={data[1]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
