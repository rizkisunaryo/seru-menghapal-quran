import React from 'react';
import {Image, Platform, TextInput, View} from 'react-native';

import {COLOR_GREY, COLOR_PRIMARY} from '../../constants/Colors';
import {STYLE_BOX_SHADOW} from '../../constants/Styles';
import CustomText from '../atoms/CustomText';
import CustomTouchableOpacity from '../atoms/CustomTouchableOpacity';

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

function Header(props: {
  showShadow: boolean;
  title: string;
  isTitleBold?: boolean;
  isBurgerRotated?: boolean;
  withSearchBar?: boolean;
  onBurgerPressed: () => void;
  withMarginTop?: boolean;
  onChangeSearchText?: (text) => void;
}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingTop: 8,
        ...(props.showShadow
          ? {...STYLE_BOX_SHADOW, backgroundColor: 'white'}
          : null),
      }}>
      {props.withMarginTop && (
        <View style={{height: Platform.select({android: 24})}} />
      )}
      <View
        style={{
          marginLeft: 22,
          marginBottom: 6,
          marginRight: 32,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CustomTouchableOpacity onPress={props.onBurgerPressed}>
          <View
            style={{
              ...(props.isBurgerRotated
                ? {transform: [{rotate: '-90deg'}]}
                : null),
            }}>
            <Burger />
          </View>
        </CustomTouchableOpacity>
        <CustomText
          {...(props.isTitleBold ? {bold: true, style: {fontSize: 16}} : null)}>
          {props.title}
        </CustomText>
      </View>
      {props.withSearchBar && (
        <View
          style={{
            height: 32,
            borderColor: COLOR_PRIMARY,
            borderWidth: 1,
            borderRadius: 50,
            marginHorizontal: 32,
            marginBottom: 16,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 12,
            paddingRight: 8,
          }}>
          <TextInput
            onChangeText={props.onChangeSearchText}
            placeholder="Cari surat"
            placeholderTextColor={COLOR_GREY}
            style={{
              flex: 1,
              padding: 0,
              fontSize: 12,
              fontFamily: 'Quicksand-Light',
              color: COLOR_PRIMARY,
            }}
          />
          <Image source={require('../../../assets/images/search.png')} />
        </View>
      )}
    </View>
  );
}

export default Header;
