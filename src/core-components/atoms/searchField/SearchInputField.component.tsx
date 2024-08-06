/* eslint-disable react-native/no-inline-styles */
import {StyleProp, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '../../../core-constants';
import {Styles} from './SearchInputField.styles';
import {LocalSvg} from 'react-native-svg/css';

interface SearchInputProps {
  title?: string;
  onChangeText?: (text: string) => void;
  placeholderText?: string;
  value?: string;
  isMasked?: boolean | false;
  viewStyle?: StyleProp<ViewStyle>;
  fontsStyle?: StyleProp<TextStyle>;
  placeholderColor?: string;
}

const SearchInputField = (props: SearchInputProps) => {
  return (
    <View style={[Styles.mainView, props?.viewStyle]}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center'}}>
          <LocalSvg asset={require('../../../../assets/back.svg')} />
        </View>
        <TextInput
          secureTextEntry={props?.isMasked}
          value={props?.value}
          autoCorrect={false}
          style={[
            Styles.inputText,
            {
              paddingTop:
                props?.value?.length > 0 && props?.title?.length > 0 ? 5 : 10,
            },
            props?.fontsStyle,
          ]}
          placeholder={props?.placeholderText ?? 'Enter Username'}
          placeholderTextColor={
            props?.placeholderColor
              ? props?.placeholderColor
              : colors.textDarkGray
          }
          onChangeText={props?.onChangeText}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        {props?.value?.length > 1 && (
          <View style={{justifyContent: 'center', right: 10}}>
            <LocalSvg asset={require('../../../../assets/cancel.svg')} />
          </View>
        )}
        <View style={{justifyContent: 'center'}}>
          <LocalSvg asset={require('../../../../assets/search.svg')} />
        </View>
      </View>
    </View>
  );
};

export default SearchInputField;
