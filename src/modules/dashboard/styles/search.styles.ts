import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants';

export const Styles = StyleSheet.create({
  mainView: {backgroundColor: 'white', flex: 1},
  searchShadow: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
});
