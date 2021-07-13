import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLOR_GREY, COLOR_PRIMARY} from '../../constants/Colors';
import {DataType} from '../../data/DataType';
import ArabText from '../atoms/ArabText';
import CustomText from '../atoms/CustomText';

function WhiteCover() {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
      }}
    />
  );
}

function ReminderAnswerButton(props: {
  backgroundColor?: string;
  labelColor?: string;
  label: string;
  isActive?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={{flex: 1, height: 40}}
      onPress={props.isActive ? props.onPress : undefined}>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: COLOR_PRIMARY,
          borderRadius: 4,
          backgroundColor: props.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomText
          style={{
            ...(props.labelColor ? {color: props.labelColor} : null),
            fontSize: 12,
          }}>
          {props.label}
        </CustomText>
      </View>
      {!props.isActive && <WhiteCover />}
    </TouchableOpacity>
  );
}

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const spaceSize = 0.07 * windowWidth;

function ReminderAnswerBox(props: {
  title: string;
  onRequestClose: () => void;
  surahName: string;
  ayahNumber: number;
  content: string;
  onBottomButtonPressed: () => void;
  buttonLabel: string;
  buttonLabelColor?: string;
  buttonBackgroundColor?: string;
}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <View
        style={{
          paddingLeft: 32,
          paddingRight: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 56,
          borderBottomWidth: 0.5,
          borderBottomColor: COLOR_GREY,
        }}>
        <CustomText style={{fontSize: 20}}>{props.title}</CustomText>
        <TouchableOpacity
          onPress={props.onRequestClose}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../../assets/images/cross.png')} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 32,
          paddingTop: 16,
          paddingBottom: 32,
        }}>
        <CustomText style={{fontSize: 16}}>
          <CustomText bold style={{fontSize: 16}}>
            {props.surahName}
          </CustomText>{' '}
          ayat {props.ayahNumber}
        </CustomText>

        <View style={{height: 32}} />

        <ArabText>{props.content}</ArabText>

        <View style={{height: 28}} />

        <TouchableOpacity
          onPress={props.onBottomButtonPressed}
          style={{
            height: 40,
            backgroundColor: props.buttonBackgroundColor,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLOR_PRIMARY,
          }}>
          <CustomText
            style={{
              ...(props.buttonLabelColor
                ? {color: props.buttonLabelColor}
                : null),
              fontSize: 12,
            }}>
            {props.buttonLabel}
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ReminderModal(props: {
  visible: boolean;
  onRequestClose: () => void;
  onShowAnswerPressed: () => void;
  surahName: string;
  ayahNumber: number;
  reminder: string;
}) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <TouchableWithoutFeedback onPress={props.onRequestClose}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
          }}
        />
      </TouchableWithoutFeedback>
      <ReminderAnswerBox
        ayahNumber={props.ayahNumber}
        content={props.reminder}
        onBottomButtonPressed={props.onShowAnswerPressed}
        onRequestClose={props.onRequestClose}
        surahName={props.surahName}
        title="Pengingat"
        buttonBackgroundColor={COLOR_PRIMARY}
        buttonLabel="Jawaban"
        buttonLabelColor="white"
      />
    </Modal>
  );
}

function AnswerModal(props: {
  visible: boolean;
  onRequestClose: () => void;
  onShowReminderPressed: () => void;
  surahName: string;
  ayahNumber: number;
  ayah: string;
}) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <TouchableWithoutFeedback onPress={props.onRequestClose}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
          }}
        />
      </TouchableWithoutFeedback>
      <ReminderAnswerBox
        ayahNumber={props.ayahNumber}
        content={props.ayah}
        onBottomButtonPressed={props.onShowReminderPressed}
        onRequestClose={props.onRequestClose}
        surahName={props.surahName}
        title="Jawaban"
        buttonLabel="Pengingat"
      />
    </Modal>
  );
}

function AyahPlayer(props: {
  surahData: DataType;
  minAyah: number;
  maxAyah: number;
  onAyahSelected: (ayahNumber: number) => void;
}) {
  const [ayahNumber, setAyahNumber] = React.useState(0);
  const [isActive, setActive] = React.useState(false);
  const [showReminder, setShowReminder] = React.useState(false);
  const [showAnswer, setShowAnswer] = React.useState(false);

  React.useEffect(() => setActive(false), [props.surahData]);

  return (
    <>
      <View
        style={{
          height: 96,
          paddingHorizontal: 4,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ReminderAnswerButton
          label="Pengingat"
          isActive={isActive}
          onPress={() => setShowReminder(true)}
        />

        <View style={{width: spaceSize}} />

        <TouchableOpacity
          onPress={() => {
            setActive(true);
            const ayahRange = props.maxAyah - props.minAyah;
            const tempAyahNumber =
              props.minAyah + Math.round(Math.random() * ayahRange);
            setAyahNumber(tempAyahNumber);
            props.onAyahSelected(tempAyahNumber);
          }}
          style={{
            width: 64,
            height: 64,
            borderRadius: 64,
            borderWidth: 4,
            borderColor: COLOR_PRIMARY,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {isActive ? (
            <Image source={require('../../../assets/images/reshuffle.png')} />
          ) : (
            <>
              <View style={{width: 4}} />
              <Image source={require('../../../assets/images/play.png')} />
            </>
          )}
        </TouchableOpacity>

        <View style={{width: spaceSize}} />

        <ReminderAnswerButton
          isActive={isActive}
          label="Jawaban"
          backgroundColor={COLOR_PRIMARY}
          labelColor="white"
          onPress={() => setShowAnswer(true)}
        />
      </View>

      {Platform.OS === 'android' && (
        <Modal
          transparent
          animationType="fade"
          visible={showReminder || showAnswer}
          onRequestClose={() => {
            setShowReminder(false);
            setShowAnswer(false);
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                width: windowWidth,
                height: windowHeight,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </TouchableWithoutFeedback>
        </Modal>
      )}

      <ReminderModal
        onRequestClose={() => setShowReminder(false)}
        onShowAnswerPressed={() => {
          setShowReminder(false);
          setShowAnswer(true);
        }}
        visible={showReminder}
        surahName={props.surahData.chapterName}
        ayahNumber={ayahNumber}
        reminder={props.surahData.verses?.[ayahNumber]?.helper}
      />

      <AnswerModal
        onRequestClose={() => setShowAnswer(false)}
        onShowReminderPressed={() => {
          setShowAnswer(false);
          setShowReminder(true);
        }}
        visible={showAnswer}
        surahName={props.surahData.chapterName}
        ayahNumber={ayahNumber}
        ayah={props.surahData.verses?.[ayahNumber]?.full}
      />
    </>
  );
}

export default AyahPlayer;
