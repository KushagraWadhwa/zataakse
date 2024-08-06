import React from 'react';
import {Styles} from '../styles/search.styles';
import {View} from 'react-native';
import {SearchInputField} from '../../../core-components/atoms';

const Search = () => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.searchShadow}>
        <SearchInputField />
      </View>
    </View>
  );
};

export default Search;
