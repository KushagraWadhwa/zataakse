/* eslint-disable react-native/no-inline-styles */
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '../../../core-constants';
import {Styles} from './HeaderBackButton.styles';
import {LocalSvg} from 'react-native-svg/css';

interface HeaderBackButtonProps {
  title?: string;
  onChangeText?: (text: string) => void;
  placeholderText?: string;
  value?: string;
  isMasked?: boolean | false;
  viewStyle?: StyleProp<ViewStyle>;
  fontsStyle?: StyleProp<TextStyle>;
  placeholderColor?: string;
}

const HeaderBackButton = (props: HeaderBackButtonProps) => {
  return (
    <View style={[Styles.mainView, props?.viewStyle]}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center'}}>
          <LocalSvg asset={require('../../../../assets/blackBack.svg')} />
        </View>
        <View style={{marginLeft: 15}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: colors.black,
              marginBottom: 5,
            }}>
            {'Product Categories'}
          </Text>
          <Text style={{fontSize: 12, color: colors.black}}>
            {'Select any product to add'}
          </Text>
        </View>
      </View>

      <View style={{justifyContent: 'center'}}>
        <LocalSvg asset={require('../../../../assets/blackSearch.svg')} />
      </View>
    </View>
  );
};

export default HeaderBackButton;
