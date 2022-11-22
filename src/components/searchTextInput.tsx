import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchTextInput = ({
  placeholder,
  onChangeText,
  styleview,
  styletxtinput,
  icon,
}: any) => {
  return (
    <View style={[styles.textInputView, styleview]}>
      {icon && (
        <TouchableOpacity style={styles.searchView}>
          <Image
            style={styles.iconStyle}
            source={icon}
          />
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.txtInput, styletxtinput]}
        placeholder={placeholder}
        placeholderTextColor="black"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchTextInput;

const styles = StyleSheet.create({
  textInputView: {
    borderWidth: 1,
    width: 310,
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 10,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    paddingRight: 20,
  },
  txtInput: {
    marginHorizontal: 20,
    height: 45,
    fontSize: 14,
    color: 'black',
    width: 220,
  },
  searchView: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  iconStyle:{
    height: 30, width: 30, resizeMode: 'contain'
  }
});
