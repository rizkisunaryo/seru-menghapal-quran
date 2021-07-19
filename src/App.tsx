import React from 'react';

import {SafeAreaView, View, StatusBar, ScrollView} from 'react-native';

import AyahRangePicker from './components/organisms/AyahRangePicker';
import AyahNumber from './components/molecules/AyahNumber';
import SurahName from './components/molecules/SurahName';
import AyahPlayer from './components/organisms/AyahPlayer';
import data from './data';
import Header from './components/organisms/Header';
import SurahPicker from './components/organisms/SurahPicker';
import {DataType} from './data/DataType';

function App() {
  const [showShadow, setShowShadow] = React.useState(false);
  const [showSurahPicker, setShowSurahPicker] = React.useState(false);
  const [minAyah, setMinAyah] = React.useState(1);
  const [maxAyah, setMaxAyah] = React.useState(286);
  const [ayahNumber, setAyahNumber] = React.useState(0);
  const [surahNumber, setSurahNumber] = React.useState(1);

  const surahData = data.find(el => el.chapterNo === surahNumber);

  React.useEffect(() => {
    setAyahNumber(0);
  }, [surahNumber]);

  return (
    <>
      <SafeAreaView style={{height: '100%'}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <Header
          showShadow={showShadow}
          title="Yuk menghafal Al-Quran!"
          onBurgerPressed={() => setShowSurahPicker(true)}
          withMarginTop
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={e => {
            if (!showShadow && e.nativeEvent.contentOffset.y > 0) {
              setShowShadow(true);
            } else if (showShadow && e.nativeEvent.contentOffset.y <= 0) {
              setShowShadow(false);
            }
          }}>
          <View style={{paddingHorizontal: 32}}>
            <SurahName
              surahName={surahData?.chapterName ?? ''}
              numberOfAyah={surahData?.lastVerseNo ?? 0}
            />

            <View style={{height: 16}} />

            <AyahRangePicker
              surahNumber={surahNumber}
              numberOfAyah={surahData?.lastVerseNo ?? 0}
              onRangeChange={(min, max) => {
                setMinAyah(min);
                setMaxAyah(max);
              }}
            />

            <View style={{height: 16}} />

            <AyahNumber
              surahName={surahData?.chapterName ?? ''}
              ayahNumber={ayahNumber}
            />

            <View style={{height: 32}} />

            <AyahPlayer
              minAyah={minAyah}
              maxAyah={maxAyah}
              onAyahSelected={setAyahNumber}
              surahData={surahData || ({} as DataType)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      <SurahPicker
        onRequestClose={() => setShowSurahPicker(false)}
        visible={showSurahPicker}
        quranData={data.filter(
          el => el.lastVerseNo === Object.keys(el.verses).length,
        )}
        onPickSurah={val => {
          setSurahNumber(val);
          setShowSurahPicker(false);
        }}
      />
    </>
  );
}

export default App;
