import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {COLOR_PRIMARY} from '../../constants/Colors';
import {STYLE_BOX_SHADOW} from '../../constants/Styles';
import CustomText from '../atoms/CustomText';

function CoveringBox(props: {size: number; children: any}) {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: props.size,
        height: props.size,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
}

function AyahNumber(props: {surahName: string; ayahNumber?: number}) {
  const maxWidth = Dimensions.get('window').width - 64;
  const ayahNumberWidth = maxWidth > 347 ? 347 : maxWidth;
  return (
    <View
      style={[
        STYLE_BOX_SHADOW,
        {
          width: ayahNumberWidth,
          height: ayahNumberWidth,
          borderRadius: 16,
          backgroundColor: 'white',
        },
      ]}>
      <CoveringBox size={ayahNumberWidth}>
        <Image
          source={require('../../../assets/images/ayah-background.png')}
          style={{maxWidth: '82%'}}
          resizeMode="contain"
        />
      </CoveringBox>
      {props.ayahNumber ? (
        <>
          <View
            style={{
              height: ayahNumberWidth * 0.26,
              paddingHorizontal: 32,
              justifyContent: 'flex-end',
            }}>
            <CustomText
              style={{color: COLOR_PRIMARY, fontSize: 16, textAlign: 'center'}}>
              Uji hafalanmu di surat{' '}
              <CustomText bold style={{color: COLOR_PRIMARY, fontSize: 16}}>
                {props.surahName}
              </CustomText>{' '}
              ayat
            </CustomText>
          </View>
          <CoveringBox size={ayahNumberWidth}>
            <CustomText
              bold
              style={{
                color: COLOR_PRIMARY,
                fontSize: Math.floor(ayahNumberWidth * 0.34),
              }}>
              {props.ayahNumber}
            </CustomText>
          </CoveringBox>
        </>
      ) : (
        <CoveringBox size={ayahNumberWidth}>
          <CustomText style={{color: COLOR_PRIMARY, fontSize: 24}}>
            Mulai acak ayat
          </CustomText>
        </CoveringBox>
      )}
    </View>
  );
}

export default AyahNumber;
