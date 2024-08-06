import React from 'react';
import {Styles} from '../styles/product-categories.styles';
import {SearchInputField} from '../../../core-components/atoms';
import {View} from 'react-native';
import HeaderBackButton from '../../../core-components/atoms/headerBackButton/HeaderBackButton.component';

const ProductCategories = () => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.searchShadow}>
        <HeaderBackButton />
      </View>
    </View>
  );
};

export default ProductCategories;
