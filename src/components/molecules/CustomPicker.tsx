import React from 'react';
import {
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  View,
  Platform,
  ViewStyle,
} from 'react-native';
import CustomText from '../atoms/CustomText';

function CustomPicker(props: {
  placeholder?: string | number;
  selectedValue?: string | number;
  options: {label: string | number; value: string | number}[];
  onValueChange: (itemValue: string | number) => void;
  selectedStyle: ViewStyle;
}) {
  const selected: string | number | undefined = props.selectedValue
    ? props.options.find((el) => el.value === props.selectedValue)?.label
    : props.placeholder;

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={props.selectedStyle}>
        <CustomText>{selected || ''} ▼</CustomText>
      </TouchableOpacity>
      <Modal
        statusBarTranslucent
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}>
        <SafeAreaView>
          <View style={{height: Platform.select({android: 24})}} />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}} />
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <CustomText style={{fontSize: 24}}>✕</CustomText>
            </TouchableOpacity>
          </View>
          <FlatList
            data={props.options}
            keyExtractor={(item) => item.value + ''}
            renderItem={({item}) => (
              <View style={{borderBottomWidth: 0.5, borderBottomColor: '#DDD'}}>
                <TouchableOpacity
                  style={{padding: 8}}
                  onPress={() => {
                    props.onValueChange(item.value);
                    setShowModal(false);
                  }}>
                  <CustomText>{item.label}</CustomText>
                </TouchableOpacity>
              </View>
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

export default CustomPicker;
