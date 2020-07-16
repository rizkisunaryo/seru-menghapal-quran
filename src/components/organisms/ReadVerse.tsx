import React from 'react';
import {View} from 'react-native';

import CustomText from '../atoms/CustomText';
import ShowButtonAnswer from '../molecules/ShowButtonAnswer';
import data from '../../data';

function ReadVerse(props: {visible: boolean; chapter: number; verse: number}) {
  const chapterData = data.find((el) => el.chapterNo === props.chapter);
  const selectedData = chapterData?.verses[props.verse];

  const [helper, setHelper] = React.useState('');
  const [showFull, setShowFull] = React.useState(false);
  const [full, setFull] = React.useState('');

  React.useEffect(() => {
    setHelper('');
    setShowFull(false);
    setFull('');
  }, [props.chapter, props.verse]);

  if (!props.visible) {
    return null;
  }
  return (
    <>
      <CustomText style={{textAlign: 'center'}}>
        Silahkan baca surat{' '}
        <CustomText style={{fontWeight: 'bold'}}>
          {chapterData?.chapterName}
        </CustomText>{' '}
        ayat:
      </CustomText>
      <CustomText style={{fontSize: 30, textAlign: 'center'}}>
        {props.verse}
      </CustomText>
      <View style={{height: 16}} />
      <ShowButtonAnswer
        onPress={() => {
          setHelper(selectedData?.helper || '');
          setShowFull(true);
        }}
        buttonTitle="Tampilkan pengingat"
        answer={helper}
      />
      <View style={{height: 8}} />
      {showFull && (
        <ShowButtonAnswer
          onPress={() => setFull(selectedData?.full || '')}
          buttonTitle="Tampilkan seluruh ayat"
          answer={full}
        />
      )}
    </>
  );
}

export default ReadVerse;
