import React from 'react';

import {
  SafeAreaView,
  Button,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';

import CustomTextInput from './components/molecules/CustomTextInput';
import CustomText from './components/atoms/CustomText';
import data from './data';
import ReadVerse from './components/organisms/ReadVerse';
import {randomizeNumber} from './utils/NumberUtils';
import CustomPicker from './components/molecules/CustomPicker';

function App() {
  const [chapter, setChapter] = React.useState(data[0].chapterNo);
  const [showReadVerse, setShowReadVerse] = React.useState(false);
  const [fromVerse, setFromVerse] = React.useState(2);
  const [toVerse, setToVerse] = React.useState(data[0].lastVerseNo);
  const [verse, setVerse] = React.useState(2);

  const getFromVerse = React.useCallback(() => {
    return chapter === 1 ? 2 : 1;
  }, [chapter]);

  const getToVerse = React.useCallback(() => {
    return (
      data.find((el) => el.chapterNo === chapter)?.lastVerseNo ?? getFromVerse()
    );
  }, [chapter, getFromVerse]);

  React.useEffect(() => {
    setFromVerse(getFromVerse());
    setToVerse(getToVerse());
  }, [chapter, getFromVerse, getToVerse]);
  React.useEffect(() => setShowReadVerse(false), [chapter, fromVerse, toVerse]);

  return (
    <SafeAreaView style={{padding: 8, backgroundColor: '#DDD', height: '100%'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{height: Platform.select({android: 24})}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText>Pilih surat:</CustomText>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 8,
            }}>
            <CustomPicker
              selectedStyle={{
                padding: 8,
              }}
              options={data.map((el) => ({
                label: `${el.chapterNo}. ${el.chapterName}`,
                value: el.chapterNo,
              }))}
              placeholder="--- Pilih surat ---"
              onValueChange={(itemValue) => setChapter(Number(itemValue))}
              selectedValue={chapter}
            />
          </View>
        </View>
        <View style={{height: 16}} />
        <CustomText style={{textAlign: 'center'}}>Acak ayat</CustomText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 4,
            marginBottom: 16,
          }}>
          <CustomTextInput
            label="Dari ayat"
            defaultValue={getFromVerse()}
            onChangeText={(text) => setFromVerse(Number(text))}
          />
          <CustomTextInput
            label="Sampai ayat"
            defaultValue={getToVerse()}
            onChangeText={(text) => setToVerse(Number(text))}
          />
        </View>
        <Button
          title="Dapatkan ayat"
          onPress={() => {
            setVerse(randomizeNumber(fromVerse, toVerse, verse));
            setShowReadVerse(true);
          }}
        />
        <View style={{height: 16}} />

        <ReadVerse visible={showReadVerse} chapter={chapter} verse={verse} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
