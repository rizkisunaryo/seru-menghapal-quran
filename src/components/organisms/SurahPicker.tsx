import React from 'react';
import {FlatList, Image, Modal, TouchableOpacity, View} from 'react-native';
import FuzzySearch from 'fuzzy-search';

import {COLOR_GREY_2} from '../../constants/Colors';
import {DataType} from '../../data/DataType';
import CustomText from '../atoms/CustomText';
import Header from './Header';

function SurahPicker(props: {
  visible: boolean;
  onRequestClose: () => void;
  quranData: DataType[];
  onPickSurah: (surahNumber: number) => void;
}) {
  const [showShadow, setShowShadow] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const searchResultData = new FuzzySearch(
    props.quranData,
    ['chapterName', 'chapterNameTranslate.id'],
    {
      caseSensitive: false,
    },
  ).search(searchText) as DataType[];

  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      animationType="slide">
      <Header
        onBurgerPressed={props.onRequestClose}
        showShadow={showShadow}
        title="Daftar Surat"
        isBurgerRotated
        isTitleBold
        withSearchBar
        onChangeSearchText={setSearchText}
      />
      {searchResultData.length > 0 ? (
        <FlatList
          onScroll={(e) => {
            if (!showShadow && e.nativeEvent.contentOffset.y > 0) {
              setShowShadow(true);
            } else if (showShadow && e.nativeEvent.contentOffset.y <= 0) {
              setShowShadow(false);
            }
          }}
          style={{paddingHorizontal: 32}}
          data={searchResultData}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: COLOR_GREY_2}} />
          )}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => props.onPickSurah(item.chapterNo)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <CustomText bold style={{marginRight: 8}}>
                {item.chapterName}
              </CustomText>
              <CustomText style={{fontSize: 10}}>
                {item.chapterNameTranslate?.id}
              </CustomText>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.chapterNo + ''}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            zIndex: -1,
          }}>
          <Image source={require('../../../assets/images/not-found.png')} />
          <CustomText bold style={{fontSize: 24}}>
            Ops,
          </CustomText>
          <CustomText style={{fontSize: 24}}>surat yang kamu cari</CustomText>
          <CustomText bold style={{fontSize: 24}}>
            tidak ada
          </CustomText>
        </View>
      )}
    </Modal>
  );
}

export default SurahPicker;
